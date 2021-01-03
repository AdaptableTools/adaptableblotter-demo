import { ColDef, GridOptions, Module } from '@ag-grid-community/all-modules';

export interface IFootballTeam {
  name: string;
  country: string;
  stadium: string;
  capacity: number;
  manager: string;
  yearEstablished: number;
  squad: IFootballPlayer[];
}

export interface IFootballPlayer {
  name: string;
  age: number;
  position: string;
}

export class FootballDataHelper {
  public getMasterFootballSchema(): ColDef[] {
    var schema: any[] = [];
    schema.push({
      headerName: 'Team',
      field: 'name',
      editable: false,
      filter: false,
      cellRenderer: 'agGroupCellRenderer',
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Country',
      field: 'country',
      editable: false,
      filter: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Manager',
      field: 'manager',
      editable: false,
      filter: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Stadium',
      field: 'stadium',
      editable: false,
      filter: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Capacity',
      field: 'capacity',
      editable: false,
      filter: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Year Established',
      field: 'yearEstablished',
      filter: true,
      editable: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    return schema;
  }

  public getDetailGridOptionsFootball(): GridOptions {
    return {
      columnDefs: this.getDetailsFootballSchema(),
    };
  }

  public getDetailsFootballSchema(): ColDef[] {
    var schema: any[] = [];

    schema.push({
      headerName: 'Name',
      field: 'name',
      filter: true,
      editable: true,
      sortable: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Age',
      field: 'age',
      filter: true,
      editable: true,
      sortable: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Position',
      field: 'position',
      filter: true,
      sortable: true,
      editable: true,
      type: 'abColDefString',
    });

    return schema;
  }

  getFootballData(): IFootballTeam[] {
    let footballTeams: IFootballTeam[] = [];

    // Liverpool
    let liverpool: IFootballTeam = {
      name: 'Liverpool',
      country: 'England',
      stadium: 'Anfield',
      capacity: 48000,
      yearEstablished: 1896,
      manager: 'Juergen Klopp',

      squad: [
        {
          age: 26,
          name: 'Alisson Becker',
          position: 'Goalkeeper',
        },
        {
          age: 20,
          name: 'Trent Alexander Arnold',
          position: 'Defender',
        },
        {
          age: 28,
          name: 'Virgil van Dijk',
          position: 'Defender',
        },
        {
          age: 29,
          name: 'Jordan Henderson',
          position: 'Midfielder',
        },
        {
          age: 32,
          name: 'Mo Salah',
          position: 'Striker',
        },
      ],
    };
    footballTeams.push(liverpool);
    // barca
    let barcelona: IFootballTeam = {
      name: 'Barcelona',
      country: 'Spain',
      stadium: 'Nou Camp',
      capacity: 99354,
      yearEstablished: 1875,
      manager: 'Ernesto Valverde',
      squad: [
        {
          age: 27,
          name: 'Marc-André ter Stegen',
          position: 'Goalkeeper',
        },
        {
          age: 32,
          name: 'Gerard Piqué',
          position: 'Defender',
        },
        {
          age: 27,
          name: 'Phillipe Coutinho',
          position: 'Midfielder',
        },
        {
          age: 32,
          name: 'Lionel Messi',
          position: 'Forward',
        },
      ],
    };
    footballTeams.push(barcelona);

    // real madrid
    let realMadrid: IFootballTeam = {
      name: 'Real Madrid',
      country: 'Spain',
      stadium: 'Bernabou',
      capacity: 857673,
      yearEstablished: 1906,
      manager: 'Zinadine Zidane',
      squad: [],
    };
    footballTeams.push(realMadrid);

    return footballTeams;
  }
}
