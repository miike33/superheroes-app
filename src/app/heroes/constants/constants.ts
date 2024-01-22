export const enum URL {
  heroesListUrl = './list',
  addHeroUrl = './add-hero',
  editHeroUrl = '/heroes/edit',
  showHeroUrl = '/heroes/id',
  assetsUrl = 'assets/superheroes/',
}

export const DialogLiterals = {
  accept: 'Aceptar',
  cancel: 'Cancelar',
  sure: '¿Estás seguro?',
  deleteHero: 'Estás a punto de eliminar el héroe: ',
  yes: 'Sí',
  no: 'No',
};

const HeroLiterals = {
  alias: 'Alias',
  team: 'Equipo',
  city: 'Ciudad',
};

export const AddHeroLiterals = {
  ...HeroLiterals,
  name: 'Nombre',
  image: 'Imagen',
  delete: 'Borrar',
  update: 'Actualizar',
  add: 'Añadir',
  defaultImg:
    'https://cdn.vectorstock.com/i/preview-1x/13/04/male-profile-picture-vector-2041304.jpg',
};

export const HeroInfoLiterals = {
  ...HeroLiterals,
  info: 'Información',
  back: 'Volver',
};

export const LayoutLiterals = {
  appName: 'Superhéroes App',
  add: 'Añadir',
};

export const HeroesListLiterals = {
  heroes: 'Superhéroes',
  search: 'Buscar...',
};
