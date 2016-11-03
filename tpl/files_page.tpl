<!DOCTYPE html>
<html>
<head>
	<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
	<meta charset="utf-8"> 
	<link rel="stylesheet" href="//cdn.qalet.com/font-awesome-4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="//cdn.qalet.com/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="//cdn.qalet.com/css/bootstrap-social.css">
</head>
<script>
</script>
<body>
	<div style="margin:32px">
		<div style="padding:6px; margin-left:10px; font-size:2em; font-weight:600">
			<div style="float:left;"><img src="//cdn.qalet.com/images/logo-primary.png" width="80" height="80"/></div>
			<div style="float:left; padding:24px;">Files / Folders: </div>
			<div style="float:right; padding:24px; font-size:14px;" classs="pull-right">{if $url != '/'}<a href=".."><button type="button" class="btn btn-primary"><i class="fa fa-level-up"></i> Level Up</button></a>{/if}</div>
			<div style="clear:both"></div>
		</div>
		
		
		{foreach $files as $i => $file}
			<div style="padding:6px; color:#577492; background-color: {cycle values='#ddd,#eee'}; margin:3px; margin-left:20px; margin-right:20px; border-radius: 6px;">
				{if $file.name} 
					{if $file.type == 'f'}
						<i class="fa fa-file"></i>&nbsp;&nbsp;<a href="{$url_path}{$file.name}">{$file.name}</a> 
					{else}
						<i class="fa fa-folder"></i>&nbsp;&nbsp;<a href="{$url_path}{$file.name}/">{$file.name}</a> 
					{/if} 
				{/if}
			</div>
		{foreachelse}
			<div style="padding:20px; color:#333; font-size:1.5em; background-color: #eee; margin-left:20px; margin-right:20px; height:240px; border-radius: 10px;  border:1px solid #ccc">
				Empty folder
				<br/><br/>
				{if $url != '/'}<a href=".."><button type="button" class="btn btn-primary"><i class="fa fa-level-up"></i> Level Up</button></a>{/if}
			</div>			
		{/foreach}
		</div>
	</div>
</body>
</html>
<script type="text/javascript" src="//cdn.qalet.com/package/cdn_qalet_com_js"></script>