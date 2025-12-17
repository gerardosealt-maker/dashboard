import { state } from './state.js'
import { applyFilters, calculateMetrics } from './core.js'
import { renderKPIs } from './render.js'
import { renderFunnel } from './charts.js'
import { renderTable } from './table.js'

const csv = document.getElementById('csvInput')
const advisorFilter = document.getElementById('advisorFilter')
const statusFilter = document.getElementById('statusFilter')
const darkBtn = document.getElementById('darkToggle')

darkBtn.onclick = ()=>document.documentElement.classList.toggle('dark')

csv.onchange = e => {
  Papa.parse(e.target.files[0], {
    header:true,
    complete:r=>{
      state.raw=r.data
      populateFilters()
      update()
      document.getElementById('filters').classList.remove('hidden')
      document.getElementById('kpi-section').classList.remove('hidden')
      document.getElementById('chart-section').classList.remove('hidden')
      document.getElementById('table-section').classList.remove('hidden')
    }
  })
}

advisorFilter.onchange = e => { state.filters.advisor=e.target.value; update() }
statusFilter.onchange = e => { state.filters.status=e.target.value; update() }

function populateFilters(){
  [...new Set(state.raw.map(r=>r.asesor).filter(Boolean))]
    .forEach(a=>advisorFilter.innerHTML+=`<option>${a}</option>`)
}

function update(){
  state.filtered = applyFilters(state.raw,state.filters)
  state.metrics = calculateMetrics(state.filtered)
  renderKPIs(state.metrics)
  renderFunnel(state.metrics)
  renderTable(state.filtered)
}
