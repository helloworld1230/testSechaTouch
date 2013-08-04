/**
 * 
 */
Ext.setup(
		icon:'icon.png',
		glossOnIcon:false,
		tableStartupScreen:'tablet_startup.png',
		onReady:function(){
			alert("asdjhn");
			var panel = new Ext.Panel(
					fullscreen:true,
					html:'hello world'
			);
			panel.show();
		}
);