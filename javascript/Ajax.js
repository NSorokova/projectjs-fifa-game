class Ajax  {
    static ajax = null;

    static getThis(){
        if (!this.ajax) {
            this.ajax = new XMLHttpRequest();
        }
        return this.ajax;
    }
    static get(url, callback){
        var request = this.getThis();
        request.open("GET", url);
        request.responseType = 'json'
        request.onload = () => {
            callback(this.ajax.response);
        };
        request.send();

    }
}