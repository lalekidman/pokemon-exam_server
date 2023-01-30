"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueEntity = void 0;
const makeLeagueEntity = ({ generateId }) => {
    class LeagueEntity {
        constructor(data) {
            this._title = '';
            this._location = '';
            this._terrain = '';
            this._pokemonMaxStats = 0;
            this._requiredSlotSize = 0;
            this._owner = '';
            this._author = '';
            this.date = new Date();
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
            const { id = generateId(), title = this._title, location = this._location, terrain = this._terrain, pokemonMaxStats = this._pokemonMaxStats, requiredSlotSize = this._requiredSlotSize, owner = this._owner, author = this._author, createdAt = this.createdAt, updatedAt = this.updatedAt, } = data;
            this.id = id;
            this.title = title;
            this.location = location;
            this.terrain = terrain;
            this.pokemonMaxStats = pokemonMaxStats;
            this.requiredSlotSize = requiredSlotSize;
            this.owner = owner;
            this.author = author;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
        /**
         * Getter title
         * @return {string }
         */
        get title() {
            return this._title;
        }
        /**
         * Setter title
         * @param {string } value
         */
        set title(value) {
            this._title = value;
        }
        /**
         * Getter location
         * @return {string }
         */
        get location() {
            return this._location;
        }
        /**
         * Setter location
         * @param {string } value
         */
        set location(value) {
            this._location = value;
        }
        /**
         * Getter terrain
         * @return {string }
         */
        get terrain() {
            return this._terrain;
        }
        /**
         * Setter terrain
         * @param {string } value
         */
        set terrain(value) {
            this._terrain = value;
        }
        /**
         * Getter pokemonMaxStats
         * @return {number }
         */
        get pokemonMaxStats() {
            return this._pokemonMaxStats;
        }
        /**
         * Setter pokemonMaxStats
         * @param {number } value
         */
        set pokemonMaxStats(value) {
            this._pokemonMaxStats = value;
        }
        /**
         * Getter requiredSlotSize
         * @return {number }
         */
        get requiredSlotSize() {
            return this._requiredSlotSize;
        }
        /**
         * Setter requiredSlotSize
         * @param {number } value
         */
        set requiredSlotSize(value) {
            this._requiredSlotSize = value;
        }
        /**
         * Getter ownerId
         * @return {string }
         */
        get owner() {
            return this._owner;
        }
        /**
         * Setter ownerId
         * @param {string } value
         */
        set owner(value) {
            this._owner = value;
        }
        /**
         * Getter authorId
         * @return {string }
         */
        get author() {
            return this._author;
        }
        /**
         * Setter authorId
         * @param {string } value
         */
        set author(value) {
            this._author = value;
        }
        /**
         *
         * @returns
         */
        toObject() {
            return {
                id: this.id,
                title: this._title,
                location: this._location,
                terrain: this._terrain,
                pokemonMaxStats: this._pokemonMaxStats,
                requiredSlotSize: this._requiredSlotSize,
                owner: this._owner,
                author: this._author,
                date: this.date,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            };
        }
    }
    return LeagueEntity;
};
exports.makeLeagueEntity = makeLeagueEntity;
//# sourceMappingURL=entity.js.map