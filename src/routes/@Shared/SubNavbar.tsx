import {BaseComponent, BaseProps} from "../../Frame/UI/ReactGlobals";
import {Link} from "react-router-dom";
import {colors} from "../../Frame/UI/GlobalStyles";
import {E} from "../../Frame/General/Globals_Free";

export default class SubNavbar extends BaseComponent<{fullWidth?: boolean}, {}> {
	render() {
		let {fullWidth, children} = this.props;
		return (
			<div className="clickThrough" style={{
				position: "absolute", zIndex: 1, top: 0, width: "100%", textAlign: "center",
				//background: "#000 url('/Images/Tiling/TopMenu.png') repeat-x scroll",
				//background: "rgba(0,0,0,.5)", boxShadow: "3px 3px 7px rgba(0,0,0,.07)",
			}}>
				<div style={E(
					{display: "inline-block", background: "rgba(0,0,0,.7)", boxShadow: colors.navBarBoxShadow},
					fullWidth ? {width: "100%"} : {borderRadius: "0 0 10px 10px"},
				)}>
					{children}
				</div>
			</div>
		);
	}
}

export class SubNavBarButton extends BaseComponent<{to, text} & BaseProps, {}> {
	render() {
		var {to, text, page} = this.props;
		let active = to == page;
		return (
			<Link to={to} style={{
				display: "inline-block", cursor: "pointer", verticalAlign: "middle",
				lineHeight: "30px", color: "#FFF", padding: "0 15px", fontSize: 12, textDecoration: "none", opacity: .9
			}}>
				{text}
			</Link>
		);
	}
}