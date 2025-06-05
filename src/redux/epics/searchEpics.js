import { ofType } from 'redux-observable';
import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { fetchAutocomplete } from '../../api/googlePlacesApi';
import { setSuggestions } from '../slices/searchSlice';
import { message } from 'antd';

const AUTOCOMPLETE_REQUEST = 'AUTOCOMPLETE_REQUEST';
export const autocompleteRequest = (query) => ({
  type: AUTOCOMPLETE_REQUEST,
  payload: query,
});

export const searchEpic = (action$) =>
  action$.pipe(
    ofType(AUTOCOMPLETE_REQUEST),
    debounceTime(300),
    switchMap((action) =>
      from(fetchAutocomplete(action.payload)).pipe(
        map((results) => setSuggestions(results)),
        catchError((err) => {
          message.error('Failed to fetch suggestions');
          return of(setSuggestions([]));
        })
      )
    )
  );
