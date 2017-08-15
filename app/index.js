var yosay = require('yosay'); // yeoman弹出框
var generators = require('yeoman-generator'),
    _ = require('yeoman-generator/node_modules/lodash'),
    glob = require('yeoman-generator/node_modules/glob'),
    chalk = require('yeoman-generator/node_modules/chalk'),
    log = console.log,
    fs = require('fs'),
    path = require('path'),
    del = require('del'),
    generatorName = 'vue';

module.exports = generators.Base.extend({
    info: function () {
        this.log(chalk.green(
            '即将构建项目'
        ));
    },
    constructor: function () {
        generators.Base.apply(this, arguments);

        var dirs = glob.sync('+(src)');
        if (_.includes(dirs, 'src')) {
            log(chalk.bold.green('资源已经初始化，退出...'));
            setTimeout(function () {
                process.exit(1);
            }, 200);
        }
    },
    prompting: function () {
        var questions = [{
                name: 'projectAssets',
                type: 'list',
                message: '请选择模板:',
                choices: [{
                    name: 'vue pc端',
                    value: 'pc',
                }, {
                    name: 'vue h5端',
                    value: 'h5'
                }]
            },
            {
                type: 'input',
                name: 'projectName',
                message: '输入项目名称',
                default: this.appname
            },
            {
                type: 'input',
                name: 'projectAuthor',
                message: '项目开发者',
                store: true,
                default: 'zhangfr'
            }, {
                type: 'input',
                name: 'projectVersion',
                message: '项目版本号',
                default: '0.0.1'
            }
        ]
        return this.prompt(questions).then(
            function (answers) {
                for (var item in answers) {
                    answers.hasOwnProperty(item) && (this[item] = answers[item]);
                }
            }.bind(this));
    },
    writing: function () {
        this.projectOutput = './dist';
        //拷贝文件
        this.directory(this.projectAssets, this.projectName);
    },
    end: function () {
        this.log(yosay(
            '项目构建完成!'
        ));
    }
})