/**
 * 
 */
Ext.application(
{
	name:'MyApp',
	launch:function(){
		var panel =Ext.create('Ext.Panel',{
			id:'mysqlPanel',
			html:'askdjhbawkdhjajwdkbajbfwj'
		});
		Ext.Viewport.add(panel);
		Ext.get('mysqlPanel').addCls('colorRed');
		alert("到底了");
	}
}
);