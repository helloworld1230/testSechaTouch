/**
 * 
 */

Ext.setup(
		icon:'icon.jpg',
		glossOnIcon:false,
		tabletStartupScreen:'icon.jpg',
		phoneStartupScreen:'icon.jpg',
		onReady:function(){
			var panel = new Ext.Panel({
				fullscrren:true,
				html:'Hello World'
			});
			panel.show();
		}
);