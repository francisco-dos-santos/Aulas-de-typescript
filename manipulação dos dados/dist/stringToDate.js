export default function stringToDate(texto) {
    const [date, time] = texto.split(" ");
    const [dia, mes, ano] = date.split('/').map(Number);
    const [hour, min] = time.split(':').map(Number);
    return new Date(ano, mes - 1, dia, hour, min);
}
//# sourceMappingURL=stringToDate.js.map