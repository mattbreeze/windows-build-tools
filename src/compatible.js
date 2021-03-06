module.export = (function () {
  if (process.version === 'v7.1.0') {
    console.warn('--------------------------------------------------------------')
    console.warn('You are running Node v7.1.0, which has a known bug on Windows,')
    console.warn('breaking Node applications using the console (Powershell/CMD).')
    console.warn('Please upgrade to a newer version or use Node v7.0.0.\n\n')
    console.warn('Visit https://github.com/nodejs/node/issues/9542 for details.\n')
    console.warn('windows-build-tools will now run, but might fail.')
    console.warn('---------------------------------------------------------------')
  }

  if (!/^win/.test(process.platform)) {
    throw new Error('This script upgrades npm on Windows, but the OS is not Windows.')
  }
}())
