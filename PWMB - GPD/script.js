google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: "AIzaSyCmgtGtfGPB_GWr5KceD7bF2VIsjDIvRbY",
});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  fetch("http://localhost:3000/dados_pragas")
    .then((response) => response.json())
    .then((data) => {
      const chartData = data.map((item) => [
        item.pais,
        item.numero_ocorrencias,
        `<div style="padding:10px">
          <p>Tipo de Praga: ${item.tipo_praga}</p>
          <p>Área Afetada: ${item.area_afetada}</p>
          <p>Número de Ocorrências: ${item.numero_ocorrencias}</p>
          <p>Impacto na Produção: ${item.impacto_producao}</p>
          <p>Medidas de Controle: ${item.medidas_controle}</p>
          <p>Custo de Controle: ${item.custo_controle}</p>
          <p>Ano: ${item.ano}</p>
        </div>`,
      ]);
      chartData.unshift([
        "País",
        "Número de Ocorrências",
        { role: "tooltip", type: "string", p: { html: true } },
      ]);

      const dataTable = google.visualization.arrayToDataTable(chartData);

      const options = {
        title: "Dados das Pragas",
        legend: "none",
        backgroundColor: "none",
        tooltip: { isHtml: true },
        colorAxis: { colors: ["#e31b23", "#e31b23"] },
      };

      const chart = new google.visualization.GeoChart(
        document.getElementById("regions_div2")
      );
      chart.draw(dataTable, options);
    })
    .catch((error) => {
      console.error("Erro ao buscar dados das pragas:", error);
    });

  fetch("http://localhost:3000/zonas_ajudadas")
    .then((response) => response.json())
    .then((data) => {
      const chartData = data.map((item) => [
        item.pais,
        parseInt(item.zona),
        `<div style="padding:10px">
          <p>Zona: ${item.zona}</p>
          <p>Tipo de Ajuda: ${item.tipo_ajuda}</p>
          <p>Ano: ${item.ano}</p>
        </div>`,
      ]);
      chartData.unshift([
        "País",
        "Zonas Ajudadas",
        { role: "tooltip", type: "string", p: { html: true } },
      ]);

      const dataTable = google.visualization.arrayToDataTable(chartData);

      const options = {
        title: "Zonas Ajudadas",
        legend: "none",
        colorAxis: { colors: ["#00853f", "black", "#00853f"] },
        backgroundColor: "none",
        tooltip: { isHtml: true },
      };

      const chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );
      chart.draw(dataTable, options);
    });
}
