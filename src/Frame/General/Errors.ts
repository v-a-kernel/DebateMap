import {Log} from "../Serialization/VDF/VDF";
/*g.onerror = function(message, filePath, line, column, error) {
	LogError(`JS) ${message} (at ${filePath}:${line}:${column})
Stack) ${error.stack}`);
};*/
export function HandleError(error, isFatal = false) {
	Log(`${error}
Stack) ${error.stack}
Fatal) ${isFatal}`);
}