const yaml = require('js-yaml');
const fs   = require('fs');

try {
  const original = JSON.parse(fs.readFileSync('static/stack.json', 'utf8'))
  const result = original
  
  const resultYaml = yaml.dump(result, {'noRefs': true})
  //console.log(resultYaml)
  fs.writeFile('static/stack-adeo.yml', resultYaml, (err) => {
    if (err) {
        console.log(err);
    }
})
} catch (error) {
  core.setFailed(error.message)
}
