import { isObject, isUndefined, isArray, isNumber, isString } from '../utils/lodash';

/**
 *
 * @param gutter
 * @param currentSize
 * @returns
 */
export function calcRowStyle(gutter, currentSize) {
  const rowStyle = {};
  const getMarginStyle = (gutter) =>
    Object.assign(rowStyle, {
      marginLeft: `${gutter / -2}px`,
      marginRight: `${gutter / -2}px`,
    });

  const getRowGapStyle = (gutter) =>
    Object.assign(rowStyle, {
      rowGap: `${gutter}px`,
    });

  const strategyMap = {
    isNumber: (gutter) => {
      if (isNumber(gutter)) {
        getMarginStyle(gutter);
      }
    },
    isArray: (gutter) => {
      if (isArray(gutter) && gutter.length) {
        strategyMap.isNumber(gutter[0]);

        if (isNumber(gutter[1])) {
          getRowGapStyle(gutter[1]);
        }

        if (isObject(gutter[0]) && !isUndefined(gutter[0][currentSize])) {
          getMarginStyle(gutter[0][currentSize]);
        }

        if (isObject(gutter[1]) && !isUndefined(gutter[1][currentSize])) {
          getRowGapStyle(gutter[1][currentSize]);
        }
      }
    },
    isObject: (gutter) => {
      if (isObject(gutter) && gutter[currentSize]) {
        if (isArray(gutter) && gutter.length) {
          getMarginStyle(gutter[currentSize][0]);
          getRowGapStyle(gutter[currentSize][1]);
        } else {
          getMarginStyle(gutter[currentSize]);
        }
      }
    },
  };

  Object.keys(strategyMap).forEach((item) => {
    strategyMap[item](gutter);
  });

  return rowStyle;
}

/**
 * 解析Flex
 * @param flex
 * @returns
 */
export function parseFlex(flex) {
  if (isNumber(flex)) {
    return `${flex} ${flex} 0`;
  }
  if (isString(flex) && !Number.isNaN(flex * 1)) {
    return `${flex * 1} ${flex * 1} 0`;
  }
  // 判断是否是flex
  if (/^\d+(\.\d+)?(px|r?em|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}

/**
 * 计算ColPadding
 * @param gutter
 * @param currentSize
 * @returns
 */
export function calcColPadding(gutter, currentSize) {
  const paddingObj = {};
  const getPaddingStyle = (gutter) =>
    Object.assign(paddingObj, {
      paddingLeft: `${gutter / 2}px`,
      paddingRight: `${gutter / 2}px`,
    });

  const strategyMap = {
    isNumber: (gutter) => {
      if (isNumber(gutter)) {
        getPaddingStyle(gutter);
      }
    },
    isArray: (gutter) => {
      if (isArray(gutter) && gutter.length) {
        if (isNumber(gutter[0])) {
          getPaddingStyle(gutter[0]);
        }
        if (isObject(gutter[0]) && gutter[0][currentSize]) {
          getPaddingStyle(gutter[0][currentSize]);
        }
      }
    },
    isObject: (gutter) => {
      if (isObject(gutter) && gutter[currentSize]) {
        getPaddingStyle(gutter[currentSize]);
      }
    },
  };

  Object.keys(strategyMap).forEach((item) => {
    strategyMap[item](gutter);
  });

  return paddingObj;
}
