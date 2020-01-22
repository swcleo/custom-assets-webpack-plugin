class CustomAssetsWebpackPlugin {
  constructor(options) {
    this.options = { ...options }
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'CustomAssetsWebpackPlugin.emit',
      (compilation, callback) => {
        this.generateAssetsManifestFile(compilation)
        callback()
      }
    )
  }

  generateAssetsManifestFile(compilation) {
    const content = this.options.content

    compilation.assets[this.options.filename] = {
      source: function() {
        return content
      },
      size: function() {
        return content.length
      },
    }
  }
}

module.exports = CustomAssetsWebpackPlugin
