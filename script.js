const fs = require('fs')

const targetPath = './src/views/Home.vue'

const mockData = [
  {
    name: 'ybutton',
    path: '@/components/button/index.vue',
    props: {
      text: '我是按钮',
      backgroundColor: 'red',
      color: 'white',
      width: 100,
      height: 40
    }
  }
]

fs.readFile(targetPath, { encoding: 'utf8' }, (err, data) => {
  if (err) throw err
  const result = data.replace(/\/\/ inject-start\n[\s\S]+\/\/ inject-end/, (match, p1, offset, string) => {
    const componentImport = mockData.map(x => `import ${x.name} from '${x.path}'`)
    componentImport.unshift(`// inject-start`)
    componentImport.push(`const components = ${JSON.stringify(mockData, null, 2)}`)
    componentImport.push('const importList = {')
    mockData.forEach(x => componentImport.push(`  '${x.name}': ${x.name}`))
    componentImport.push('}')
    componentImport.push(`// inject-end`)
    // const content = `// inject-start\n${componentImport.join('\n')}\nconst components = ${JSON.stringify(mockData, null, 2)}\n// inject-end`
    return componentImport.join('\n')
  })
  fs.writeFile(targetPath, result, { encoding: 'utf8' }, err => {
    if (err) throw err
  })
})
