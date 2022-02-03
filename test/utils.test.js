import { renderEnemy } from '../utils.js';

const test = QUnit.test;

test('should return div with enemy li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="enemy-1"><ul><li>Sephiroth</li><li><img src="./assets/enemy-icon.png" class="icon"></li><li>hp:10000</li></ul></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderEnemy(renderEnemy);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
