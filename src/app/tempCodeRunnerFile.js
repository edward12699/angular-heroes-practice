exports.__esModule = true;
var HerosComponent = /** @class */ (function () {
    function HerosComponent() {
        this.hero = 'Windstorm';
        this.c = 1;
    }
    HerosComponent.sa = function () {
        alert(1);
    };
    HerosComponent.prototype.b = function () { alert(2); };
    HerosComponent.a = 1;
    return HerosComponent;
}());
exports.HerosComponent = HerosComponent;
var herosComponent = new HerosComponent();
console.log(herosComponent.a);