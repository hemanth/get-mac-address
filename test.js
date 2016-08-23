import test from 'ava';
import fn from './';

test('should have the lo0', t => {
	t.is(fn['lo0'], '00:00:00:00:00:00');
});
