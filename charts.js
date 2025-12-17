let chart
export function renderFunnel(m) {
  const ctx = document.getElementById('funnelChart')
  if (chart) chart.destroy()
  chart = new Chart(ctx, {
    type:'bar',
    data:{labels:['Leads','Ventas'],datasets:[{data:[m.leads,m.sales]}]},
    options:{plugins:{legend:{display:false}}}
  })
}
