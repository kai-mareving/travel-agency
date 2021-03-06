/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  //* filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  //* DONE - filter by duration
  if (filters.duration) {
    const durationFrom = filters.duration.from;
    const durationTo = filters.duration.to;

    output = output.filter(trip => trip.days >= durationFrom && trip.days <= durationTo);
    //// console.log('filter by duration:', output);
  }

  //* filter by tags
  if(filters.tags) {
    for (let tag of filters.tags) {
      const pattern = new RegExp(tag, 'i');
      output = output.filter(trip => pattern.test(trip.tags));
    }
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('Filter by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('Filter by country:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
