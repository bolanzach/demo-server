import { myFunction } from './package';
import SomeClass from './someClass';

(function () {
  const message = myFunction() ?? '';
  const obj = {
    name: 'zach',
  };

  const obj2 = { ...obj, message };
  const me = new SomeClass(obj2.name);

  console.log(obj2);
  console.log(me.sayHello());
})();
