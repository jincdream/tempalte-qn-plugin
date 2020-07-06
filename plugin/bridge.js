class Bridge{
  constructor(code){
    this.code = code
  }
  setBridge(apis){
    this.apis = apis
  }
  getAPI(){
    return this.apis
  }
}

module.exports = new Bridge("bizCode")