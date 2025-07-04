var HTMLReport = /** @class */ (function () {
    function HTMLReport(title, content) {
        this.title = title;
        this.content = content;
    }
    HTMLReport.prototype.generate = function () {
        return "<h1>".concat(this.title, "</h1><p>").concat(this.content, "</p>");
    };
    return HTMLReport;
}());
var JSONReport = /** @class */ (function () {
    function JSONReport(title, content) {
        this.title = title;
        this.content = content;
    }
    JSONReport.prototype.generate = function () {
        return JSON.stringify({ title: this.title, content: this.content });
    };
    return JSONReport;
}());
var htmlReport = new HTMLReport("oтчет 1", "cодержимое отчета в HTML");
var jsonReport = new JSONReport("oтчет 2", "cодержимое отчета в JSON");
console.log(htmlReport.generate());
console.log(jsonReport.generate());
