const yaml = require('js-yaml');
const fs   = require('fs');

const original = JSON.parse(fs.readFileSync('static/stack.json', 'utf8'))
const technologies = []
const uniqTechNames = new Set()
original.forEach(function(row) {
  parseRow(row['Research'], row['Area'], row['Cases'], "assess")
  parseRow(row['Trial'], row['Area'], row['Cases'], "trial")
  parseRow(row['Best choice'], row['Area'], row['Cases'], "adopt")
  parseRow(row['Hold'], row['Area'], row['Cases'], "hold")
})
const result = {}
result.name = 'Consolidated'
result.tangramId = '2a21ccc8-e0fe-413c-b14a-819d8cfdb821'
result.domainId = 'a14b212f-74d1-4d93-b40f-0eef3888e866'
result.languages = []
result.frameworks = []
result.techniques = []
result.dataManagement = []
result.tools = []
result.infrastructure = []

technologies.forEach(function(technology) {
  if ((technology.category == "Data"
        && (technology.usage != "Data Product backend" && technology.usage != "Data Product frontend")
          && technology.usage != "Data tool frontend" && technology.usage != "Data tool backend") 
      || technology.usage == "Data storage"
      || technology.usage == "In memory DB"
      || technology.usage == "Internal product integrations"
      || technology.usage == "Product to Product integrations") {
    result.dataManagement.push(convertToResult(technology))
    return
  }
  if (technology.category == "Infrastructure") {
    result.infrastructure.push(convertToResult(technology))
    return
  }

  if (technology.type == "tool") {
    result.tools.push(convertToResult(technology))
    return
  }

  if (technology.type == "framework") {
    result.frameworks.push(convertToResult(technology))
    return
  }

  if (technology.type == "lang") {
    result.languages.push(convertToResult(technology))
    return
  }

})


const finalCount = result.languages.length + result.frameworks.length + result.infrastructure.length
 + result.techniques.length + result.dataManagement.length + result.tools.length
console.log("%s items in source; %s items in result; %s uniq", technologies.length, finalCount, uniqTechNames.size)
const resultYaml = yaml.dump(result, {'noRefs': true})
fs.writeFile('static/stack-adeo.yml', resultYaml, (err) => {
  if (err) {
      console.log(err);
  }
})

function convertToResult(technology) {
  return {
    name: technology.name,
    stage: technology.state,
    category: technology.category,
    usage: technology.usage
  }
}

function parseRow(row, area, cases, state) {
  if (!row) return

  if (row.split("</code>").length > 0) {
    row.split("</code>").forEach(function(technology) {
      if (!technology) return

      var type = technology.split("'>")[0].replace("<code class='", "").trim()
      var techname = technology.split("'>")[1].trim()
      uniqTechNames.add(techname)
      technologies.push({
        category: area,
        state: state,
        usage: cases,
        type: type,
        name: techname
      })
      console.log("%s %s in %s (%s, %s)", type, techname, state, area, cases)

    })
  }
}