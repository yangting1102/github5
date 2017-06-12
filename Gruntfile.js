module.exports = function(grunt){
	//1.引入
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
//	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//2.设置任务:
	grunt.initConfig({
		//压缩js
		uglify:{
			yasuo:{
				options:{
					mangle:false 
				},
				expand:true,
				cwd:'src',
				src:'*.js',
				dest:'datajs',
				rename: function (dest, src) {
					return dest + '/' + src.replace('.js', '.min.js'); 
			  	}
			}
		},
//		//压缩图片
		imagemin:{
			yasou:{
				options:{
					optimizationLevel:3
				},
				expand:true,
				cwd:'img',
				src:['**/*.{png,jig,jpeg,gif}'],
				dest:'ysimage'
			}
		},
//		//压缩CSS
		cssmin:{
			yasuo:{
				options:{
					mangle:false
				},
				expand: true,
				cwd: 'css',
				src:'*.css',
				dest:'yscss',
				ext:'.min.css'
			}
		},
//		//合并css,js
		concat:{
			css:{
				src:['css/jh.css','css/sy.css'],
				dest:'HbCSS/HbCSS.css'
			},
			js:{
				src:['js/box2d.js','js/drag.js'],
				dest:'hbjs/he.js'
			}
		},
//		//压缩HTML
		htmlmin:{
			options: {
					removeComments: true, //移除注释
			        removeCommentsFromCDATA: true,//移除来自字符数据的注释
			        collapseWhitespace: true,//无用空格
			        collapseBooleanAttributes: true,//失败的布尔属性
			        removeAttributeQuotes: true,//移除属性引号
			        removeRedundantAttributes: true,//移除多余的属性
			        useShortDoctype: true,//使用短的跟元素
			        removeEmptyAttributes: true,//移除空的属性
			        removeOptionalTags: true//移除可选附加标签
			      },
			yasuo:{
				expand: true,
				cwd: 'index', 
				src: ['*.html'],
				dest: 'yshtml'
			}
		},
//		//检查js代码
//		jshint: {
//	        js:['js/jian.js'],
//	        options: {
//	            browser: true,
//	            devel: true               
//	            }
//	   },
	   watch:{
	   	a:{
	   		files:['css/*.css','js/*.js','index/index.html','img/*.{jpg,png,gif}'],
	   		tasks:['uglify','imagemin','cssmin','concat','htmlmin'];
	   	}
	   }
	});
	//设置默认任务
	grunt.registerTask('default',['uglify','imagemin','cssmin','concat','htmlmin','watch']);
}
