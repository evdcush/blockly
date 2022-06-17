/**
 * @fileoverview Base class representing the space a connection takes up during
 * rendering.
 */

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * Base class representing the space a connection takes up during
 * rendering.
 * @class
 */

/* eslint-disable-next-line no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import {RenderedConnection} from '../../rendered_connection.js';
import {ConstantProvider, Shape} from '../common/constants.js';

import {Measurable} from './base.js';
import {Types} from './types.js';

/**
 * The base class to represent a connection and the space that it takes up on
 * the block.
 * @alias Blockly.blockRendering.Connection
 */
export class Connection extends Measurable {
  shape: Shape;
  isDynamicShape: boolean;

  /**
   * @param constants The rendering constants provider.
   * @param connectionModel The connection object on the block that this
   *     represents.
   */
  constructor(
      constants: ConstantProvider, public connectionModel: RenderedConnection) {
    super(constants);

    this.shape = this.constants.shapeFor(connectionModel);

    this.isDynamicShape = 'isDynamic' in this.shape && this.shape.isDynamic;
    this.type |= Types.CONNECTION;
  }
}
