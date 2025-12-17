export function renderTable(data) {
  const t = document.getElementById('advisorTable')
  t.innerHTML=''
  const map={}
  data.forEach(r=>{
    const a=r.asesor||'Sin asignar'
    if(!map[a]) map[a]={l:0,s:0}
    map[a].l++
    if(r.calificacion?.toLowerCase()==='venta') map[a].s++
  })
  Object.entries(map).forEach(([a,v])=>{
    t.innerHTML+=`<tr><td>${a}</td><td class="text-right">${v.l}</td><td class="text-right">${v.s}</td></tr>`
  })
}
