var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StopWatch = function (_React$Component) {
  _inherits(StopWatch, _React$Component);

  function StopWatch(props) {
    _classCallCheck(this, StopWatch);

    var _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

    _this.state = {
      timePassedInMilliSeconds: 0
    };
    _this.timer = null;

    _this.updateTime = _this.updateTime.bind(_this);
    _this.start = _this.start.bind(_this);
    _this.stopCounting = _this.stopCounting.bind(_this);
    _this.resetCounter = _this.resetCounter.bind(_this);

    return _this;
  }

  _createClass(StopWatch, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.timer) {
        var startTime = Date.now();
        this.timer = setInterval(function () {
          var stopTime = Date.now();
          var timePassedInMilliSeconds = stopTime - startTime + _this2.state.timePassedInMilliSeconds;
          _this2.setState({
            timePassedInMilliSeconds: timePassedInMilliSeconds
          });
          startTime = stopTime;
        }, 250); // Executed every 250 millisecond
      }
    }
  }, {
    key: "resetCounter",
    value: function resetCounter() {
      this.setState({
        timePassedInMilliSeconds: 0
      });
    }
  }, {
    key: "stopCounting",
    value: function stopCounting() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      console.log(this);
      this.setState({
        timePassedInMilliSeconds: this.state.timePassedInMilliSeconds + 1000
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          { className: "border px-3 py-4 rounded my-3 mx-auto text-center", style: { maxWidth: "300px" } },
          Math.floor(this.state.timePassedInMilliSeconds / 1000),
          " s"
        ),
        React.createElement(
          "div",
          { className: "d-flex justify-content-center" },
          React.createElement(
            "button",
            { onClick: this.start, className: "btn btn-outline-primary mr-2" },
            "start"
          ),
          React.createElement(
            "button",
            { onClick: this.stopCounting, className: "btn btn-outline-danger mr-2" },
            "stop"
          ),
          React.createElement(
            "button",
            { onClick: this.resetCounter, className: "btn btn-outline-warning" },
            "reset"
          )
        )
      );
    }
  }]);

  return StopWatch;
}(React.Component);

ReactDOM.render(React.createElement(StopWatch, null), document.getElementById('root'));