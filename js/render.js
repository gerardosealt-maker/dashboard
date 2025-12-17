export function renderKPIs(m) {
  document.getElementById('kpi-leads').textContent = m.leads
  document.getElementById('kpi-sales').textContent = m.sales
  document.getElementById('kpi-conversion').textContent = m.conversion + '%'
  document.getElementById('kpi-quality').textContent = m.quality + '%'
}
