module.exports = function(grunt) {

  grunt.loadTasks('./grunt/tasks');

  grunt.loadNpmTasks('grunt-image-embed');
  grunt.loadNpmTasks('grunt-contrib-mincss');

  grunt.registerTask('build:deploy', 'shell:compileDeploy concat:deploy min');
  grunt.registerTask('build:dev', 'shell:compileDev concat:css imageEmbed mincss css2js concat:dev');
//  grunt.registerTask('default', 'build:deploy build:dev');
  grunt.registerTask('default', 'amberc');

  grunt.initConfig({
    pkg: '<json:package.json>',

    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },

    amberc: {
      _config: {
        amber_dir: process.cwd(),
        closure_jar: ''
      },
      amber_kernel: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Kernel-Objects.st', 'Kernel-Classes.st', 'Kernel-Methods.st', 'Kernel-Collections.st',
              'Kernel-Exceptions.st', 'Kernel-Transcript.st', 'Kernel-Announcements.st'],
        deploy: true
      },
      amber_compiler: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Compiler.st', 'Compiler-Exceptions.st', 'Compiler-Core.st', 'Compiler-AST.st',
              'Compiler-IR.st', 'Compiler-Inlining.st', 'Compiler-Semantic.st'],
        deploy: true
      },
      amber_canvas: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Canvas.st', 'SUnit.st'],
        deploy: true
      },
      amber_IDE: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['IDE.st', 'Documentation.st'],
        libraries: ['Canvas'],
        deploy: true
      },
      amber_tests: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Kernel-Tests.st', 'Compiler-Tests.st'],
        libraries: ['SUnit']
      },
      amber_examples: {
        working_dir: 'st',
        target_dir : 'js',
        src: ['Examples.st'],
        libraries: ['Canvas', 'IDE']
      },
      server: {
        working_dir: 'server',
        src: ['FileServer.st'],
        main_class: 'FileServer',
        output_name: 'server'
      },
      repl: {
        working_dir: 'repl',
        src: ['REPL.st'],
        main_class: 'Repl',
        output_name: 'amber'
      }
    },

/*
    shell: {
      compileDeploy: {
        stdout: true,
        command: 'bin/amberc -l Kernel-Announcements ' +
          'tmp/amber-compiled.deploy'
      },
      compileDev: {
        stdout: true,
        command: 'bin/amberc -l ' +
          'Compiler-Exceptions,Compiler-Core,Compiler-AST,Compiler-Semantic,Compiler-IR,Compiler-Inlining,' +
          'parser,Importer-Exporter,Kernel-Announcements,' +
          'SUnit,Compiler-Tests,Kernel-Tests,' +
          'Canvas,IDE,compat ' +
          'tmp/amber-compiled'
      }
    },
*/

    lint: {
      amber: ['js/*.js'],
      server: ['server/*.js'],
      repl: ['repl/*.js'],
      tests: ['test/*.js'],
      grunt: ['grunt.js', 'grunt/**/*.js']
    },

    concat: {
      deploy: {
        src: ['tmp/amber-compiled.deploy.js'],
        dest: 'dist/amber-<%= pkg.version %>.deploy.js'
      },

      css: {
        src: [
          'css/amber.css',
          'js/lib/CodeMirror/codemirror.css',
          'js/lib/CodeMirror/amber.css'
        ],
        dest: 'tmp/amber.css'
      },

      dev: {
        src: [
          'js/lib/jQuery/jquery-ui-1.8.16.custom.min.js',
          'js/lib/jQuery/jquery.textarea.js',
          'js/lib/CodeMirror/codemirror.js',
          'js/lib/CodeMirror/smalltalk.js',
          'tmp/amber-compiled.js',
          'tmp/css.js'
        ],
        dest: 'dist/amber-<%= pkg.version %>.js'
      }
    },

    imageEmbed: {
      dev: {
        src: ['tmp/amber.css'],
        dest: 'tmp/amber-images.css',
        options: {baseDir: 'public'}
      }
    },

    mincss: {
      dev: {
        src: ['tmp/amber-images.css'],
        dest: 'tmp/amber.min.css'
      }
    },

    css2js: {
      dev: {
        src: 'tmp/amber.min.css',
        dest: 'tmp/css.js'
      }
    },

    min: {
      deploy: {
        src: 'dist/amber-<%= pkg.version %>.deploy.js',
        dest: 'dist/amber-<%= pkg.version %>.deploy.min.js'
      }
    }
  });

  grunt.registerMultiTask('css2js', 'Embed CSS into JS', function() {
    var cssContent = grunt.task.directive(grunt.file.expandFiles(this.data.src)[0], grunt.file.read);
    var content =
      "var css='"+cssContent+"';" +
      "var cssTag = document.createElement('link');" +
      "document.head = document.head || document.getElementsByTagName('head')[0];" +
      "cssTag.href = 'data:text/css,'+css;" +
      "cssTag.rel = 'stylesheet';" +
      "document.head.appendChild(cssTag);";

    grunt.file.write(this.data.dest, content);

    grunt.log.writeln('File "' + this.data.dest + '" created.');
  });
};
