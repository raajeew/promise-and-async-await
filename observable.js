import { Observable } from 'rxjs/Rx';


Observable.from(["whiskey", "tango", "foxtrot"]).subscribe({
    next(value) {
      console.log(value);
    }
  });