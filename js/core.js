export function applyFilters(data, filters) {
  return data.filter(r => {
    if (filters.advisor !== 'all' && r.asesor !== filters.advisor) return false
    if (filters.status !== 'all' && r.calificacion?.toLowerCase() !== filters.status) return false
    return true
  })
}

export function calculateMetrics(data) {
  const leads = data.length
  const sales = data.filter(r => r.calificacion?.toLowerCase() === 'venta').length
  const conversion = leads ? ((sales / leads) * 100).toFixed(1) : 0
  return { leads, sales, conversion, quality: conversion }
}
