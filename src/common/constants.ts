export const MYSQL_USERNAME = process.env.MYSQL_USERNAME || 'root'
export const MYSQL_PASSWORD = process.env.MYSQL_ROOT_PASSWORD || 'admin'
export const MYSQL_DATABASE_NAME = process.env.MYSQL_DATABASE_NAME || 'pokemon_exam'
export const MYSQL_DATABASE_HOST = process.env.MYSQL_DATABASE_HOST || 'localhost'
export const MYSQL_DATABASE_PORT = process.env.MYSQL_DATABASE_PORT || '5506'

export const TABLE_NAMES = {
  TRAINER: 'trainer',
  POKEMON: 'pokemon',
  POKEMON_STATS: 'pokemon_stats',
  LEAGUE: 'league',
  LEAGUE_SLOT: 'league_slots',
  LEAGUE_PARTICIPANT: 'league_participants',
}