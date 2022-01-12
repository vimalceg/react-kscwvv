export default function wrapPromise(fn) {
  let promise = null;
  let status = 'pending';
  let result;
  return () => {
    if (!promise) {
      debugger;
      promise = fn();
    }

    let suspender = promise.then(
      (r) => {
        status = 'success';
        result = r;
      },
      (e) => {
        status = 'error';
        result = e;
      }
    );

    if (status === 'pending') {
      throw suspender;
    } else if (status === 'error') {
      throw result;
    } else if (status === 'success') {
      return result;
    }
  };
}
