export default function AvailableTurns(duration: number, data: any) {
  const config = data.config[0];
  const turnos = data.turnos;
  const intervalsAvailables: number[] = [];
  const intervalosEnUso: number[] = [];
  const turnosDisponibles: number[] = [];
  if (config.desde_1 !== '00:00:00' && config.hasta_1 !== '00:00:00') {
    pushAvailableHours(config.desde_!, config.hasta_1, intervalsAvailables);
  }
  if (config.desde !== '00:00:00' && config.hasta !== '00:00:00') {
    pushAvailableHours(config.desde, config.hasta, intervalsAvailables);
  }
  turnos.forEach((turno: any) => {
    const turnoDesde = Number(turno?.hora?.replaceAll(':', ''));
    const turnoDuracion = turno.duracion_minutos * 100;
    let interval = turnoDesde;
    while (interval < turnoDesde + turnoDuracion) {
      if (interval % 10000 === 5000) interval += 5000;
      else interval += 1000;
      intervalosEnUso.push(interval);
    }
  });
  for (let i = 0; i < intervalsAvailables.length; i += (duration / 10)) {
    let intervaloDisponible = true;
    for(let j = 1; j <= (duration / 10); j++){
      if(intervalosEnUso.includes(intervalsAvailables[i + j])){
        intervaloDisponible = false
        break;
      }
    }
    if(intervaloDisponible)turnosDisponibles.push(intervalsAvailables[i])
  }
  return turnosDisponibles
}

function pushAvailableHours(desde: string, hasta: string, intervalsAvailables:number[]) {
  const inNumberDesde = Number(desde?.replaceAll(':', ''));
  const inNumberHasta = Number(hasta?.replaceAll(':', ''));
  let actualInterval = inNumberDesde;
  while (actualInterval < inNumberHasta) {
    //aumenta 10 minutos
    intervalsAvailables.push(actualInterval);
    if (actualInterval % 10000 === 5000) actualInterval += 5000;
    else actualInterval += 1000;
  }
}
