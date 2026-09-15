import{readFileSync,writeFileSync}from'node:fs';
const read=name=>readFileSync(new URL(name,import.meta.url),'utf8');
const engine=read('engine.mjs').replace(/^export /gm,'');
const app=read('app.mjs').replace(/^import.*from'\.\/engine\.mjs';\r?\n/,'');
writeFileSync(new URL('index.html',import.meta.url),read('index.template.html').replace('/*STYLE*/',()=>read('style.css')).replace('/*SCRIPT*/',()=>engine+'\n'+app));
console.log('Built public index.html');
