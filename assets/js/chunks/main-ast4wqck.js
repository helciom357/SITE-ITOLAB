var pc="187dev";var mc=0,Za=1,gc=2;var ks=1,_c=2,ps=3,ms=0,Wn=1,p=2,B=0,Hs=1,_=2,Ja=3,$a=4,xc=5;var gs=100,vc=101,yc=102,Sc=103,Mc=104,bc=200,Ec=201,Ac=202,Tc=203,wc=204,Rc=205,Cc=206,Ic=207,Pc=208,Lc=209,Nc=210,Dc=211,Uc=212,Fc=213,Oc=214,Bc=0,zc=1,Gc=2,Ka=3,kc=4,Hc=5,Wc=6,Vc=7,Xc=0,qc=1,Yc=2,hi=0,lt=1,ct=2,ht=3,ut=4,ft=5,dt=6,J=7;var Ws=301,_s=302,Or=303,Br=304,Zc=1000,zr=1001,Jc=1002,Ii=1003,$c=1004;var Vs=1005;var Kn=1006,Gr=1007;var Pi=1008;var ri=1009,Kc=1010,Qc=1011,Xs=1012,Qa=1013,Li=1014,Si=1015,x=1016,ja=1017,to=1018,xs=1020,jc=35902,th=35899,eh=1021,nh=1022,Mi=1023,vs=1026,Wi=1027,ih=1028,eo=1029,Vi=1030,no=1031;var io=1033,kr=33776,Hr=33777,Wr=33778,Vr=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37488,fo=37489,Xr=37490,po=37491,mo=37808,go=37809,_o=37810,xo=37811,vo=37812,yo=37813,So=37814,Mo=37815,bo=37816,Eo=37817,Ao=37818,To=37819,wo=37820,Ro=37821,Co=36492,Io=36494,Po=36495,Lo=36283,No=36284,qr=36285,Do=36286;var Uo=0,sh=1,Xi="",z="srgb",Fo="srgb-linear",Oo="linear",a="srgb";var rh=512,ah=513,oh=514,Bo=515,lh=516,ch=517,zo=518,Go=519;var ko="300 es",Ho=2000;function vu(W){for(let q=W.length-1;q>=0;--q)if(W[q]>=65535)return!0;return!1}function yu(W){return ArrayBuffer.isView(W)&&!(W instanceof DataView)}function Os(W){return document.createElementNS("http://www.w3.org/1999/xhtml",W)}function hh(){let W=Os("canvas");return W.style.display="block",W}var Ll={},ds=null;function Wo(...W){let q="THREE."+W.shift();if(ds)ds("log",q,...W);else console.log(q,...W)}function uh(W){let q=W[0];if(typeof q==="string"&&q.startsWith("TSL:")){let Y=W[1];if(Y&&Y.isStackTrace)W[0]+=" "+Y.getLocation();else W[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return W}function Ke(...W){W=uh(W);let q="THREE."+W.shift();if(ds)ds("warn",q,...W);else{let Y=W[0];if(Y&&Y.isStackTrace)console.warn(Y.getError(q));else console.warn(q,...W)}}function Qe(...W){W=uh(W);let q="THREE."+W.shift();if(ds)ds("error",q,...W);else{let Y=W[0];if(Y&&Y.isStackTrace)console.error(Y.getError(q));else console.error(q,...W)}}function Ds(...W){let q=W.join(" ");if(q in Ll)return;Ll[q]=!0,Ke(...W)}function dh(W,q,Y){return new Promise(function(Z,tt){function at(){switch(W.clientWaitSync(q,W.SYNC_FLUSH_COMMANDS_BIT,0)){case W.WAIT_FAILED:tt();break;case W.TIMEOUT_EXPIRED:setTimeout(at,Y);break;default:Z()}}setTimeout(at,Y)})}var fh={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class bi{addEventListener(W,q){if(this._listeners===void 0)this._listeners={};let Y=this._listeners;if(Y[W]===void 0)Y[W]=[];if(Y[W].indexOf(q)===-1)Y[W].push(q)}hasEventListener(W,q){let Y=this._listeners;if(Y===void 0)return!1;return Y[W]!==void 0&&Y[W].indexOf(q)!==-1}removeEventListener(W,q){let Y=this._listeners;if(Y===void 0)return;let Z=Y[W];if(Z!==void 0){let tt=Z.indexOf(q);if(tt!==-1)Z.splice(tt,1)}}dispatchEvent(W){let q=this._listeners;if(q===void 0)return;let Y=q[W.type];if(Y!==void 0){W.target=this;let Z=Y.slice(0);for(let tt=0,at=Z.length;tt<at;tt++)Z[tt].call(this,W);W.target=null}}}var kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lr=Math.PI/180,Nr=180/Math.PI;function ys(){let W=Math.random()*4294967295|0,q=Math.random()*4294967295|0,Y=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(kn[W&255]+kn[W>>8&255]+kn[W>>16&255]+kn[W>>24&255]+"-"+kn[q&255]+kn[q>>8&255]+"-"+kn[q>>16&15|64]+kn[q>>24&255]+"-"+kn[Y&63|128]+kn[Y>>8&255]+"-"+kn[Y>>16&255]+kn[Y>>24&255]+kn[Z&255]+kn[Z>>8&255]+kn[Z>>16&255]+kn[Z>>24&255]).toLowerCase()}function cn(W,q,Y){return Math.max(q,Math.min(Y,W))}function Su(W,q){return(W%q+q)%q}function _a(W,q,Y){return(1-Y)*W+Y*q}function ph(W){return Math.pow(2,Math.floor(Math.log(W)/Math.LN2))}function As(W,q){switch(q.constructor){case Float32Array:return W;case Uint32Array:return W/4294967295;case Uint16Array:return W/65535;case Uint8Array:case Uint8ClampedArray:return W/255;case Int32Array:return Math.max(W/2147483647,-1);case Int16Array:return Math.max(W/32767,-1);case Int8Array:return Math.max(W/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function qn(W,q){switch(q.constructor){case Float32Array:return W;case Uint32Array:return Math.round(W*4294967295);case Uint16Array:return Math.round(W*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(W*255);case Int32Array:return Math.round(W*2147483647);case Int16Array:return Math.round(W*32767);case Int8Array:return Math.round(W*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class e{static{this.prototype.isVector2=!0}constructor(W=0,q=0){this.x=W,this.y=q}get width(){return this.x}set width(W){this.x=W}get height(){return this.y}set height(W){this.y=W}set(W,q){return this.x=W,this.y=q,this}setScalar(W){return this.x=W,this.y=W,this}setX(W){return this.x=W,this}setY(W){return this.y=W,this}setComponent(W,q){switch(W){case 0:this.x=q;break;case 1:this.y=q;break;default:throw Error("THREE.Vector2: index is out of range: "+W)}return this}getComponent(W){switch(W){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+W)}}clone(){return new this.constructor(this.x,this.y)}copy(W){return this.x=W.x,this.y=W.y,this}add(W){return this.x+=W.x,this.y+=W.y,this}addScalar(W){return this.x+=W,this.y+=W,this}addVectors(W,q){return this.x=W.x+q.x,this.y=W.y+q.y,this}addScaledVector(W,q){return this.x+=W.x*q,this.y+=W.y*q,this}sub(W){return this.x-=W.x,this.y-=W.y,this}subScalar(W){return this.x-=W,this.y-=W,this}subVectors(W,q){return this.x=W.x-q.x,this.y=W.y-q.y,this}multiply(W){return this.x*=W.x,this.y*=W.y,this}multiplyScalar(W){return this.x*=W,this.y*=W,this}divide(W){return this.x/=W.x,this.y/=W.y,this}divideScalar(W){return this.multiplyScalar(1/W)}applyMatrix3(W){let q=this.x,Y=this.y,Z=W.elements;return this.x=Z[0]*q+Z[3]*Y+Z[6],this.y=Z[1]*q+Z[4]*Y+Z[7],this}min(W){return this.x=Math.min(this.x,W.x),this.y=Math.min(this.y,W.y),this}max(W){return this.x=Math.max(this.x,W.x),this.y=Math.max(this.y,W.y),this}clamp(W,q){return this.x=cn(this.x,W.x,q.x),this.y=cn(this.y,W.y,q.y),this}clampScalar(W,q){return this.x=cn(this.x,W,q),this.y=cn(this.y,W,q),this}clampLength(W,q){let Y=this.length();return this.divideScalar(Y||1).multiplyScalar(cn(Y,W,q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(W){return this.x*W.x+this.y*W.y}cross(W){return this.x*W.y-this.y*W.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(W){let q=Math.sqrt(this.lengthSq()*W.lengthSq());if(q===0)return Math.PI/2;let Y=this.dot(W)/q;return Math.acos(cn(Y,-1,1))}distanceTo(W){return Math.sqrt(this.distanceToSquared(W))}distanceToSquared(W){let q=this.x-W.x,Y=this.y-W.y;return q*q+Y*Y}manhattanDistanceTo(W){return Math.abs(this.x-W.x)+Math.abs(this.y-W.y)}setLength(W){return this.normalize().multiplyScalar(W)}lerp(W,q){return this.x+=(W.x-this.x)*q,this.y+=(W.y-this.y)*q,this}lerpVectors(W,q,Y){return this.x=W.x+(q.x-W.x)*Y,this.y=W.y+(q.y-W.y)*Y,this}equals(W){return W.x===this.x&&W.y===this.y}fromArray(W,q=0){return this.x=W[q],this.y=W[q+1],this}toArray(W=[],q=0){return W[q]=this.x,W[q+1]=this.y,W}fromBufferAttribute(W,q){return this.x=W.getX(q),this.y=W.getY(q),this}rotateAround(W,q){let Y=Math.cos(q),Z=Math.sin(q),tt=this.x-W.x,at=this.y-W.y;return this.x=tt*Y-at*Z+W.x,this.y=tt*Z+at*Y+W.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(W=0,q=0,Y=0,Z=1){this.isQuaternion=!0,this._x=W,this._y=q,this._z=Y,this._w=Z}static slerpFlat(W,q,Y,Z,tt,at,Mt){let bt=Y[Z+0],Et=Y[Z+1],At=Y[Z+2],Ct=Y[Z+3],It=tt[at+0],Rt=tt[at+1],Lt=tt[at+2],Dt=tt[at+3];if(Ct!==Dt||bt!==It||Et!==Rt||At!==Lt){let Bt=bt*It+Et*Rt+At*Lt+Ct*Dt;if(Bt<0)It=-It,Rt=-Rt,Lt=-Lt,Dt=-Dt,Bt=-Bt;let Pt=1-Mt;if(Bt<0.9995){let wt=Math.acos(Bt),Gt=Math.sin(wt);Pt=Math.sin(Pt*wt)/Gt,Mt=Math.sin(Mt*wt)/Gt,bt=bt*Pt+It*Mt,Et=Et*Pt+Rt*Mt,At=At*Pt+Lt*Mt,Ct=Ct*Pt+Dt*Mt}else{bt=bt*Pt+It*Mt,Et=Et*Pt+Rt*Mt,At=At*Pt+Lt*Mt,Ct=Ct*Pt+Dt*Mt;let wt=1/Math.sqrt(bt*bt+Et*Et+At*At+Ct*Ct);bt*=wt,Et*=wt,At*=wt,Ct*=wt}}W[q]=bt,W[q+1]=Et,W[q+2]=At,W[q+3]=Ct}static multiplyQuaternionsFlat(W,q,Y,Z,tt,at){let Mt=Y[Z],bt=Y[Z+1],Et=Y[Z+2],At=Y[Z+3],Ct=tt[at],It=tt[at+1],Rt=tt[at+2],Lt=tt[at+3];return W[q]=Mt*Lt+At*Ct+bt*Rt-Et*It,W[q+1]=bt*Lt+At*It+Et*Ct-Mt*Rt,W[q+2]=Et*Lt+At*Rt+Mt*It-bt*Ct,W[q+3]=At*Lt-Mt*Ct-bt*It-Et*Rt,W}get x(){return this._x}set x(W){this._x=W,this._onChangeCallback()}get y(){return this._y}set y(W){this._y=W,this._onChangeCallback()}get z(){return this._z}set z(W){this._z=W,this._onChangeCallback()}get w(){return this._w}set w(W){this._w=W,this._onChangeCallback()}set(W,q,Y,Z){return this._x=W,this._y=q,this._z=Y,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(W){return this._x=W.x,this._y=W.y,this._z=W.z,this._w=W.w,this._onChangeCallback(),this}setFromEuler(W,q=!0){let{_x:Y,_y:Z,_z:tt,_order:at}=W,{cos:Mt,sin:bt}=Math,Et=Mt(Y/2),At=Mt(Z/2),Ct=Mt(tt/2),It=bt(Y/2),Rt=bt(Z/2),Lt=bt(tt/2);switch(at){case"XYZ":this._x=It*At*Ct+Et*Rt*Lt,this._y=Et*Rt*Ct-It*At*Lt,this._z=Et*At*Lt+It*Rt*Ct,this._w=Et*At*Ct-It*Rt*Lt;break;case"YXZ":this._x=It*At*Ct+Et*Rt*Lt,this._y=Et*Rt*Ct-It*At*Lt,this._z=Et*At*Lt-It*Rt*Ct,this._w=Et*At*Ct+It*Rt*Lt;break;case"ZXY":this._x=It*At*Ct-Et*Rt*Lt,this._y=Et*Rt*Ct+It*At*Lt,this._z=Et*At*Lt+It*Rt*Ct,this._w=Et*At*Ct-It*Rt*Lt;break;case"ZYX":this._x=It*At*Ct-Et*Rt*Lt,this._y=Et*Rt*Ct+It*At*Lt,this._z=Et*At*Lt-It*Rt*Ct,this._w=Et*At*Ct+It*Rt*Lt;break;case"YZX":this._x=It*At*Ct+Et*Rt*Lt,this._y=Et*Rt*Ct+It*At*Lt,this._z=Et*At*Lt-It*Rt*Ct,this._w=Et*At*Ct-It*Rt*Lt;break;case"XZY":this._x=It*At*Ct-Et*Rt*Lt,this._y=Et*Rt*Ct-It*At*Lt,this._z=Et*At*Lt+It*Rt*Ct,this._w=Et*At*Ct+It*Rt*Lt;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+at)}if(q===!0)this._onChangeCallback();return this}setFromAxisAngle(W,q){let Y=q/2,Z=Math.sin(Y);return this._x=W.x*Z,this._y=W.y*Z,this._z=W.z*Z,this._w=Math.cos(Y),this._onChangeCallback(),this}setFromRotationMatrix(W){let q=W.elements,Y=q[0],Z=q[4],tt=q[8],at=q[1],Mt=q[5],bt=q[9],Et=q[2],At=q[6],Ct=q[10],It=Y+Mt+Ct;if(It>0){let Rt=0.5/Math.sqrt(It+1);this._w=0.25/Rt,this._x=(At-bt)*Rt,this._y=(tt-Et)*Rt,this._z=(at-Z)*Rt}else if(Y>Mt&&Y>Ct){let Rt=2*Math.sqrt(1+Y-Mt-Ct);this._w=(At-bt)/Rt,this._x=0.25*Rt,this._y=(Z+at)/Rt,this._z=(tt+Et)/Rt}else if(Mt>Ct){let Rt=2*Math.sqrt(1+Mt-Y-Ct);this._w=(tt-Et)/Rt,this._x=(Z+at)/Rt,this._y=0.25*Rt,this._z=(bt+At)/Rt}else{let Rt=2*Math.sqrt(1+Ct-Y-Mt);this._w=(at-Z)/Rt,this._x=(tt+Et)/Rt,this._y=(bt+At)/Rt,this._z=0.25*Rt}return this._onChangeCallback(),this}setFromUnitVectors(W,q){let Y=W.dot(q)+1;if(Y<0.00000001)if(Y=0,Math.abs(W.x)>Math.abs(W.z))this._x=-W.y,this._y=W.x,this._z=0,this._w=Y;else this._x=0,this._y=-W.z,this._z=W.y,this._w=Y;else this._x=W.y*q.z-W.z*q.y,this._y=W.z*q.x-W.x*q.z,this._z=W.x*q.y-W.y*q.x,this._w=Y;return this.normalize()}angleTo(W){return 2*Math.acos(Math.abs(cn(this.dot(W),-1,1)))}rotateTowards(W,q){let Y=this.angleTo(W);if(Y===0)return this;let Z=Math.min(1,q/Y);return this.slerp(W,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(W){return this._x*W._x+this._y*W._y+this._z*W._z+this._w*W._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let W=this.length();if(W===0)this._x=0,this._y=0,this._z=0,this._w=1;else W=1/W,this._x=this._x*W,this._y=this._y*W,this._z=this._z*W,this._w=this._w*W;return this._onChangeCallback(),this}multiply(W){return this.multiplyQuaternions(this,W)}premultiply(W){return this.multiplyQuaternions(W,this)}multiplyQuaternions(W,q){let{_x:Y,_y:Z,_z:tt,_w:at}=W,{_x:Mt,_y:bt,_z:Et,_w:At}=q;return this._x=Y*At+at*Mt+Z*Et-tt*bt,this._y=Z*At+at*bt+tt*Mt-Y*Et,this._z=tt*At+at*Et+Y*bt-Z*Mt,this._w=at*At-Y*Mt-Z*bt-tt*Et,this._onChangeCallback(),this}slerp(W,q){let{_x:Y,_y:Z,_z:tt,_w:at}=W,Mt=this.dot(W);if(Mt<0)Y=-Y,Z=-Z,tt=-tt,at=-at,Mt=-Mt;let bt=1-q;if(Mt<0.9995){let Et=Math.acos(Mt),At=Math.sin(Et);bt=Math.sin(bt*Et)/At,q=Math.sin(q*Et)/At,this._x=this._x*bt+Y*q,this._y=this._y*bt+Z*q,this._z=this._z*bt+tt*q,this._w=this._w*bt+at*q,this._onChangeCallback()}else this._x=this._x*bt+Y*q,this._y=this._y*bt+Z*q,this._z=this._z*bt+tt*q,this._w=this._w*bt+at*q,this.normalize();return this}slerpQuaternions(W,q,Y){return this.copy(W).slerp(q,Y)}random(){let W=2*Math.PI*Math.random(),q=2*Math.PI*Math.random(),Y=Math.random(),Z=Math.sqrt(1-Y),tt=Math.sqrt(Y);return this.set(Z*Math.sin(W),Z*Math.cos(W),tt*Math.sin(q),tt*Math.cos(q))}equals(W){return W._x===this._x&&W._y===this._y&&W._z===this._z&&W._w===this._w}fromArray(W,q=0){return this._x=W[q],this._y=W[q+1],this._z=W[q+2],this._w=W[q+3],this._onChangeCallback(),this}toArray(W=[],q=0){return W[q]=this._x,W[q+1]=this._y,W[q+2]=this._z,W[q+3]=this._w,W}fromBufferAttribute(W,q){return this._x=W.getX(q),this._y=W.getY(q),this._z=W.getZ(q),this._w=W.getW(q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(W){return this._onChangeCallback=W,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class t{static{this.prototype.isVector3=!0}constructor(W=0,q=0,Y=0){this.x=W,this.y=q,this.z=Y}set(W,q,Y){if(Y===void 0)Y=this.z;return this.x=W,this.y=q,this.z=Y,this}setScalar(W){return this.x=W,this.y=W,this.z=W,this}setX(W){return this.x=W,this}setY(W){return this.y=W,this}setZ(W){return this.z=W,this}setComponent(W,q){switch(W){case 0:this.x=q;break;case 1:this.y=q;break;case 2:this.z=q;break;default:throw Error("THREE.Vector3: index is out of range: "+W)}return this}getComponent(W){switch(W){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+W)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(W){return this.x=W.x,this.y=W.y,this.z=W.z,this}add(W){return this.x+=W.x,this.y+=W.y,this.z+=W.z,this}addScalar(W){return this.x+=W,this.y+=W,this.z+=W,this}addVectors(W,q){return this.x=W.x+q.x,this.y=W.y+q.y,this.z=W.z+q.z,this}addScaledVector(W,q){return this.x+=W.x*q,this.y+=W.y*q,this.z+=W.z*q,this}sub(W){return this.x-=W.x,this.y-=W.y,this.z-=W.z,this}subScalar(W){return this.x-=W,this.y-=W,this.z-=W,this}subVectors(W,q){return this.x=W.x-q.x,this.y=W.y-q.y,this.z=W.z-q.z,this}multiply(W){return this.x*=W.x,this.y*=W.y,this.z*=W.z,this}multiplyScalar(W){return this.x*=W,this.y*=W,this.z*=W,this}multiplyVectors(W,q){return this.x=W.x*q.x,this.y=W.y*q.y,this.z=W.z*q.z,this}applyEuler(W){return this.applyQuaternion(Nl.setFromEuler(W))}applyAxisAngle(W,q){return this.applyQuaternion(Nl.setFromAxisAngle(W,q))}applyMatrix3(W){let q=this.x,Y=this.y,Z=this.z,tt=W.elements;return this.x=tt[0]*q+tt[3]*Y+tt[6]*Z,this.y=tt[1]*q+tt[4]*Y+tt[7]*Z,this.z=tt[2]*q+tt[5]*Y+tt[8]*Z,this}applyNormalMatrix(W){return this.applyMatrix3(W).normalize()}applyMatrix4(W){let q=this.x,Y=this.y,Z=this.z,tt=W.elements,at=1/(tt[3]*q+tt[7]*Y+tt[11]*Z+tt[15]);return this.x=(tt[0]*q+tt[4]*Y+tt[8]*Z+tt[12])*at,this.y=(tt[1]*q+tt[5]*Y+tt[9]*Z+tt[13])*at,this.z=(tt[2]*q+tt[6]*Y+tt[10]*Z+tt[14])*at,this}applyQuaternion(W){let q=this.x,Y=this.y,Z=this.z,{x:tt,y:at,z:Mt,w:bt}=W,Et=2*(at*Z-Mt*Y),At=2*(Mt*q-tt*Z),Ct=2*(tt*Y-at*q);return this.x=q+bt*Et+at*Ct-Mt*At,this.y=Y+bt*At+Mt*Et-tt*Ct,this.z=Z+bt*Ct+tt*At-at*Et,this}project(W){return this.applyMatrix4(W.matrixWorldInverse).applyMatrix4(W.projectionMatrix)}unproject(W){return this.applyMatrix4(W.projectionMatrixInverse).applyMatrix4(W.matrixWorld)}transformDirection(W){let q=this.x,Y=this.y,Z=this.z,tt=W.elements;return this.x=tt[0]*q+tt[4]*Y+tt[8]*Z,this.y=tt[1]*q+tt[5]*Y+tt[9]*Z,this.z=tt[2]*q+tt[6]*Y+tt[10]*Z,this.normalize()}divide(W){return this.x/=W.x,this.y/=W.y,this.z/=W.z,this}divideScalar(W){return this.multiplyScalar(1/W)}min(W){return this.x=Math.min(this.x,W.x),this.y=Math.min(this.y,W.y),this.z=Math.min(this.z,W.z),this}max(W){return this.x=Math.max(this.x,W.x),this.y=Math.max(this.y,W.y),this.z=Math.max(this.z,W.z),this}clamp(W,q){return this.x=cn(this.x,W.x,q.x),this.y=cn(this.y,W.y,q.y),this.z=cn(this.z,W.z,q.z),this}clampScalar(W,q){return this.x=cn(this.x,W,q),this.y=cn(this.y,W,q),this.z=cn(this.z,W,q),this}clampLength(W,q){let Y=this.length();return this.divideScalar(Y||1).multiplyScalar(cn(Y,W,q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(W){return this.x*W.x+this.y*W.y+this.z*W.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(W){return this.normalize().multiplyScalar(W)}lerp(W,q){return this.x+=(W.x-this.x)*q,this.y+=(W.y-this.y)*q,this.z+=(W.z-this.z)*q,this}lerpVectors(W,q,Y){return this.x=W.x+(q.x-W.x)*Y,this.y=W.y+(q.y-W.y)*Y,this.z=W.z+(q.z-W.z)*Y,this}cross(W){return this.crossVectors(this,W)}crossVectors(W,q){let{x:Y,y:Z,z:tt}=W,{x:at,y:Mt,z:bt}=q;return this.x=Z*bt-tt*Mt,this.y=tt*at-Y*bt,this.z=Y*Mt-Z*at,this}projectOnVector(W){let q=W.lengthSq();if(q===0)return this.set(0,0,0);let Y=W.dot(this)/q;return this.copy(W).multiplyScalar(Y)}projectOnPlane(W){return xa.copy(this).projectOnVector(W),this.sub(xa)}reflect(W){return this.sub(xa.copy(W).multiplyScalar(2*this.dot(W)))}angleTo(W){let q=Math.sqrt(this.lengthSq()*W.lengthSq());if(q===0)return Math.PI/2;let Y=this.dot(W)/q;return Math.acos(cn(Y,-1,1))}distanceTo(W){return Math.sqrt(this.distanceToSquared(W))}distanceToSquared(W){let q=this.x-W.x,Y=this.y-W.y,Z=this.z-W.z;return q*q+Y*Y+Z*Z}manhattanDistanceTo(W){return Math.abs(this.x-W.x)+Math.abs(this.y-W.y)+Math.abs(this.z-W.z)}setFromSpherical(W){return this.setFromSphericalCoords(W.radius,W.phi,W.theta)}setFromSphericalCoords(W,q,Y){let Z=Math.sin(q)*W;return this.x=Z*Math.sin(Y),this.y=Math.cos(q)*W,this.z=Z*Math.cos(Y),this}setFromCylindrical(W){return this.setFromCylindricalCoords(W.radius,W.theta,W.y)}setFromCylindricalCoords(W,q,Y){return this.x=W*Math.sin(q),this.y=Y,this.z=W*Math.cos(q),this}setFromMatrixPosition(W){let q=W.elements;return this.x=q[12],this.y=q[13],this.z=q[14],this}setFromMatrixScale(W){let q=this.setFromMatrixColumn(W,0).length(),Y=this.setFromMatrixColumn(W,1).length(),Z=this.setFromMatrixColumn(W,2).length();return this.x=q,this.y=Y,this.z=Z,this}setFromMatrixColumn(W,q){return this.fromArray(W.elements,q*4)}setFromMatrix3Column(W,q){return this.fromArray(W.elements,q*3)}setFromEuler(W){return this.x=W._x,this.y=W._y,this.z=W._z,this}setFromColor(W){return this.x=W.r,this.y=W.g,this.z=W.b,this}equals(W){return W.x===this.x&&W.y===this.y&&W.z===this.z}fromArray(W,q=0){return this.x=W[q],this.y=W[q+1],this.z=W[q+2],this}toArray(W=[],q=0){return W[q]=this.x,W[q+1]=this.y,W[q+2]=this.z,W}fromBufferAttribute(W,q){return this.x=W.getX(q),this.y=W.getY(q),this.z=W.getZ(q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let W=Math.random()*Math.PI*2,q=Math.random()*2-1,Y=Math.sqrt(1-q*q);return this.x=Y*Math.cos(W),this.y=q,this.z=Y*Math.sin(W),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var xa=new t,Nl=new Ei;class tn{static{this.prototype.isMatrix3=!0}constructor(W,q,Y,Z,tt,at,Mt,bt,Et){if(this.elements=[1,0,0,0,1,0,0,0,1],W!==void 0)this.set(W,q,Y,Z,tt,at,Mt,bt,Et)}set(W,q,Y,Z,tt,at,Mt,bt,Et){let At=this.elements;return At[0]=W,At[1]=Z,At[2]=Mt,At[3]=q,At[4]=tt,At[5]=bt,At[6]=Y,At[7]=at,At[8]=Et,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(W){let q=this.elements,Y=W.elements;return q[0]=Y[0],q[1]=Y[1],q[2]=Y[2],q[3]=Y[3],q[4]=Y[4],q[5]=Y[5],q[6]=Y[6],q[7]=Y[7],q[8]=Y[8],this}extractBasis(W,q,Y){return W.setFromMatrix3Column(this,0),q.setFromMatrix3Column(this,1),Y.setFromMatrix3Column(this,2),this}setFromMatrix4(W){let q=W.elements;return this.set(q[0],q[4],q[8],q[1],q[5],q[9],q[2],q[6],q[10]),this}multiply(W){return this.multiplyMatrices(this,W)}premultiply(W){return this.multiplyMatrices(W,this)}multiplyMatrices(W,q){let Y=W.elements,Z=q.elements,tt=this.elements,at=Y[0],Mt=Y[3],bt=Y[6],Et=Y[1],At=Y[4],Ct=Y[7],It=Y[2],Rt=Y[5],Lt=Y[8],Dt=Z[0],Bt=Z[3],Pt=Z[6],wt=Z[1],Gt=Z[4],Wt=Z[7],zt=Z[2],Ht=Z[5],qt=Z[8];return tt[0]=at*Dt+Mt*wt+bt*zt,tt[3]=at*Bt+Mt*Gt+bt*Ht,tt[6]=at*Pt+Mt*Wt+bt*qt,tt[1]=Et*Dt+At*wt+Ct*zt,tt[4]=Et*Bt+At*Gt+Ct*Ht,tt[7]=Et*Pt+At*Wt+Ct*qt,tt[2]=It*Dt+Rt*wt+Lt*zt,tt[5]=It*Bt+Rt*Gt+Lt*Ht,tt[8]=It*Pt+Rt*Wt+Lt*qt,this}multiplyScalar(W){let q=this.elements;return q[0]*=W,q[3]*=W,q[6]*=W,q[1]*=W,q[4]*=W,q[7]*=W,q[2]*=W,q[5]*=W,q[8]*=W,this}determinant(){let W=this.elements,q=W[0],Y=W[1],Z=W[2],tt=W[3],at=W[4],Mt=W[5],bt=W[6],Et=W[7],At=W[8];return q*at*At-q*Mt*Et-Y*tt*At+Y*Mt*bt+Z*tt*Et-Z*at*bt}invert(){let W=this.elements,q=W[0],Y=W[1],Z=W[2],tt=W[3],at=W[4],Mt=W[5],bt=W[6],Et=W[7],At=W[8],Ct=At*at-Mt*Et,It=Mt*bt-At*tt,Rt=Et*tt-at*bt,Lt=q*Ct+Y*It+Z*Rt;if(Lt===0)return this.set(0,0,0,0,0,0,0,0,0);let Dt=1/Lt;return W[0]=Ct*Dt,W[1]=(Z*Et-At*Y)*Dt,W[2]=(Mt*Y-Z*at)*Dt,W[3]=It*Dt,W[4]=(At*q-Z*bt)*Dt,W[5]=(Z*tt-Mt*q)*Dt,W[6]=Rt*Dt,W[7]=(Y*bt-Et*q)*Dt,W[8]=(at*q-Y*tt)*Dt,this}transpose(){let W,q=this.elements;return W=q[1],q[1]=q[3],q[3]=W,W=q[2],q[2]=q[6],q[6]=W,W=q[5],q[5]=q[7],q[7]=W,this}getNormalMatrix(W){return this.setFromMatrix4(W).invert().transpose()}transposeIntoArray(W){let q=this.elements;return W[0]=q[0],W[1]=q[3],W[2]=q[6],W[3]=q[1],W[4]=q[4],W[5]=q[7],W[6]=q[2],W[7]=q[5],W[8]=q[8],this}setUvTransform(W,q,Y,Z,tt,at,Mt){let bt=Math.cos(tt),Et=Math.sin(tt);return this.set(Y*bt,Y*Et,-Y*(bt*at+Et*Mt)+at+W,-Z*Et,Z*bt,-Z*(-Et*at+bt*Mt)+Mt+q,0,0,1),this}scale(W,q){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(va.makeScale(W,q)),this}rotate(W){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(va.makeRotation(-W)),this}translate(W,q){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(va.makeTranslation(W,q)),this}makeTranslation(W,q){if(W.isVector2)this.set(1,0,W.x,0,1,W.y,0,0,1);else this.set(1,0,W,0,1,q,0,0,1);return this}makeRotation(W){let q=Math.cos(W),Y=Math.sin(W);return this.set(q,-Y,0,Y,q,0,0,0,1),this}makeScale(W,q){return this.set(W,0,0,0,q,0,0,0,1),this}equals(W){let q=this.elements,Y=W.elements;for(let Z=0;Z<9;Z++)if(q[Z]!==Y[Z])return!1;return!0}fromArray(W,q=0){for(let Y=0;Y<9;Y++)this.elements[Y]=W[Y+q];return this}toArray(W=[],q=0){let Y=this.elements;return W[q]=Y[0],W[q+1]=Y[1],W[q+2]=Y[2],W[q+3]=Y[3],W[q+4]=Y[4],W[q+5]=Y[5],W[q+6]=Y[6],W[q+7]=Y[7],W[q+8]=Y[8],W}clone(){return new this.constructor().fromArray(this.elements)}}var va=new tn,Dl=new tn().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ul=new tn().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Mu(){let W={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(tt,at,Mt){if(this.enabled===!1||at===Mt||!at||!Mt)return tt;if(this.spaces[at].transfer==="srgb")tt.r=yi(tt.r),tt.g=yi(tt.g),tt.b=yi(tt.b);if(this.spaces[at].primaries!==this.spaces[Mt].primaries)tt.applyMatrix3(this.spaces[at].toXYZ),tt.applyMatrix3(this.spaces[Mt].fromXYZ);if(this.spaces[Mt].transfer==="srgb")tt.r=us(tt.r),tt.g=us(tt.g),tt.b=us(tt.b);return tt},workingToColorSpace:function(tt,at){return this.convert(tt,this.workingColorSpace,at)},colorSpaceToWorking:function(tt,at){return this.convert(tt,at,this.workingColorSpace)},getPrimaries:function(tt){return this.spaces[tt].primaries},getTransfer:function(tt){if(tt==="")return"linear";return this.spaces[tt].transfer},getToneMappingMode:function(tt){return this.spaces[tt].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(tt,at=this.workingColorSpace){return tt.fromArray(this.spaces[at].luminanceCoefficients)},define:function(tt){Object.assign(this.spaces,tt)},_getMatrix:function(tt,at,Mt){return tt.copy(this.spaces[at].toXYZ).multiply(this.spaces[Mt].fromXYZ)},_getDrawingBufferColorSpace:function(tt){return this.spaces[tt].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(tt=this.workingColorSpace){return this.spaces[tt].workingColorSpaceConfig.unpackColorSpace}},q=[0.64,0.33,0.3,0.6,0.15,0.06],Y=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return W.define({["srgb-linear"]:{primaries:q,whitePoint:Z,transfer:"linear",toXYZ:Dl,fromXYZ:Ul,luminanceCoefficients:Y,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:q,whitePoint:Z,transfer:"srgb",toXYZ:Dl,fromXYZ:Ul,luminanceCoefficients:Y,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),W}var r=Mu();function yi(W){return W<0.04045?W*0.0773993808:Math.pow(W*0.9478672986+0.0521327014,2.4)}function us(W){return W<0.0031308?W*12.92:1.055*Math.pow(W,0.41666)-0.055}var Ki;class Vo{static getDataURL(W,q="image/png"){if(/^data:/i.test(W.src))return W.src;if(typeof HTMLCanvasElement>"u")return W.src;let Y;if(W instanceof HTMLCanvasElement)Y=W;else{if(Ki===void 0)Ki=Os("canvas");Ki.width=W.width,Ki.height=W.height;let Z=Ki.getContext("2d");if(W instanceof ImageData)Z.putImageData(W,0,0);else Z.drawImage(W,0,0,W.width,W.height);Y=Ki}return Y.toDataURL(q)}static sRGBToLinear(W){if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap){let q=Os("canvas");q.width=W.width,q.height=W.height;let Y=q.getContext("2d");Y.drawImage(W,0,0,W.width,W.height);let Z=Y.getImageData(0,0,W.width,W.height),tt=Z.data;for(let at=0;at<tt.length;at++)tt[at]=yi(tt[at]/255)*255;return Y.putImageData(Z,0,0),q}else if(W.data){let q=W.data.slice(0);for(let Y=0;Y<q.length;Y++)if(q instanceof Uint8Array||q instanceof Uint8ClampedArray)q[Y]=Math.floor(yi(q[Y]/255)*255);else q[Y]=yi(q[Y]);return{data:q,width:W.width,height:W.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),W}}var bu=0;class qs{constructor(W=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=ys(),this.data=W,this.dataReady=!0,this.version=0}getSize(W){let q=this.data;if(typeof HTMLVideoElement<"u"&&q instanceof HTMLVideoElement)W.set(q.videoWidth,q.videoHeight,0);else if(typeof VideoFrame<"u"&&q instanceof VideoFrame)W.set(q.displayWidth,q.displayHeight,0);else if(q!==null)W.set(q.width||0,q.height||0,q.depth||0);else W.set(0,0,0);return W}set needsUpdate(W){if(W===!0)this.version++}toJSON(W){let q=W===void 0||typeof W==="string";if(!q&&W.images[this.uuid]!==void 0)return W.images[this.uuid];let Y={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let tt;if(Array.isArray(Z)){tt=[];for(let at=0,Mt=Z.length;at<Mt;at++)if(Z[at].isDataTexture)tt.push(ya(Z[at].image));else tt.push(ya(Z[at]))}else tt=ya(Z);Y.url=tt}if(!q)W.images[this.uuid]=Y;return Y}}function ya(W){if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap)return Vo.getDataURL(W);else if(W.data)return{data:Array.from(W.data),width:W.width,height:W.height,type:W.data.constructor.name};else return Ke("Texture: Unable to serialize Texture."),{}}var Eu=0,Sa=new t;class Bn extends bi{constructor(W=Bn.DEFAULT_IMAGE,q=Bn.DEFAULT_MAPPING,Y=1001,Z=1001,tt=1006,at=1008,Mt=1023,bt=1009,Et=Bn.DEFAULT_ANISOTROPY,At=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=ys(),this.name="",this.source=new qs(W),this.mipmaps=[],this.mapping=q,this.channel=0,this.wrapS=Y,this.wrapT=Z,this.magFilter=tt,this.minFilter=at,this.anisotropy=Et,this.format=Mt,this.internalFormat=null,this.type=bt,this.offset=new e(0,0),this.repeat=new e(1,1),this.center=new e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tn,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=At,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=W&&W.depth&&W.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(W){this.source.data=W}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(W,q){this.updateRanges.push({start:W,count:q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(W){return this.name=W.name,this.source=W.source,this.mipmaps=W.mipmaps.slice(0),this.mapping=W.mapping,this.channel=W.channel,this.wrapS=W.wrapS,this.wrapT=W.wrapT,this.magFilter=W.magFilter,this.minFilter=W.minFilter,this.anisotropy=W.anisotropy,this.format=W.format,this.internalFormat=W.internalFormat,this.type=W.type,this.normalized=W.normalized,this.offset.copy(W.offset),this.repeat.copy(W.repeat),this.center.copy(W.center),this.rotation=W.rotation,this.matrixAutoUpdate=W.matrixAutoUpdate,this.matrix.copy(W.matrix),this.generateMipmaps=W.generateMipmaps,this.mipmapsAutoUpdate=W.mipmapsAutoUpdate,this.premultiplyAlpha=W.premultiplyAlpha,this.flipY=W.flipY,this.unpackAlignment=W.unpackAlignment,this.colorSpace=W.colorSpace,this.renderTarget=W.renderTarget,this.isRenderTargetTexture=W.isRenderTargetTexture,this.isPMREMTexture=W.isPMREMTexture,this.isArrayTexture=W.isArrayTexture,this.userData=JSON.parse(JSON.stringify(W.userData)),this.needsUpdate=!0,this}setValues(W){for(let q in W){let Y=W[q];if(Y===void 0){Ke(`Texture.setValues(): parameter '${q}' has value of undefined.`);continue}let Z=this[q];if(Z===void 0){Ke(`Texture.setValues(): property '${q}' does not exist.`);continue}if(Z&&Y&&(Z.isVector2&&Y.isVector2))Z.copy(Y);else if(Z&&Y&&(Z.isVector3&&Y.isVector3))Z.copy(Y);else if(Z&&Y&&(Z.isMatrix3&&Y.isMatrix3))Z.copy(Y);else this[q]=Y}}toJSON(W){let q=W===void 0||typeof W==="string";if(!q&&W.textures[this.uuid]!==void 0)return W.textures[this.uuid];let Y={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(W).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Y.userData=this.userData;if(!q)W.textures[this.uuid]=Y;return Y}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(W){if(this.mapping!==300)return W;if(W.applyMatrix3(this.matrix),W.x<0||W.x>1)switch(this.wrapS){case 1000:W.x=W.x-Math.floor(W.x);break;case 1001:W.x=W.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(W.x)%2)===1)W.x=Math.ceil(W.x)-W.x;else W.x=W.x-Math.floor(W.x);break}if(W.y<0||W.y>1)switch(this.wrapT){case 1000:W.y=W.y-Math.floor(W.y);break;case 1001:W.y=W.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(W.y)%2)===1)W.y=Math.ceil(W.y)-W.y;else W.y=W.y-Math.floor(W.y);break}if(this.flipY)W.y=1-W.y;return W}set needsUpdate(W){if(W===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(W){if(W===!0)this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=300;Bn.DEFAULT_ANISOTROPY=1;class Tn{static{this.prototype.isVector4=!0}constructor(W=0,q=0,Y=0,Z=1){this.x=W,this.y=q,this.z=Y,this.w=Z}get width(){return this.z}set width(W){this.z=W}get height(){return this.w}set height(W){this.w=W}set(W,q,Y,Z){return this.x=W,this.y=q,this.z=Y,this.w=Z,this}setScalar(W){return this.x=W,this.y=W,this.z=W,this.w=W,this}setX(W){return this.x=W,this}setY(W){return this.y=W,this}setZ(W){return this.z=W,this}setW(W){return this.w=W,this}setComponent(W,q){switch(W){case 0:this.x=q;break;case 1:this.y=q;break;case 2:this.z=q;break;case 3:this.w=q;break;default:throw Error("THREE.Vector4: index is out of range: "+W)}return this}getComponent(W){switch(W){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+W)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(W){return this.x=W.x,this.y=W.y,this.z=W.z,this.w=W.w!==void 0?W.w:1,this}add(W){return this.x+=W.x,this.y+=W.y,this.z+=W.z,this.w+=W.w,this}addScalar(W){return this.x+=W,this.y+=W,this.z+=W,this.w+=W,this}addVectors(W,q){return this.x=W.x+q.x,this.y=W.y+q.y,this.z=W.z+q.z,this.w=W.w+q.w,this}addScaledVector(W,q){return this.x+=W.x*q,this.y+=W.y*q,this.z+=W.z*q,this.w+=W.w*q,this}sub(W){return this.x-=W.x,this.y-=W.y,this.z-=W.z,this.w-=W.w,this}subScalar(W){return this.x-=W,this.y-=W,this.z-=W,this.w-=W,this}subVectors(W,q){return this.x=W.x-q.x,this.y=W.y-q.y,this.z=W.z-q.z,this.w=W.w-q.w,this}multiply(W){return this.x*=W.x,this.y*=W.y,this.z*=W.z,this.w*=W.w,this}multiplyScalar(W){return this.x*=W,this.y*=W,this.z*=W,this.w*=W,this}applyMatrix4(W){let q=this.x,Y=this.y,Z=this.z,tt=this.w,at=W.elements;return this.x=at[0]*q+at[4]*Y+at[8]*Z+at[12]*tt,this.y=at[1]*q+at[5]*Y+at[9]*Z+at[13]*tt,this.z=at[2]*q+at[6]*Y+at[10]*Z+at[14]*tt,this.w=at[3]*q+at[7]*Y+at[11]*Z+at[15]*tt,this}divide(W){return this.x/=W.x,this.y/=W.y,this.z/=W.z,this.w/=W.w,this}divideScalar(W){return this.multiplyScalar(1/W)}setAxisAngleFromQuaternion(W){this.w=2*Math.acos(W.w);let q=Math.sqrt(1-W.w*W.w);if(q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=W.x/q,this.y=W.y/q,this.z=W.z/q;return this}setAxisAngleFromRotationMatrix(W){let q,Y,Z,tt,at=0.01,Mt=0.1,bt=W.elements,Et=bt[0],At=bt[4],Ct=bt[8],It=bt[1],Rt=bt[5],Lt=bt[9],Dt=bt[2],Bt=bt[6],Pt=bt[10];if(Math.abs(At-It)<0.01&&Math.abs(Ct-Dt)<0.01&&Math.abs(Lt-Bt)<0.01){if(Math.abs(At+It)<0.1&&Math.abs(Ct+Dt)<0.1&&Math.abs(Lt+Bt)<0.1&&Math.abs(Et+Rt+Pt-3)<0.1)return this.set(1,0,0,0),this;q=Math.PI;let Gt=(Et+1)/2,Wt=(Rt+1)/2,zt=(Pt+1)/2,Ht=(At+It)/4,qt=(Ct+Dt)/4,Nt=(Lt+Bt)/4;if(Gt>Wt&&Gt>zt)if(Gt<0.01)Y=0,Z=0.707106781,tt=0.707106781;else Y=Math.sqrt(Gt),Z=Ht/Y,tt=qt/Y;else if(Wt>zt)if(Wt<0.01)Y=0.707106781,Z=0,tt=0.707106781;else Z=Math.sqrt(Wt),Y=Ht/Z,tt=Nt/Z;else if(zt<0.01)Y=0.707106781,Z=0.707106781,tt=0;else tt=Math.sqrt(zt),Y=qt/tt,Z=Nt/tt;return this.set(Y,Z,tt,q),this}let wt=Math.sqrt((Bt-Lt)*(Bt-Lt)+(Ct-Dt)*(Ct-Dt)+(It-At)*(It-At));if(Math.abs(wt)<0.001)wt=1;return this.x=(Bt-Lt)/wt,this.y=(Ct-Dt)/wt,this.z=(It-At)/wt,this.w=Math.acos((Et+Rt+Pt-1)/2),this}setFromMatrixPosition(W){let q=W.elements;return this.x=q[12],this.y=q[13],this.z=q[14],this.w=q[15],this}min(W){return this.x=Math.min(this.x,W.x),this.y=Math.min(this.y,W.y),this.z=Math.min(this.z,W.z),this.w=Math.min(this.w,W.w),this}max(W){return this.x=Math.max(this.x,W.x),this.y=Math.max(this.y,W.y),this.z=Math.max(this.z,W.z),this.w=Math.max(this.w,W.w),this}clamp(W,q){return this.x=cn(this.x,W.x,q.x),this.y=cn(this.y,W.y,q.y),this.z=cn(this.z,W.z,q.z),this.w=cn(this.w,W.w,q.w),this}clampScalar(W,q){return this.x=cn(this.x,W,q),this.y=cn(this.y,W,q),this.z=cn(this.z,W,q),this.w=cn(this.w,W,q),this}clampLength(W,q){let Y=this.length();return this.divideScalar(Y||1).multiplyScalar(cn(Y,W,q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(W){return this.x*W.x+this.y*W.y+this.z*W.z+this.w*W.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(W){return this.normalize().multiplyScalar(W)}lerp(W,q){return this.x+=(W.x-this.x)*q,this.y+=(W.y-this.y)*q,this.z+=(W.z-this.z)*q,this.w+=(W.w-this.w)*q,this}lerpVectors(W,q,Y){return this.x=W.x+(q.x-W.x)*Y,this.y=W.y+(q.y-W.y)*Y,this.z=W.z+(q.z-W.z)*Y,this.w=W.w+(q.w-W.w)*Y,this}equals(W){return W.x===this.x&&W.y===this.y&&W.z===this.z&&W.w===this.w}fromArray(W,q=0){return this.x=W[q],this.y=W[q+1],this.z=W[q+2],this.w=W[q+3],this}toArray(W=[],q=0){return W[q]=this.x,W[q+1]=this.y,W[q+2]=this.z,W[q+3]=this.w,W}fromBufferAttribute(W,q){return this.x=W.getX(q),this.y=W.getY(q),this.z=W.getZ(q),this.w=W.getW(q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xo extends bi{constructor(W=1,q=1,Y={}){super();Y=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Y),this.isRenderTarget=!0,this.width=W,this.height=q,this.depth=Y.depth,this.scissor=new Tn(0,0,W,q),this.scissorTest=!1,this.viewport=new Tn(0,0,W,q),this.textures=[];let Z={width:W,height:q,depth:Y.depth},tt=new Bn(Z),at=Y.count;for(let Mt=0;Mt<at;Mt++)this.textures[Mt]=tt.clone(),this.textures[Mt].isRenderTargetTexture=!0,this.textures[Mt].renderTarget=this;this._setTextureOptions(Y),this.depthBuffer=Y.depthBuffer,this.stencilBuffer=Y.stencilBuffer,this.resolveColorBuffer=Y.resolveColorBuffer,this.resolveDepthBuffer=Y.resolveDepthBuffer,this.resolveStencilBuffer=Y.resolveStencilBuffer,this.storeMultisampledColorBuffer=Y.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Y.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Y.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Y.depthTexture,this.samples=Y.samples,this.multiview=Y.multiview,this.useArrayDepthTexture=Y.useArrayDepthTexture}_setTextureOptions(W={}){let q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(W.mapping!==void 0)q.mapping=W.mapping;if(W.wrapS!==void 0)q.wrapS=W.wrapS;if(W.wrapT!==void 0)q.wrapT=W.wrapT;if(W.wrapR!==void 0)q.wrapR=W.wrapR;if(W.magFilter!==void 0)q.magFilter=W.magFilter;if(W.minFilter!==void 0)q.minFilter=W.minFilter;if(W.format!==void 0)q.format=W.format;if(W.type!==void 0)q.type=W.type;if(W.anisotropy!==void 0)q.anisotropy=W.anisotropy;if(W.colorSpace!==void 0)q.colorSpace=W.colorSpace;if(W.flipY!==void 0)q.flipY=W.flipY;if(W.generateMipmaps!==void 0)q.generateMipmaps=W.generateMipmaps;if(W.mipmapsAutoUpdate!==void 0)q.mipmapsAutoUpdate=W.mipmapsAutoUpdate;if(W.internalFormat!==void 0)q.internalFormat=W.internalFormat;for(let Y=0;Y<this.textures.length;Y++)this.textures[Y].setValues(q)}get texture(){return this.textures[0]}set texture(W){this.textures[0]=W}set depthTexture(W){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(W!==null&&W.renderTarget===null)W.renderTarget=this;this._depthTexture=W}get depthTexture(){return this._depthTexture}setSize(W,q,Y=1){if(this.width!==W||this.height!==q||this.depth!==Y){this.width=W,this.height=q,this.depth=Y;for(let Z=0,tt=this.textures.length;Z<tt;Z++)if(this.textures[Z].image.width=W,this.textures[Z].image.height=q,this.textures[Z].image.depth=Y,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,W,q),this.scissor.set(0,0,W,q)}clone(){return new this.constructor().copy(this)}copy(W){this.width=W.width,this.height=W.height,this.depth=W.depth,this.scissor.copy(W.scissor),this.scissorTest=W.scissorTest,this.viewport.copy(W.viewport),this.textures.length=0;for(let q=0,Y=W.textures.length;q<Y;q++){this.textures[q]=W.textures[q].clone(),this.textures[q].isRenderTargetTexture=!0,this.textures[q].renderTarget=this;let Z=Object.assign({},W.textures[q].image);this.textures[q].source=new qs(Z)}if(this.depthBuffer=W.depthBuffer,this.stencilBuffer=W.stencilBuffer,this.resolveColorBuffer=W.resolveColorBuffer,this.resolveDepthBuffer=W.resolveDepthBuffer,this.resolveStencilBuffer=W.resolveStencilBuffer,this.storeMultisampledColorBuffer=W.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=W.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=W.storeMultisampledStencilBuffer,W.depthTexture!==null)if(W.depthTexture.renderTarget===W){let q=W.depthTexture.clone();q.renderTarget=null,this.depthTexture=q}else this.depthTexture=W.depthTexture;else this.depthTexture=null;return this.samples=W.samples,this.multiview=W.multiview,this.useArrayDepthTexture=W.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class m extends Xo{constructor(W=1,q=1,Y={}){super(W,q,Y);this.isWebGLRenderTarget=!0}}class Yr extends Bn{constructor(W=null,q=1,Y=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:W,width:q,height:Y,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(W){return super.copy(W),this.wrapR=W.wrapR,this}addLayerUpdate(W){this.layerUpdates.add(W)}clearLayerUpdates(){this.layerUpdates.clear()}}class qo extends Bn{constructor(W=null,q=1,Y=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:W,width:q,height:Y,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(W){return super.copy(W),this.wrapR=W.wrapR,this}}class o{static{this.prototype.isMatrix4=!0}constructor(W,q,Y,Z,tt,at,Mt,bt,Et,At,Ct,It,Rt,Lt,Dt,Bt){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],W!==void 0)this.set(W,q,Y,Z,tt,at,Mt,bt,Et,At,Ct,It,Rt,Lt,Dt,Bt)}set(W,q,Y,Z,tt,at,Mt,bt,Et,At,Ct,It,Rt,Lt,Dt,Bt){let Pt=this.elements;return Pt[0]=W,Pt[4]=q,Pt[8]=Y,Pt[12]=Z,Pt[1]=tt,Pt[5]=at,Pt[9]=Mt,Pt[13]=bt,Pt[2]=Et,Pt[6]=At,Pt[10]=Ct,Pt[14]=It,Pt[3]=Rt,Pt[7]=Lt,Pt[11]=Dt,Pt[15]=Bt,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new o().fromArray(this.elements)}copy(W){let q=this.elements,Y=W.elements;return q[0]=Y[0],q[1]=Y[1],q[2]=Y[2],q[3]=Y[3],q[4]=Y[4],q[5]=Y[5],q[6]=Y[6],q[7]=Y[7],q[8]=Y[8],q[9]=Y[9],q[10]=Y[10],q[11]=Y[11],q[12]=Y[12],q[13]=Y[13],q[14]=Y[14],q[15]=Y[15],this}copyPosition(W){let q=this.elements,Y=W.elements;return q[12]=Y[12],q[13]=Y[13],q[14]=Y[14],this}setFromMatrix3(W){let q=W.elements;return this.set(q[0],q[3],q[6],0,q[1],q[4],q[7],0,q[2],q[5],q[8],0,0,0,0,1),this}extractBasis(W,q,Y){if(this.determinantAffine()===0)return W.set(1,0,0),q.set(0,1,0),Y.set(0,0,1),this;return W.setFromMatrixColumn(this,0),q.setFromMatrixColumn(this,1),Y.setFromMatrixColumn(this,2),this}makeBasis(W,q,Y){return this.set(W.x,q.x,Y.x,0,W.y,q.y,Y.y,0,W.z,q.z,Y.z,0,0,0,0,1),this}extractRotation(W){if(W.determinantAffine()===0)return this.identity();let q=this.elements,Y=W.elements,Z=1/Qi.setFromMatrixColumn(W,0).length(),tt=1/Qi.setFromMatrixColumn(W,1).length(),at=1/Qi.setFromMatrixColumn(W,2).length();return q[0]=Y[0]*Z,q[1]=Y[1]*Z,q[2]=Y[2]*Z,q[3]=0,q[4]=Y[4]*tt,q[5]=Y[5]*tt,q[6]=Y[6]*tt,q[7]=0,q[8]=Y[8]*at,q[9]=Y[9]*at,q[10]=Y[10]*at,q[11]=0,q[12]=0,q[13]=0,q[14]=0,q[15]=1,this}makeRotationFromEuler(W){let q=this.elements,{x:Y,y:Z,z:tt}=W,at=Math.cos(Y),Mt=Math.sin(Y),bt=Math.cos(Z),Et=Math.sin(Z),At=Math.cos(tt),Ct=Math.sin(tt);if(W.order==="XYZ"){let It=at*At,Rt=at*Ct,Lt=Mt*At,Dt=Mt*Ct;q[0]=bt*At,q[4]=-bt*Ct,q[8]=Et,q[1]=Rt+Lt*Et,q[5]=It-Dt*Et,q[9]=-Mt*bt,q[2]=Dt-It*Et,q[6]=Lt+Rt*Et,q[10]=at*bt}else if(W.order==="YXZ"){let It=bt*At,Rt=bt*Ct,Lt=Et*At,Dt=Et*Ct;q[0]=It+Dt*Mt,q[4]=Lt*Mt-Rt,q[8]=at*Et,q[1]=at*Ct,q[5]=at*At,q[9]=-Mt,q[2]=Rt*Mt-Lt,q[6]=Dt+It*Mt,q[10]=at*bt}else if(W.order==="ZXY"){let It=bt*At,Rt=bt*Ct,Lt=Et*At,Dt=Et*Ct;q[0]=It-Dt*Mt,q[4]=-at*Ct,q[8]=Lt+Rt*Mt,q[1]=Rt+Lt*Mt,q[5]=at*At,q[9]=Dt-It*Mt,q[2]=-at*Et,q[6]=Mt,q[10]=at*bt}else if(W.order==="ZYX"){let It=at*At,Rt=at*Ct,Lt=Mt*At,Dt=Mt*Ct;q[0]=bt*At,q[4]=Lt*Et-Rt,q[8]=It*Et+Dt,q[1]=bt*Ct,q[5]=Dt*Et+It,q[9]=Rt*Et-Lt,q[2]=-Et,q[6]=Mt*bt,q[10]=at*bt}else if(W.order==="YZX"){let It=at*bt,Rt=at*Et,Lt=Mt*bt,Dt=Mt*Et;q[0]=bt*At,q[4]=Dt-It*Ct,q[8]=Lt*Ct+Rt,q[1]=Ct,q[5]=at*At,q[9]=-Mt*At,q[2]=-Et*At,q[6]=Rt*Ct+Lt,q[10]=It-Dt*Ct}else if(W.order==="XZY"){let It=at*bt,Rt=at*Et,Lt=Mt*bt,Dt=Mt*Et;q[0]=bt*At,q[4]=-Ct,q[8]=Et*At,q[1]=It*Ct+Dt,q[5]=at*At,q[9]=Rt*Ct-Lt,q[2]=Lt*Ct-Rt,q[6]=Mt*At,q[10]=Dt*Ct+It}return q[3]=0,q[7]=0,q[11]=0,q[12]=0,q[13]=0,q[14]=0,q[15]=1,this}makeRotationFromQuaternion(W){return this.compose(Au,W,Tu)}lookAt(W,q,Y){let Z=this.elements;if(Yn.subVectors(W,q),Yn.lengthSq()===0)Yn.z=1;if(Yn.normalize(),Ai.crossVectors(Y,Yn),Ai.lengthSq()===0){if(Math.abs(Y.z)===1)Yn.x+=0.0001;else Yn.z+=0.0001;Yn.normalize(),Ai.crossVectors(Y,Yn)}return Ai.normalize(),ir.crossVectors(Yn,Ai),Z[0]=Ai.x,Z[4]=ir.x,Z[8]=Yn.x,Z[1]=Ai.y,Z[5]=ir.y,Z[9]=Yn.y,Z[2]=Ai.z,Z[6]=ir.z,Z[10]=Yn.z,this}multiply(W){return this.multiplyMatrices(this,W)}premultiply(W){return this.multiplyMatrices(W,this)}multiplyMatrices(W,q){let Y=W.elements,Z=q.elements,tt=this.elements,at=Y[0],Mt=Y[4],bt=Y[8],Et=Y[12],At=Y[1],Ct=Y[5],It=Y[9],Rt=Y[13],Lt=Y[2],Dt=Y[6],Bt=Y[10],Pt=Y[14],wt=Y[3],Gt=Y[7],Wt=Y[11],zt=Y[15],Ht=Z[0],qt=Z[4],Nt=Z[8],Ot=Z[12],Yt=Z[1],ie=Z[5],Zt=Z[9],ee=Z[13],he=Z[2],Xt=Z[6],ae=Z[10],le=Z[14],te=Z[3],Me=Z[7],se=Z[11],de=Z[15];return tt[0]=at*Ht+Mt*Yt+bt*he+Et*te,tt[4]=at*qt+Mt*ie+bt*Xt+Et*Me,tt[8]=at*Nt+Mt*Zt+bt*ae+Et*se,tt[12]=at*Ot+Mt*ee+bt*le+Et*de,tt[1]=At*Ht+Ct*Yt+It*he+Rt*te,tt[5]=At*qt+Ct*ie+It*Xt+Rt*Me,tt[9]=At*Nt+Ct*Zt+It*ae+Rt*se,tt[13]=At*Ot+Ct*ee+It*le+Rt*de,tt[2]=Lt*Ht+Dt*Yt+Bt*he+Pt*te,tt[6]=Lt*qt+Dt*ie+Bt*Xt+Pt*Me,tt[10]=Lt*Nt+Dt*Zt+Bt*ae+Pt*se,tt[14]=Lt*Ot+Dt*ee+Bt*le+Pt*de,tt[3]=wt*Ht+Gt*Yt+Wt*he+zt*te,tt[7]=wt*qt+Gt*ie+Wt*Xt+zt*Me,tt[11]=wt*Nt+Gt*Zt+Wt*ae+zt*se,tt[15]=wt*Ot+Gt*ee+Wt*le+zt*de,this}multiplyScalar(W){let q=this.elements;return q[0]*=W,q[4]*=W,q[8]*=W,q[12]*=W,q[1]*=W,q[5]*=W,q[9]*=W,q[13]*=W,q[2]*=W,q[6]*=W,q[10]*=W,q[14]*=W,q[3]*=W,q[7]*=W,q[11]*=W,q[15]*=W,this}determinant(){let W=this.elements,q=W[0],Y=W[4],Z=W[8],tt=W[12],at=W[1],Mt=W[5],bt=W[9],Et=W[13],At=W[2],Ct=W[6],It=W[10],Rt=W[14],Lt=W[3],Dt=W[7],Bt=W[11],Pt=W[15],wt=bt*Rt-Et*It,Gt=Mt*Rt-Et*Ct,Wt=Mt*It-bt*Ct,zt=at*Rt-Et*At,Ht=at*It-bt*At,qt=at*Ct-Mt*At;return q*(Dt*wt-Bt*Gt+Pt*Wt)-Y*(Lt*wt-Bt*zt+Pt*Ht)+Z*(Lt*Gt-Dt*zt+Pt*qt)-tt*(Lt*Wt-Dt*Ht+Bt*qt)}determinantAffine(){let W=this.elements,q=W[0],Y=W[4],Z=W[8],tt=W[1],at=W[5],Mt=W[9],bt=W[2],Et=W[6],At=W[10];return q*(at*At-Mt*Et)-Y*(tt*At-Mt*bt)+Z*(tt*Et-at*bt)}transpose(){let W=this.elements,q;return q=W[1],W[1]=W[4],W[4]=q,q=W[2],W[2]=W[8],W[8]=q,q=W[6],W[6]=W[9],W[9]=q,q=W[3],W[3]=W[12],W[12]=q,q=W[7],W[7]=W[13],W[13]=q,q=W[11],W[11]=W[14],W[14]=q,this}setPosition(W,q,Y){let Z=this.elements;if(W.isVector3)Z[12]=W.x,Z[13]=W.y,Z[14]=W.z;else Z[12]=W,Z[13]=q,Z[14]=Y;return this}invert(){let W=this.elements,q=W[0],Y=W[1],Z=W[2],tt=W[3],at=W[4],Mt=W[5],bt=W[6],Et=W[7],At=W[8],Ct=W[9],It=W[10],Rt=W[11],Lt=W[12],Dt=W[13],Bt=W[14],Pt=W[15],wt=q*Mt-Y*at,Gt=q*bt-Z*at,Wt=q*Et-tt*at,zt=Y*bt-Z*Mt,Ht=Y*Et-tt*Mt,qt=Z*Et-tt*bt,Nt=At*Dt-Ct*Lt,Ot=At*Bt-It*Lt,Yt=At*Pt-Rt*Lt,ie=Ct*Bt-It*Dt,Zt=Ct*Pt-Rt*Dt,ee=It*Pt-Rt*Bt,he=wt*ee-Gt*Zt+Wt*ie+zt*Yt-Ht*Ot+qt*Nt;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Xt=1/he;return W[0]=(Mt*ee-bt*Zt+Et*ie)*Xt,W[1]=(Z*Zt-Y*ee-tt*ie)*Xt,W[2]=(Dt*qt-Bt*Ht+Pt*zt)*Xt,W[3]=(It*Ht-Ct*qt-Rt*zt)*Xt,W[4]=(bt*Yt-at*ee-Et*Ot)*Xt,W[5]=(q*ee-Z*Yt+tt*Ot)*Xt,W[6]=(Bt*Wt-Lt*qt-Pt*Gt)*Xt,W[7]=(At*qt-It*Wt+Rt*Gt)*Xt,W[8]=(at*Zt-Mt*Yt+Et*Nt)*Xt,W[9]=(Y*Yt-q*Zt-tt*Nt)*Xt,W[10]=(Lt*Ht-Dt*Wt+Pt*wt)*Xt,W[11]=(Ct*Wt-At*Ht-Rt*wt)*Xt,W[12]=(Mt*Ot-at*ie-bt*Nt)*Xt,W[13]=(q*ie-Y*Ot+Z*Nt)*Xt,W[14]=(Dt*Gt-Lt*zt-Bt*wt)*Xt,W[15]=(At*zt-Ct*Gt+It*wt)*Xt,this}scale(W){let q=this.elements,{x:Y,y:Z,z:tt}=W;return q[0]*=Y,q[4]*=Z,q[8]*=tt,q[1]*=Y,q[5]*=Z,q[9]*=tt,q[2]*=Y,q[6]*=Z,q[10]*=tt,q[3]*=Y,q[7]*=Z,q[11]*=tt,this}getMaxScaleOnAxis(){let W=this.elements,q=W[0]*W[0]+W[1]*W[1]+W[2]*W[2],Y=W[4]*W[4]+W[5]*W[5]+W[6]*W[6],Z=W[8]*W[8]+W[9]*W[9]+W[10]*W[10];return Math.sqrt(Math.max(q,Y,Z))}makeTranslation(W,q,Y){if(W.isVector3)this.set(1,0,0,W.x,0,1,0,W.y,0,0,1,W.z,0,0,0,1);else this.set(1,0,0,W,0,1,0,q,0,0,1,Y,0,0,0,1);return this}makeRotationX(W){let q=Math.cos(W),Y=Math.sin(W);return this.set(1,0,0,0,0,q,-Y,0,0,Y,q,0,0,0,0,1),this}makeRotationY(W){let q=Math.cos(W),Y=Math.sin(W);return this.set(q,0,Y,0,0,1,0,0,-Y,0,q,0,0,0,0,1),this}makeRotationZ(W){let q=Math.cos(W),Y=Math.sin(W);return this.set(q,-Y,0,0,Y,q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(W,q){let Y=Math.cos(q),Z=Math.sin(q),tt=1-Y,{x:at,y:Mt,z:bt}=W,Et=tt*at,At=tt*Mt;return this.set(Et*at+Y,Et*Mt-Z*bt,Et*bt+Z*Mt,0,Et*Mt+Z*bt,At*Mt+Y,At*bt-Z*at,0,Et*bt-Z*Mt,At*bt+Z*at,tt*bt*bt+Y,0,0,0,0,1),this}makeScale(W,q,Y){return this.set(W,0,0,0,0,q,0,0,0,0,Y,0,0,0,0,1),this}makeShear(W,q,Y,Z,tt,at){return this.set(1,Y,tt,0,W,1,at,0,q,Z,1,0,0,0,0,1),this}compose(W,q,Y){let Z=this.elements,{_x:tt,_y:at,_z:Mt,_w:bt}=q,Et=tt+tt,At=at+at,Ct=Mt+Mt,It=tt*Et,Rt=tt*At,Lt=tt*Ct,Dt=at*At,Bt=at*Ct,Pt=Mt*Ct,wt=bt*Et,Gt=bt*At,Wt=bt*Ct,{x:zt,y:Ht,z:qt}=Y;return Z[0]=(1-(Dt+Pt))*zt,Z[1]=(Rt+Wt)*zt,Z[2]=(Lt-Gt)*zt,Z[3]=0,Z[4]=(Rt-Wt)*Ht,Z[5]=(1-(It+Pt))*Ht,Z[6]=(Bt+wt)*Ht,Z[7]=0,Z[8]=(Lt+Gt)*qt,Z[9]=(Bt-wt)*qt,Z[10]=(1-(It+Dt))*qt,Z[11]=0,Z[12]=W.x,Z[13]=W.y,Z[14]=W.z,Z[15]=1,this}decompose(W,q,Y){let Z=this.elements;W.x=Z[12],W.y=Z[13],W.z=Z[14];let tt=this.determinantAffine();if(tt===0)return Y.set(1,1,1),q.identity(),this;let at=Qi.set(Z[0],Z[1],Z[2]).length(),Mt=Qi.set(Z[4],Z[5],Z[6]).length(),bt=Qi.set(Z[8],Z[9],Z[10]).length();if(tt<0)at=-at;ni.copy(this);let Et=1/at,At=1/Mt,Ct=1/bt;return ni.elements[0]*=Et,ni.elements[1]*=Et,ni.elements[2]*=Et,ni.elements[4]*=At,ni.elements[5]*=At,ni.elements[6]*=At,ni.elements[8]*=Ct,ni.elements[9]*=Ct,ni.elements[10]*=Ct,q.setFromRotationMatrix(ni),Y.x=at,Y.y=Mt,Y.z=bt,this}makePerspective(W,q,Y,Z,tt,at,Mt=2000,bt=!1){let Et=this.elements,At=2*tt/(q-W),Ct=2*tt/(Y-Z),It=(q+W)/(q-W),Rt=(Y+Z)/(Y-Z),Lt,Dt;if(bt)Lt=tt/(at-tt),Dt=at*tt/(at-tt);else if(Mt===2000)Lt=-(at+tt)/(at-tt),Dt=-2*at*tt/(at-tt);else if(Mt===2001)Lt=-at/(at-tt),Dt=-at*tt/(at-tt);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Mt);return Et[0]=At,Et[4]=0,Et[8]=It,Et[12]=0,Et[1]=0,Et[5]=Ct,Et[9]=Rt,Et[13]=0,Et[2]=0,Et[6]=0,Et[10]=Lt,Et[14]=Dt,Et[3]=0,Et[7]=0,Et[11]=-1,Et[15]=0,this}makeOrthographic(W,q,Y,Z,tt,at,Mt=2000,bt=!1){let Et=this.elements,At=2/(q-W),Ct=2/(Y-Z),It=-(q+W)/(q-W),Rt=-(Y+Z)/(Y-Z),Lt,Dt;if(bt)Lt=1/(at-tt),Dt=at/(at-tt);else if(Mt===2000)Lt=-2/(at-tt),Dt=-(at+tt)/(at-tt);else if(Mt===2001)Lt=-1/(at-tt),Dt=-tt/(at-tt);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Mt);return Et[0]=At,Et[4]=0,Et[8]=0,Et[12]=It,Et[1]=0,Et[5]=Ct,Et[9]=0,Et[13]=Rt,Et[2]=0,Et[6]=0,Et[10]=Lt,Et[14]=Dt,Et[3]=0,Et[7]=0,Et[11]=0,Et[15]=1,this}equals(W){let q=this.elements,Y=W.elements;for(let Z=0;Z<16;Z++)if(q[Z]!==Y[Z])return!1;return!0}fromArray(W,q=0){for(let Y=0;Y<16;Y++)this.elements[Y]=W[Y+q];return this}toArray(W=[],q=0){let Y=this.elements;return W[q]=Y[0],W[q+1]=Y[1],W[q+2]=Y[2],W[q+3]=Y[3],W[q+4]=Y[4],W[q+5]=Y[5],W[q+6]=Y[6],W[q+7]=Y[7],W[q+8]=Y[8],W[q+9]=Y[9],W[q+10]=Y[10],W[q+11]=Y[11],W[q+12]=Y[12],W[q+13]=Y[13],W[q+14]=Y[14],W[q+15]=Y[15],W}}var Qi=new t,ni=new o,Au=new t(0,0,0),Tu=new t(1,1,1),Ai=new t,ir=new t,Yn=new t,Fl=new o,Ol=new Ei;class ci{constructor(W=0,q=0,Y=0,Z=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=W,this._y=q,this._z=Y,this._order=Z}get x(){return this._x}set x(W){this._x=W,this._onChangeCallback()}get y(){return this._y}set y(W){this._y=W,this._onChangeCallback()}get z(){return this._z}set z(W){this._z=W,this._onChangeCallback()}get order(){return this._order}set order(W){this._order=W,this._onChangeCallback()}set(W,q,Y,Z=this._order){return this._x=W,this._y=q,this._z=Y,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(W){return this._x=W._x,this._y=W._y,this._z=W._z,this._order=W._order,this._onChangeCallback(),this}setFromRotationMatrix(W,q=this._order,Y=!0){let Z=W.elements,tt=Z[0],at=Z[4],Mt=Z[8],bt=Z[1],Et=Z[5],At=Z[9],Ct=Z[2],It=Z[6],Rt=Z[10];switch(q){case"XYZ":if(this._y=Math.asin(cn(Mt,-1,1)),Math.abs(Mt)<0.9999999)this._x=Math.atan2(-At,Rt),this._z=Math.atan2(-at,tt);else this._x=Math.atan2(It,Et),this._z=0;break;case"YXZ":if(this._x=Math.asin(-cn(At,-1,1)),Math.abs(At)<0.9999999)this._y=Math.atan2(Mt,Rt),this._z=Math.atan2(bt,Et);else this._y=Math.atan2(-Ct,tt),this._z=0;break;case"ZXY":if(this._x=Math.asin(cn(It,-1,1)),Math.abs(It)<0.9999999)this._y=Math.atan2(-Ct,Rt),this._z=Math.atan2(-at,Et);else this._y=0,this._z=Math.atan2(bt,tt);break;case"ZYX":if(this._y=Math.asin(-cn(Ct,-1,1)),Math.abs(Ct)<0.9999999)this._x=Math.atan2(It,Rt),this._z=Math.atan2(bt,tt);else this._x=0,this._z=Math.atan2(-at,Et);break;case"YZX":if(this._z=Math.asin(cn(bt,-1,1)),Math.abs(bt)<0.9999999)this._x=Math.atan2(-At,Et),this._y=Math.atan2(-Ct,tt);else this._x=0,this._y=Math.atan2(Mt,Rt);break;case"XZY":if(this._z=Math.asin(-cn(at,-1,1)),Math.abs(at)<0.9999999)this._x=Math.atan2(It,Et),this._y=Math.atan2(Mt,tt);else this._x=Math.atan2(-At,Rt),this._y=0;break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+q)}if(this._order=q,Y===!0)this._onChangeCallback();return this}setFromQuaternion(W,q,Y){return Fl.makeRotationFromQuaternion(W),this.setFromRotationMatrix(Fl,q,Y)}setFromVector3(W,q=this._order){return this.set(W.x,W.y,W.z,q)}reorder(W){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,W)}equals(W){return W._x===this._x&&W._y===this._y&&W._z===this._z&&W._order===this._order}fromArray(W){if(this._x=W[0],this._y=W[1],this._z=W[2],W[3]!==void 0)this._order=W[3];return this._onChangeCallback(),this}toArray(W=[],q=0){return W[q]=this._x,W[q+1]=this._y,W[q+2]=this._z,W[q+3]=this._order,W}_onChange(W){return this._onChangeCallback=W,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Zr{constructor(){this.mask=1}set(W){this.mask=(1<<W|0)>>>0}enable(W){this.mask|=1<<W|0}enableAll(){this.mask=-1}toggle(W){this.mask^=1<<W|0}disable(W){this.mask&=~(1<<W|0)}disableAll(){this.mask=0}test(W){return(this.mask&W.mask)!==0}isEnabled(W){return(this.mask&(1<<W|0))!==0}}var wu=0,Bl=new t,ji=new Ei,mi=new o,sr=new t,Ts=new t,Ru=new t,Cu=new Ei,zl=new t(1,0,0),Gl=new t(0,1,0),kl=new t(0,0,1),Hl={type:"added"},Iu={type:"removed"},ts={type:"childadded",child:null},Ma={type:"childremoved",child:null};class h extends bi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=h.DEFAULT_UP.clone();let W=new t,q=new ci,Y=new Ei,Z=new t(1,1,1);function tt(){Y.setFromEuler(q,!1)}function at(){q.setFromQuaternion(Y,void 0,!1)}q._onChange(tt),Y._onChange(at),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:W},rotation:{configurable:!0,enumerable:!0,value:q},quaternion:{configurable:!0,enumerable:!0,value:Y},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new o},normalMatrix:{value:new tn}}),this.matrix=new o,this.matrixWorld=new o,this.matrixAutoUpdate=h.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=h.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(W){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(W),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(W){return this.quaternion.premultiply(W),this}setRotationFromAxisAngle(W,q){this.quaternion.setFromAxisAngle(W,q)}setRotationFromEuler(W){this.quaternion.setFromEuler(W,!0)}setRotationFromMatrix(W){this.quaternion.setFromRotationMatrix(W)}setRotationFromQuaternion(W){this.quaternion.copy(W)}rotateOnAxis(W,q){return ji.setFromAxisAngle(W,q),this.quaternion.multiply(ji),this}rotateOnWorldAxis(W,q){return ji.setFromAxisAngle(W,q),this.quaternion.premultiply(ji),this}rotateX(W){return this.rotateOnAxis(zl,W)}rotateY(W){return this.rotateOnAxis(Gl,W)}rotateZ(W){return this.rotateOnAxis(kl,W)}translateOnAxis(W,q){return Bl.copy(W).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(q)),this}translateX(W){return this.translateOnAxis(zl,W)}translateY(W){return this.translateOnAxis(Gl,W)}translateZ(W){return this.translateOnAxis(kl,W)}localToWorld(W){return this.updateWorldMatrix(!0,!1),W.applyMatrix4(this.matrixWorld)}worldToLocal(W){return this.updateWorldMatrix(!0,!1),W.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(W,q,Y){if(W.isVector3)sr.copy(W);else sr.set(W,q,Y);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)mi.lookAt(Ts,sr,this.up);else mi.lookAt(sr,Ts,this.up);if(this.quaternion.setFromRotationMatrix(mi),Z)mi.extractRotation(Z.matrixWorld),ji.setFromRotationMatrix(mi),this.quaternion.premultiply(ji.invert())}add(W){if(arguments.length>1){for(let q=0;q<arguments.length;q++)this.add(arguments[q]);return this}if(W===this)return Qe("Object3D.add: object can't be added as a child of itself.",W),this;if(W&&W.isObject3D)W.removeFromParent(),W.parent=this,this.children.push(W),W.dispatchEvent(Hl),ts.child=W,this.dispatchEvent(ts),ts.child=null;else Qe("Object3D.add: object not an instance of THREE.Object3D.",W);return this}remove(W){if(arguments.length>1){for(let Y=0;Y<arguments.length;Y++)this.remove(arguments[Y]);return this}let q=this.children.indexOf(W);if(q!==-1)W.parent=null,this.children.splice(q,1),W.dispatchEvent(Iu),Ma.child=W,this.dispatchEvent(Ma),Ma.child=null;return this}removeFromParent(){let W=this.parent;if(W!==null)W.remove(this);return this}clear(){return this.remove(...this.children)}attach(W){if(this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),W.parent!==null)W.parent.updateWorldMatrix(!0,!1),mi.multiply(W.parent.matrixWorld);return W.applyMatrix4(mi),W.removeFromParent(),W.parent=this,this.children.push(W),W.updateWorldMatrix(!1,!0),W.dispatchEvent(Hl),ts.child=W,this.dispatchEvent(ts),ts.child=null,this}getObjectById(W){return this.getObjectByProperty("id",W)}getObjectByName(W){return this.getObjectByProperty("name",W)}getObjectByProperty(W,q){if(this[W]===q)return this;for(let Y=0,Z=this.children.length;Y<Z;Y++){let at=this.children[Y].getObjectByProperty(W,q);if(at!==void 0)return at}return}getObjectsByProperty(W,q,Y=[]){if(this[W]===q)Y.push(this);let Z=this.children;for(let tt=0,at=Z.length;tt<at;tt++)Z[tt].getObjectsByProperty(W,q,Y);return Y}getWorldPosition(W){return this.updateWorldMatrix(!0,!1),W.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(W){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,W,Ru),W}getWorldScale(W){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Cu,W),W}getWorldDirection(W){this.updateWorldMatrix(!0,!1);let q=this.matrixWorld.elements;return W.set(q[8],q[9],q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(W){W(this);let q=this.children;for(let Y=0,Z=q.length;Y<Z;Y++)q[Y].traverse(W)}traverseVisible(W){if(this.visible===!1)return;W(this);let q=this.children;for(let Y=0,Z=q.length;Y<Z;Y++)q[Y].traverseVisible(W)}traverseAncestors(W){let q=this.parent;if(q!==null)W(q),q.traverseAncestors(W)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let W=this.pivot;if(W!==null){let{x:q,y:Y,z:Z}=W,tt=this.matrix.elements;tt[12]+=q-tt[0]*q-tt[4]*Y-tt[8]*Z,tt[13]+=Y-tt[1]*q-tt[5]*Y-tt[9]*Z,tt[14]+=Z-tt[2]*q-tt[6]*Y-tt[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(W){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||W){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,W=!0}let q=this.children;for(let Y=0,Z=q.length;Y<Z;Y++)q[Y].updateMatrixWorld(W)}updateWorldMatrix(W,q,Y=!1){let Z=this.parent;if(W===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Y){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Y=!0}if(q===!0){let tt=this.children;for(let at=0,Mt=tt.length;at<Mt;at++)tt[at].updateWorldMatrix(!1,!0,Y)}}toJSON(W){let q=W===void 0||typeof W==="string",Y={};if(q)W={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Y.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Mt)=>({...Mt,boundingBox:Mt.boundingBox?Mt.boundingBox.toJSON():void 0,boundingSphere:Mt.boundingSphere?Mt.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Mt)=>({...Mt})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(W),Z.indirectTexture=this._indirectTexture.toJSON(W),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(W);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function tt(Mt,bt){if(Mt[bt.uuid]===void 0)Mt[bt.uuid]=bt.toJSON(W);return bt.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(W).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(W).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=tt(W.geometries,this.geometry);let Mt=this.geometry.parameters;if(Mt!==void 0&&Mt.shapes!==void 0){let bt=Mt.shapes;if(Array.isArray(bt))for(let Et=0,At=bt.length;Et<At;Et++){let Ct=bt[Et];tt(W.shapes,Ct)}else tt(W.shapes,bt)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)tt(W.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Mt=[];for(let bt=0,Et=this.material.length;bt<Et;bt++)Mt.push(tt(W.materials,this.material[bt]));Z.material=Mt}else Z.material=tt(W.materials,this.material);if(this.children.length>0){Z.children=[];for(let Mt=0;Mt<this.children.length;Mt++)Z.children.push(this.children[Mt].toJSON(W).object)}if(this.animations.length>0){Z.animations=[];for(let Mt=0;Mt<this.animations.length;Mt++){let bt=this.animations[Mt];Z.animations.push(tt(W.animations,bt))}}if(q){let Mt=at(W.geometries),bt=at(W.materials),Et=at(W.textures),At=at(W.images),Ct=at(W.shapes),It=at(W.skeletons),Rt=at(W.animations),Lt=at(W.nodes);if(Mt.length>0)Y.geometries=Mt;if(bt.length>0)Y.materials=bt;if(Et.length>0)Y.textures=Et;if(At.length>0)Y.images=At;if(Ct.length>0)Y.shapes=Ct;if(It.length>0)Y.skeletons=It;if(Rt.length>0)Y.animations=Rt;if(Lt.length>0)Y.nodes=Lt}return Y.object=Z,Y;function at(Mt){let bt=[];for(let Et in Mt){let At=Mt[Et];delete At.metadata,bt.push(At)}return bt}}clone(W){return new this.constructor().copy(this,W)}copy(W,q=!0){if(this.name=W.name,this.up.copy(W.up),this.position.copy(W.position),this.rotation.order=W.rotation.order,this.quaternion.copy(W.quaternion),this.scale.copy(W.scale),this.pivot=W.pivot!==null?W.pivot.clone():null,this.matrix.copy(W.matrix),this.matrixWorld.copy(W.matrixWorld),this.matrixAutoUpdate=W.matrixAutoUpdate,this.matrixWorldAutoUpdate=W.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=W.matrixWorldNeedsUpdate,this.layers.mask=W.layers.mask,this.visible=W.visible,this.castShadow=W.castShadow,this.receiveShadow=W.receiveShadow,this.frustumCulled=W.frustumCulled,this.renderOrder=W.renderOrder,this.static=W.static,this.animations=W.animations.slice(),this.userData=JSON.parse(JSON.stringify(W.userData)),q===!0)for(let Y=0;Y<W.children.length;Y++){let Z=W.children[Y];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}h.DEFAULT_UP=new t(0,1,0);h.DEFAULT_MATRIX_AUTO_UPDATE=!0;h.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class u extends h{constructor(){super();this.isGroup=!0,this.type="Group"}}var Pu={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new t,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new t;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new t,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new t,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(W){if(this._targetRay!==null)this._targetRay.dispatchEvent(W);if(this._grip!==null)this._grip.dispatchEvent(W);if(this._hand!==null)this._hand.dispatchEvent(W);return this}connect(W){if(W&&W.hand){let q=this._hand;if(q)for(let Y of W.hand.values())this._getHandJoint(q,Y)}return this.dispatchEvent({type:"connected",data:W}),this}disconnect(W){if(this.dispatchEvent({type:"disconnected",data:W}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(W,q,Y){let Z=null,tt=null,at=null,Mt=this._targetRay,bt=this._grip,Et=this._hand;if(W&&q.session.visibilityState!=="visible-blurred"){if(Et&&W.hand){at=!0;for(let Dt of W.hand.values()){let Bt=q.getJointPose(Dt,Y),Pt=this._getHandJoint(Et,Dt);if(Bt!==null)Pt.matrix.fromArray(Bt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.matrixWorldNeedsUpdate=!0,Pt.jointRadius=Bt.radius;Pt.visible=Bt!==null}let At=Et.joints["index-finger-tip"],Ct=Et.joints["thumb-tip"],It=At.position.distanceTo(Ct.position),Rt=0.02,Lt=0.005;if(Et.inputState.pinching&&It>Rt+Lt)Et.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:W.handedness,target:this});else if(!Et.inputState.pinching&&It<=Rt-Lt)Et.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:W.handedness,target:this})}else if(bt!==null&&W.gripSpace){if(tt=q.getPose(W.gripSpace,Y),tt!==null){if(bt.matrix.fromArray(tt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.matrixWorldNeedsUpdate=!0,tt.linearVelocity)bt.hasLinearVelocity=!0,bt.linearVelocity.copy(tt.linearVelocity);else bt.hasLinearVelocity=!1;if(tt.angularVelocity)bt.hasAngularVelocity=!0,bt.angularVelocity.copy(tt.angularVelocity);else bt.hasAngularVelocity=!1;if(bt.eventsEnabled)bt.dispatchEvent({type:"gripUpdated",data:W,target:this})}}if(Mt!==null){if(Z=q.getPose(W.targetRaySpace,Y),Z===null&&tt!==null)Z=tt;if(Z!==null){if(Mt.matrix.fromArray(Z.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Mt.hasLinearVelocity=!0,Mt.linearVelocity.copy(Z.linearVelocity);else Mt.hasLinearVelocity=!1;if(Z.angularVelocity)Mt.hasAngularVelocity=!0,Mt.angularVelocity.copy(Z.angularVelocity);else Mt.hasAngularVelocity=!1;this.dispatchEvent(Pu)}}}if(Mt!==null)Mt.visible=Z!==null;if(bt!==null)bt.visible=tt!==null;if(Et!==null)Et.visible=at!==null;return this}_getHandJoint(W,q){if(W.joints[q.jointName]===void 0){let Y=new u;Y.matrixAutoUpdate=!1,Y.visible=!1,W.joints[q.jointName]=Y,W.add(Y)}return W.joints[q.jointName]}}var mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ba(W,q,Y){if(Y<0)Y+=1;if(Y>1)Y-=1;if(Y<0.16666666666666666)return W+(q-W)*6*Y;if(Y<0.5)return q;if(Y<0.6666666666666666)return W+(q-W)*6*(0.6666666666666666-Y);return W}class n{constructor(W,q,Y){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(W,q,Y)}set(W,q,Y){if(q===void 0&&Y===void 0){let Z=W;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(W,q,Y);return this}setScalar(W){return this.r=W,this.g=W,this.b=W,this}setHex(W,q="srgb"){return W=Math.floor(W),this.r=(W>>16&255)/255,this.g=(W>>8&255)/255,this.b=(W&255)/255,r.colorSpaceToWorking(this,q),this}setRGB(W,q,Y,Z=r.workingColorSpace){return this.r=W,this.g=q,this.b=Y,r.colorSpaceToWorking(this,Z),this}setHSL(W,q,Y,Z=r.workingColorSpace){if(W=Su(W,1),q=cn(q,0,1),Y=cn(Y,0,1),q===0)this.r=this.g=this.b=Y;else{let tt=Y<=0.5?Y*(1+q):Y+q-Y*q,at=2*Y-tt;this.r=ba(at,tt,W+0.3333333333333333),this.g=ba(at,tt,W),this.b=ba(at,tt,W-0.3333333333333333)}return r.colorSpaceToWorking(this,Z),this}setStyle(W,q="srgb"){function Y(tt){if(tt===void 0)return;if(parseFloat(tt)<1)Ke("Color: Alpha component of "+W+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(W)){let tt,at=Z[1],Mt=Z[2];switch(at){case"rgb":case"rgba":if(tt=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Mt))return Y(tt[4]),this.setRGB(Math.min(255,parseInt(tt[1],10))/255,Math.min(255,parseInt(tt[2],10))/255,Math.min(255,parseInt(tt[3],10))/255,q);if(tt=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Mt))return Y(tt[4]),this.setRGB(Math.min(100,parseInt(tt[1],10))/100,Math.min(100,parseInt(tt[2],10))/100,Math.min(100,parseInt(tt[3],10))/100,q);break;case"hsl":case"hsla":if(tt=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Mt))return Y(tt[4]),this.setHSL(parseFloat(tt[1])/360,parseFloat(tt[2])/100,parseFloat(tt[3])/100,q);break;default:Ke("Color: Unknown color model "+W)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(W)){let tt=Z[1],at=tt.length;if(at===3)return this.setRGB(parseInt(tt.charAt(0),16)/15,parseInt(tt.charAt(1),16)/15,parseInt(tt.charAt(2),16)/15,q);else if(at===6)return this.setHex(parseInt(tt,16),q);else Ke("Color: Invalid hex color "+W)}else if(W&&W.length>0)return this.setColorName(W,q);return this}setColorName(W,q="srgb"){let Y=mh[W.toLowerCase()];if(Y!==void 0)this.setHex(Y,q);else Ke("Color: Unknown color "+W);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(W){return this.r=W.r,this.g=W.g,this.b=W.b,this}copySRGBToLinear(W){return this.r=yi(W.r),this.g=yi(W.g),this.b=yi(W.b),this}copyLinearToSRGB(W){return this.r=us(W.r),this.g=us(W.g),this.b=us(W.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(W="srgb"){return r.workingToColorSpace(Hn.copy(this),W),Math.round(cn(Hn.r*255,0,255))*65536+Math.round(cn(Hn.g*255,0,255))*256+Math.round(cn(Hn.b*255,0,255))}getHexString(W="srgb"){return("000000"+this.getHex(W).toString(16)).slice(-6)}getHSL(W,q=r.workingColorSpace){r.workingToColorSpace(Hn.copy(this),q);let{r:Y,g:Z,b:tt}=Hn,at=Math.max(Y,Z,tt),Mt=Math.min(Y,Z,tt),bt,Et,At=(Mt+at)/2;if(Mt===at)bt=0,Et=0;else{let Ct=at-Mt;switch(Et=At<=0.5?Ct/(at+Mt):Ct/(2-at-Mt),at){case Y:bt=(Z-tt)/Ct+(Z<tt?6:0);break;case Z:bt=(tt-Y)/Ct+2;break;case tt:bt=(Y-Z)/Ct+4;break}bt/=6}return W.h=bt,W.s=Et,W.l=At,W}getRGB(W,q=r.workingColorSpace){return r.workingToColorSpace(Hn.copy(this),q),W.r=Hn.r,W.g=Hn.g,W.b=Hn.b,W}getStyle(W="srgb"){r.workingToColorSpace(Hn.copy(this),W);let{r:q,g:Y,b:Z}=Hn;if(W!=="srgb")return`color(${W} ${q.toFixed(3)} ${Y.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(q*255)},${Math.round(Y*255)},${Math.round(Z*255)})`}offsetHSL(W,q,Y){return this.getHSL(Ti),this.setHSL(Ti.h+W,Ti.s+q,Ti.l+Y)}add(W){return this.r+=W.r,this.g+=W.g,this.b+=W.b,this}addColors(W,q){return this.r=W.r+q.r,this.g=W.g+q.g,this.b=W.b+q.b,this}addScalar(W){return this.r+=W,this.g+=W,this.b+=W,this}sub(W){return this.r=Math.max(0,this.r-W.r),this.g=Math.max(0,this.g-W.g),this.b=Math.max(0,this.b-W.b),this}multiply(W){return this.r*=W.r,this.g*=W.g,this.b*=W.b,this}multiplyScalar(W){return this.r*=W,this.g*=W,this.b*=W,this}lerp(W,q){return this.r+=(W.r-this.r)*q,this.g+=(W.g-this.g)*q,this.b+=(W.b-this.b)*q,this}lerpColors(W,q,Y){return this.r=W.r+(q.r-W.r)*Y,this.g=W.g+(q.g-W.g)*Y,this.b=W.b+(q.b-W.b)*Y,this}lerpHSL(W,q){this.getHSL(Ti),W.getHSL(rr);let Y=_a(Ti.h,rr.h,q),Z=_a(Ti.s,rr.s,q),tt=_a(Ti.l,rr.l,q);return this.setHSL(Y,Z,tt),this}setFromVector3(W){return this.r=W.x,this.g=W.y,this.b=W.z,this}applyMatrix3(W){let q=this.r,Y=this.g,Z=this.b,tt=W.elements;return this.r=tt[0]*q+tt[3]*Y+tt[6]*Z,this.g=tt[1]*q+tt[4]*Y+tt[7]*Z,this.b=tt[2]*q+tt[5]*Y+tt[8]*Z,this}equals(W){return W.r===this.r&&W.g===this.g&&W.b===this.b}fromArray(W,q=0){return this.r=W[q],this.g=W[q+1],this.b=W[q+2],this}toArray(W=[],q=0){return W[q]=this.r,W[q+1]=this.g,W[q+2]=this.b,W}fromBufferAttribute(W,q){return this.r=W.getX(q),this.g=W.getY(q),this.b=W.getZ(q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Hn=new n;n.NAMES=mh;class pt{constructor(W,q=1,Y=1000){this.isFog=!0,this.name="",this.color=new n(W),this.near=q,this.far=Y}clone(){return new pt(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class k extends h{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(W,q){return super.copy(W,q),this.background=W.background!==null?W.background.clone():null,this.environment=W.environment!==null?W.environment.clone():null,this.fog=W.fog!==null?W.fog.clone():null,this.backgroundBlurriness=W.backgroundBlurriness,this.backgroundIntensity=W.backgroundIntensity,this.backgroundRotation.copy(W.backgroundRotation),this.environmentIntensity=W.environmentIntensity,this.environmentRotation.copy(W.environmentRotation),this.overrideMaterial=W.overrideMaterial!==null?W.overrideMaterial.clone():null,this.matrixAutoUpdate=W.matrixAutoUpdate,this}toJSON(W){let q=super.toJSON(W);if(this.fog!==null)q.object.fog=this.fog.toJSON();return q.object.backgroundBlurriness=this.backgroundBlurriness,q.object.backgroundIntensity=this.backgroundIntensity,q.object.backgroundRotation=this.backgroundRotation.toArray(),q.object.environmentIntensity=this.environmentIntensity,q.object.environmentRotation=this.environmentRotation.toArray(),q}}var ii=new t,gi=new t,Ea=new t,_i=new t,es=new t,ns=new t,Wl=new t,Aa=new t,Ta=new t,wa=new t,Ra=new Tn,Ca=new Tn,Ia=new Tn;class Jn{constructor(W=new t,q=new t,Y=new t){this.a=W,this.b=q,this.c=Y}static getNormal(W,q,Y,Z){Z.subVectors(Y,q),ii.subVectors(W,q),Z.cross(ii);let tt=Z.lengthSq();if(tt>0)return Z.multiplyScalar(1/Math.sqrt(tt));return Z.set(0,0,0)}static getBarycoord(W,q,Y,Z,tt){ii.subVectors(Z,q),gi.subVectors(Y,q),Ea.subVectors(W,q);let at=ii.dot(ii),Mt=ii.dot(gi),bt=ii.dot(Ea),Et=gi.dot(gi),At=gi.dot(Ea),Ct=at*Et-Mt*Mt;if(Ct===0)return tt.set(0,0,0),null;let It=1/Ct,Rt=(Et*bt-Mt*At)*It,Lt=(at*At-Mt*bt)*It;return tt.set(1-Rt-Lt,Lt,Rt)}static containsPoint(W,q,Y,Z){if(this.getBarycoord(W,q,Y,Z,_i)===null)return!1;return _i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(W,q,Y,Z,tt,at,Mt,bt){if(this.getBarycoord(W,q,Y,Z,_i)===null){if(bt.x=0,bt.y=0,"z"in bt)bt.z=0;if("w"in bt)bt.w=0;return null}return bt.setScalar(0),bt.addScaledVector(tt,_i.x),bt.addScaledVector(at,_i.y),bt.addScaledVector(Mt,_i.z),bt}static getInterpolatedAttribute(W,q,Y,Z,tt,at){return Ra.setScalar(0),Ca.setScalar(0),Ia.setScalar(0),Ra.fromBufferAttribute(W,q),Ca.fromBufferAttribute(W,Y),Ia.fromBufferAttribute(W,Z),at.setScalar(0),at.addScaledVector(Ra,tt.x),at.addScaledVector(Ca,tt.y),at.addScaledVector(Ia,tt.z),at}static isFrontFacing(W,q,Y,Z){return ii.subVectors(Y,q),gi.subVectors(W,q),ii.cross(gi).dot(Z)<0}set(W,q,Y){return this.a.copy(W),this.b.copy(q),this.c.copy(Y),this}setFromPointsAndIndices(W,q,Y,Z){return this.a.copy(W[q]),this.b.copy(W[Y]),this.c.copy(W[Z]),this}setFromAttributeAndIndices(W,q,Y,Z){return this.a.fromBufferAttribute(W,q),this.b.fromBufferAttribute(W,Y),this.c.fromBufferAttribute(W,Z),this}clone(){return new this.constructor().copy(this)}copy(W){return this.a.copy(W.a),this.b.copy(W.b),this.c.copy(W.c),this}getArea(){return ii.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),ii.cross(gi).length()*0.5}getMidpoint(W){return W.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(W){return Jn.getNormal(this.a,this.b,this.c,W)}getPlane(W){return W.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(W,q){return Jn.getBarycoord(W,this.a,this.b,this.c,q)}getInterpolation(W,q,Y,Z,tt){return Jn.getInterpolation(W,this.a,this.b,this.c,q,Y,Z,tt)}containsPoint(W){return Jn.containsPoint(W,this.a,this.b,this.c)}isFrontFacing(W){return Jn.isFrontFacing(this.a,this.b,this.c,W)}intersectsBox(W){return W.intersectsTriangle(this)}closestPointToPoint(W,q){let Y=this.a,Z=this.b,tt=this.c,at,Mt;es.subVectors(Z,Y),ns.subVectors(tt,Y),Aa.subVectors(W,Y);let bt=es.dot(Aa),Et=ns.dot(Aa);if(bt<=0&&Et<=0)return q.copy(Y);Ta.subVectors(W,Z);let At=es.dot(Ta),Ct=ns.dot(Ta);if(At>=0&&Ct<=At)return q.copy(Z);let It=bt*Ct-At*Et;if(It<=0&&bt>=0&&At<=0&&bt-At>0)return at=bt/(bt-At),q.copy(Y).addScaledVector(es,at);wa.subVectors(W,tt);let Rt=es.dot(wa),Lt=ns.dot(wa);if(Lt>=0&&Rt<=Lt)return q.copy(tt);let Dt=Rt*Et-bt*Lt;if(Dt<=0&&Et>=0&&Lt<=0)return Mt=Et/(Et-Lt),q.copy(Y).addScaledVector(ns,Mt);let Bt=At*Lt-Rt*Ct;if(Bt<=0&&Ct-At>=0&&Rt-Lt>=0)return Wl.subVectors(tt,Z),Mt=(Ct-At)/(Ct-At+(Rt-Lt)),q.copy(Z).addScaledVector(Wl,Mt);let Pt=1/(Bt+Dt+It);return at=Dt*Pt,Mt=It*Pt,q.copy(Y).addScaledVector(es,at).addScaledVector(ns,Mt)}equals(W){return W.a.equals(this.a)&&W.b.equals(this.b)&&W.c.equals(this.c)}}class T{constructor(W=new t(1/0,1/0,1/0),q=new t(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=W,this.max=q}set(W,q){return this.min.copy(W),this.max.copy(q),this}setFromArray(W){this.makeEmpty();for(let q=0,Y=W.length;q<Y;q+=3)this.expandByPoint(si.fromArray(W,q));return this}setFromBufferAttribute(W){this.makeEmpty();for(let q=0,Y=W.count;q<Y;q++)this.expandByPoint(si.fromBufferAttribute(W,q));return this}setFromPoints(W){this.makeEmpty();for(let q=0,Y=W.length;q<Y;q++)this.expandByPoint(W[q]);return this}setFromCenterAndSize(W,q){let Y=si.copy(q).multiplyScalar(0.5);return this.min.copy(W).sub(Y),this.max.copy(W).add(Y),this}setFromObject(W,q=!1){return this.makeEmpty(),this.expandByObject(W,q)}clone(){return new this.constructor().copy(this)}copy(W){return this.min.copy(W.min),this.max.copy(W.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(W){return this.isEmpty()?W.set(0,0,0):W.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(W){return this.isEmpty()?W.set(0,0,0):W.subVectors(this.max,this.min)}expandByPoint(W){return this.min.min(W),this.max.max(W),this}expandByVector(W){return this.min.sub(W),this.max.add(W),this}expandByScalar(W){return this.min.addScalar(-W),this.max.addScalar(W),this}expandByObject(W,q=!1){W.updateWorldMatrix(!1,!1);let Y=W.geometry;if(Y!==void 0){let tt=Y.getAttribute("position");if(q===!0&&tt!==void 0&&W.isInstancedMesh!==!0)for(let at=0,Mt=tt.count;at<Mt;at++){if(W.isMesh===!0)W.getVertexPosition(at,si);else si.fromBufferAttribute(tt,at);si.applyMatrix4(W.matrixWorld),this.expandByPoint(si)}else{if(W.boundingBox!==void 0){if(W.boundingBox===null)W.computeBoundingBox();ar.copy(W.boundingBox)}else{if(Y.boundingBox===null)Y.computeBoundingBox();ar.copy(Y.boundingBox)}ar.applyMatrix4(W.matrixWorld),this.union(ar)}}let Z=W.children;for(let tt=0,at=Z.length;tt<at;tt++)this.expandByObject(Z[tt],q);return this}containsPoint(W){return W.x>=this.min.x&&W.x<=this.max.x&&W.y>=this.min.y&&W.y<=this.max.y&&W.z>=this.min.z&&W.z<=this.max.z}containsBox(W){return this.min.x<=W.min.x&&W.max.x<=this.max.x&&this.min.y<=W.min.y&&W.max.y<=this.max.y&&this.min.z<=W.min.z&&W.max.z<=this.max.z}getParameter(W,q){return q.set((W.x-this.min.x)/(this.max.x-this.min.x),(W.y-this.min.y)/(this.max.y-this.min.y),(W.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(W){return W.max.x>=this.min.x&&W.min.x<=this.max.x&&W.max.y>=this.min.y&&W.min.y<=this.max.y&&W.max.z>=this.min.z&&W.min.z<=this.max.z}intersectsSphere(W){return this.clampPoint(W.center,si),si.distanceToSquared(W.center)<=W.radius*W.radius}intersectsPlane(W){let q,Y;if(W.normal.x>0)q=W.normal.x*this.min.x,Y=W.normal.x*this.max.x;else q=W.normal.x*this.max.x,Y=W.normal.x*this.min.x;if(W.normal.y>0)q+=W.normal.y*this.min.y,Y+=W.normal.y*this.max.y;else q+=W.normal.y*this.max.y,Y+=W.normal.y*this.min.y;if(W.normal.z>0)q+=W.normal.z*this.min.z,Y+=W.normal.z*this.max.z;else q+=W.normal.z*this.max.z,Y+=W.normal.z*this.min.z;return q<=-W.constant&&Y>=-W.constant}intersectsTriangle(W){if(this.isEmpty())return!1;this.getCenter(ws),or.subVectors(this.max,ws),is.subVectors(W.a,ws),ss.subVectors(W.b,ws),rs.subVectors(W.c,ws),wi.subVectors(ss,is),Ri.subVectors(rs,ss),Fi.subVectors(is,rs);let q=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-Fi.z,Fi.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,Fi.z,0,-Fi.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-Fi.y,Fi.x,0];if(!Pa(q,is,ss,rs,or))return!1;if(q=[1,0,0,0,1,0,0,0,1],!Pa(q,is,ss,rs,or))return!1;return lr.crossVectors(wi,Ri),q=[lr.x,lr.y,lr.z],Pa(q,is,ss,rs,or)}clampPoint(W,q){return q.copy(W).clamp(this.min,this.max)}distanceToPoint(W){return this.clampPoint(W,si).distanceTo(W)}getBoundingSphere(W){if(this.isEmpty())W.makeEmpty();else this.getCenter(W.center),W.radius=this.getSize(si).length()*0.5;return W}intersect(W){if(this.min.max(W.min),this.max.min(W.max),this.isEmpty())this.makeEmpty();return this}union(W){return this.min.min(W.min),this.max.max(W.max),this}applyMatrix4(W){if(this.isEmpty())return this;return xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(W),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(W),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(W),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(W),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(W),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(W),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(W),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(W),this.setFromPoints(xi),this}translate(W){return this.min.add(W),this.max.add(W),this}equals(W){return W.min.equals(this.min)&&W.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(W){return this.min.fromArray(W.min),this.max.fromArray(W.max),this}}var xi=[new t,new t,new t,new t,new t,new t,new t,new t],si=new t,ar=new T,is=new t,ss=new t,rs=new t,wi=new t,Ri=new t,Fi=new t,ws=new t,or=new t,lr=new t,Oi=new t;function Pa(W,q,Y,Z,tt){for(let at=0,Mt=W.length-3;at<=Mt;at+=3){Oi.fromArray(W,at);let bt=tt.x*Math.abs(Oi.x)+tt.y*Math.abs(Oi.y)+tt.z*Math.abs(Oi.z),Et=q.dot(Oi),At=Y.dot(Oi),Ct=Z.dot(Oi);if(Math.max(-Math.max(Et,At,Ct),Math.min(Et,At,Ct))>bt)return!1}return!0}var Cn=new t,cr=new e,Lu=0;class E extends bi{constructor(W,q,Y=!1){super();if(Array.isArray(W))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lu++}),this.name="",this.array=W,this.itemSize=q,this.count=W!==void 0?W.length/q:0,this.normalized=Y,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(W){if(W===!0)this.version++}setUsage(W){return this.usage=W,this}addUpdateRange(W,q){this.updateRanges.push({start:W,count:q})}clearUpdateRanges(){this.updateRanges.length=0}copy(W){return this.name=W.name,this.array=new W.array.constructor(W.array),this.itemSize=W.itemSize,this.count=W.count,this.normalized=W.normalized,this.usage=W.usage,this.gpuType=W.gpuType,this}copyAt(W,q,Y){W*=this.itemSize,Y*=q.itemSize;for(let Z=0,tt=this.itemSize;Z<tt;Z++)this.array[W+Z]=q.array[Y+Z];return this}copyArray(W){return this.array.set(W),this}applyMatrix3(W){if(this.itemSize===2)for(let q=0,Y=this.count;q<Y;q++)cr.fromBufferAttribute(this,q),cr.applyMatrix3(W),this.setXY(q,cr.x,cr.y);else if(this.itemSize===3)for(let q=0,Y=this.count;q<Y;q++)Cn.fromBufferAttribute(this,q),Cn.applyMatrix3(W),this.setXYZ(q,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(W){for(let q=0,Y=this.count;q<Y;q++)Cn.fromBufferAttribute(this,q),Cn.applyMatrix4(W),this.setXYZ(q,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(W){for(let q=0,Y=this.count;q<Y;q++)Cn.fromBufferAttribute(this,q),Cn.applyNormalMatrix(W),this.setXYZ(q,Cn.x,Cn.y,Cn.z);return this}transformDirection(W){for(let q=0,Y=this.count;q<Y;q++)Cn.fromBufferAttribute(this,q),Cn.transformDirection(W),this.setXYZ(q,Cn.x,Cn.y,Cn.z);return this}set(W,q=0){return this.array.set(W,q),this}getComponent(W,q){let Y=this.array[W*this.itemSize+q];if(this.normalized)Y=As(Y,this.array);return Y}setComponent(W,q,Y){if(this.normalized)Y=qn(Y,this.array);return this.array[W*this.itemSize+q]=Y,this}getX(W){let q=this.array[W*this.itemSize];if(this.normalized)q=As(q,this.array);return q}setX(W,q){if(this.normalized)q=qn(q,this.array);return this.array[W*this.itemSize]=q,this}getY(W){let q=this.array[W*this.itemSize+1];if(this.normalized)q=As(q,this.array);return q}setY(W,q){if(this.normalized)q=qn(q,this.array);return this.array[W*this.itemSize+1]=q,this}getZ(W){let q=this.array[W*this.itemSize+2];if(this.normalized)q=As(q,this.array);return q}setZ(W,q){if(this.normalized)q=qn(q,this.array);return this.array[W*this.itemSize+2]=q,this}getW(W){let q=this.array[W*this.itemSize+3];if(this.normalized)q=As(q,this.array);return q}setW(W,q){if(this.normalized)q=qn(q,this.array);return this.array[W*this.itemSize+3]=q,this}setXY(W,q,Y){if(W*=this.itemSize,this.normalized)q=qn(q,this.array),Y=qn(Y,this.array);return this.array[W+0]=q,this.array[W+1]=Y,this}setXYZ(W,q,Y,Z){if(W*=this.itemSize,this.normalized)q=qn(q,this.array),Y=qn(Y,this.array),Z=qn(Z,this.array);return this.array[W+0]=q,this.array[W+1]=Y,this.array[W+2]=Z,this}setXYZW(W,q,Y,Z,tt){if(W*=this.itemSize,this.normalized)q=qn(q,this.array),Y=qn(Y,this.array),Z=qn(Z,this.array),tt=qn(tt,this.array);return this.array[W+0]=q,this.array[W+1]=Y,this.array[W+2]=Z,this.array[W+3]=tt,this}onUpload(W){return this.onUploadCallback=W,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let W={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return W.name=this.name,W.usage=this.usage,W.gpuType=this.gpuType,W}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends E{constructor(W,q,Y){super(new Uint16Array(W),q,Y)}}class $r extends E{constructor(W,q,Y){super(new Uint32Array(W),q,Y)}}class s extends E{constructor(W,q,Y){super(new Float32Array(W),q,Y)}}var Nu=new T,Rs=new t,La=new t;class L{constructor(W=new t,q=-1){this.isSphere=!0,this.center=W,this.radius=q}set(W,q){return this.center.copy(W),this.radius=q,this}setFromPoints(W,q){let Y=this.center;if(q!==void 0)Y.copy(q);else Nu.setFromPoints(W).getCenter(Y);let Z=0;for(let tt=0,at=W.length;tt<at;tt++)Z=Math.max(Z,Y.distanceToSquared(W[tt]));return this.radius=Math.sqrt(Z),this}copy(W){return this.center.copy(W.center),this.radius=W.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(W){return W.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(W){return W.distanceTo(this.center)-this.radius}intersectsSphere(W){let q=this.radius+W.radius;return W.center.distanceToSquared(this.center)<=q*q}intersectsBox(W){return W.intersectsSphere(this)}intersectsPlane(W){return Math.abs(W.distanceToPoint(this.center))<=this.radius}clampPoint(W,q){let Y=this.center.distanceToSquared(W);if(q.copy(W),Y>this.radius*this.radius)q.sub(this.center).normalize(),q.multiplyScalar(this.radius).add(this.center);return q}getBoundingBox(W){if(this.isEmpty())return W.makeEmpty(),W;return W.set(this.center,this.center),W.expandByScalar(this.radius),W}applyMatrix4(W){return this.center.applyMatrix4(W),this.radius=this.radius*W.getMaxScaleOnAxis(),this}translate(W){return this.center.add(W),this}expandByPoint(W){if(this.isEmpty())return this.center.copy(W),this.radius=0,this;Rs.subVectors(W,this.center);let q=Rs.lengthSq();if(q>this.radius*this.radius){let Y=Math.sqrt(q),Z=(Y-this.radius)*0.5;this.center.addScaledVector(Rs,Z/Y),this.radius+=Z}return this}union(W){if(W.isEmpty())return this;if(this.isEmpty())return this.copy(W),this;if(this.center.equals(W.center)===!0)this.radius=Math.max(this.radius,W.radius);else La.subVectors(W.center,this.center).setLength(W.radius),this.expandByPoint(Rs.copy(W.center).add(La)),this.expandByPoint(Rs.copy(W.center).sub(La));return this}equals(W){return W.center.equals(this.center)&&W.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(W){return this.radius=W.radius,this.center.fromArray(W.center),this}}var Du=0,$n=new o,Na=new h,as=new t,Zn=new T,Cs=new T,Un=new t;class l extends bi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(W){if(Array.isArray(W))this.index=new((vu(W))?$r:Jr)(W,1);else this.index=W;return this}setIndirect(W,q=0){return this.indirect=W,this.indirectOffset=q,this}getIndirect(){return this.indirect}getAttribute(W){return this.attributes[W]}setAttribute(W,q){return this.attributes[W]=q,this}deleteAttribute(W){return delete this.attributes[W],this}hasAttribute(W){return this.attributes[W]!==void 0}addGroup(W,q,Y=0){this.groups.push({start:W,count:q,materialIndex:Y})}clearGroups(){this.groups=[]}setDrawRange(W,q){this.drawRange.start=W,this.drawRange.count=q}applyMatrix4(W){let q=this.attributes.position;if(q!==void 0)q.applyMatrix4(W),q.needsUpdate=!0;let Y=this.attributes.normal;if(Y!==void 0){let tt=new tn().getNormalMatrix(W);Y.applyNormalMatrix(tt),Y.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(W),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(W){return $n.makeRotationFromQuaternion(W),this.applyMatrix4($n),this}rotateX(W){return $n.makeRotationX(W),this.applyMatrix4($n),this}rotateY(W){return $n.makeRotationY(W),this.applyMatrix4($n),this}rotateZ(W){return $n.makeRotationZ(W),this.applyMatrix4($n),this}translate(W,q,Y){return $n.makeTranslation(W,q,Y),this.applyMatrix4($n),this}scale(W,q,Y){return $n.makeScale(W,q,Y),this.applyMatrix4($n),this}lookAt(W){return Na.lookAt(W),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(W){let q=this.getAttribute("position");if(q===void 0){let Y=[];for(let Z=0,tt=W.length;Z<tt;Z++){let at=W[Z];Y.push(at.x,at.y,at.z||0)}this.setAttribute("position",new s(Y,3))}else{let Y=Math.min(W.length,q.count);for(let Z=0;Z<Y;Z++){let tt=W[Z];q.setXYZ(Z,tt.x,tt.y,tt.z||0)}if(W.length>q.count)Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new T;let W=this.attributes.position,q=this.morphAttributes.position;if(W&&W.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new t(-1/0,-1/0,-1/0),new t(1/0,1/0,1/0));return}if(W!==void 0){if(this.boundingBox.setFromBufferAttribute(W),q)for(let Y=0,Z=q.length;Y<Z;Y++){let tt=q[Y];if(Zn.setFromBufferAttribute(tt),this.morphTargetsRelative)Un.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Un);else this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new L;let W=this.attributes.position,q=this.morphAttributes.position;if(W&&W.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new t,1/0);return}if(W){let Y=this.boundingSphere.center;if(Zn.setFromBufferAttribute(W),q)for(let tt=0,at=q.length;tt<at;tt++){let Mt=q[tt];if(Cs.setFromBufferAttribute(Mt),this.morphTargetsRelative)Un.addVectors(Zn.min,Cs.min),Zn.expandByPoint(Un),Un.addVectors(Zn.max,Cs.max),Zn.expandByPoint(Un);else Zn.expandByPoint(Cs.min),Zn.expandByPoint(Cs.max)}Zn.getCenter(Y);let Z=0;for(let tt=0,at=W.count;tt<at;tt++)Un.fromBufferAttribute(W,tt),Z=Math.max(Z,Y.distanceToSquared(Un));if(q)for(let tt=0,at=q.length;tt<at;tt++){let Mt=q[tt],bt=this.morphTargetsRelative;for(let Et=0,At=Mt.count;Et<At;Et++){if(Un.fromBufferAttribute(Mt,Et),bt)as.fromBufferAttribute(W,Et),Un.add(as);Z=Math.max(Z,Y.distanceToSquared(Un))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let W=this.index,q=this.attributes;if(W===null||q.position===void 0||q.normal===void 0||q.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Y,normal:Z,uv:tt}=q,at=this.getAttribute("tangent");if(at===void 0||at.count!==Y.count)at=new E(new Float32Array(4*Y.count),4),this.setAttribute("tangent",at);let Mt=[],bt=[],Et=new Uint8Array(Y.count);for(let Ot=0;Ot<Y.count;Ot++)Mt[Ot]=new t,bt[Ot]=new t;let At=new t,Ct=new t,It=new t,Rt=new e,Lt=new e,Dt=new e,Bt=new t,Pt=new t;function wt(Ot,Yt,ie){Et[Ot]=Et[Yt]=Et[ie]=1,At.fromBufferAttribute(Y,Ot),Ct.fromBufferAttribute(Y,Yt),It.fromBufferAttribute(Y,ie),Rt.fromBufferAttribute(tt,Ot),Lt.fromBufferAttribute(tt,Yt),Dt.fromBufferAttribute(tt,ie),Ct.sub(At),It.sub(At),Lt.sub(Rt),Dt.sub(Rt);let Zt=1/(Lt.x*Dt.y-Dt.x*Lt.y);if(!isFinite(Zt))return;Bt.copy(Ct).multiplyScalar(Dt.y).addScaledVector(It,-Lt.y).multiplyScalar(Zt),Pt.copy(It).multiplyScalar(Lt.x).addScaledVector(Ct,-Dt.x).multiplyScalar(Zt),Mt[Ot].add(Bt),Mt[Yt].add(Bt),Mt[ie].add(Bt),bt[Ot].add(Pt),bt[Yt].add(Pt),bt[ie].add(Pt)}let Gt=this.groups;if(Gt.length===0)Gt=[{start:0,count:W.count}];for(let Ot=0,Yt=Gt.length;Ot<Yt;++Ot){let ie=Gt[Ot],{start:Zt,count:ee}=ie;for(let he=Zt,Xt=Zt+ee;he<Xt;he+=3)wt(W.getX(he+0),W.getX(he+1),W.getX(he+2))}let Wt=new t,zt=new t,Ht=new t,qt=new t;function Nt(Ot){Ht.fromBufferAttribute(Z,Ot),qt.copy(Ht);let Yt=Mt[Ot];Wt.copy(Yt),Wt.sub(Ht.multiplyScalar(Ht.dot(Yt))).normalize(),zt.crossVectors(qt,Yt);let Zt=zt.dot(bt[Ot])<0?-1:1;at.setXYZW(Ot,Wt.x,Wt.y,Wt.z,Zt)}for(let Ot=0,Yt=Y.count;Ot<Yt;++Ot)if(Et[Ot])Nt(Ot);this._transformed=!0}computeVertexNormals(){let W=this.index,q=this.getAttribute("position");if(q!==void 0){let Y=this.getAttribute("normal");if(Y===void 0||Y.count!==q.count)Y=new E(new Float32Array(q.count*3),3),this.setAttribute("normal",Y);else for(let It=0,Rt=Y.count;It<Rt;It++)Y.setXYZ(It,0,0,0);let Z=new t,tt=new t,at=new t,Mt=new t,bt=new t,Et=new t,At=new t,Ct=new t;if(W)for(let It=0,Rt=W.count;It<Rt;It+=3){let Lt=W.getX(It+0),Dt=W.getX(It+1),Bt=W.getX(It+2);Z.fromBufferAttribute(q,Lt),tt.fromBufferAttribute(q,Dt),at.fromBufferAttribute(q,Bt),At.subVectors(at,tt),Ct.subVectors(Z,tt),At.cross(Ct),Mt.fromBufferAttribute(Y,Lt),bt.fromBufferAttribute(Y,Dt),Et.fromBufferAttribute(Y,Bt),Mt.add(At),bt.add(At),Et.add(At),Y.setXYZ(Lt,Mt.x,Mt.y,Mt.z),Y.setXYZ(Dt,bt.x,bt.y,bt.z),Y.setXYZ(Bt,Et.x,Et.y,Et.z)}else for(let It=0,Rt=q.count;It<Rt;It+=3)Z.fromBufferAttribute(q,It+0),tt.fromBufferAttribute(q,It+1),at.fromBufferAttribute(q,It+2),At.subVectors(at,tt),Ct.subVectors(Z,tt),At.cross(Ct),Y.setXYZ(It+0,At.x,At.y,At.z),Y.setXYZ(It+1,At.x,At.y,At.z),Y.setXYZ(It+2,At.x,At.y,At.z);this.normalizeNormals(),Y.needsUpdate=!0}}normalizeNormals(){let W=this.attributes.normal;for(let q=0,Y=W.count;q<Y;q++)Un.fromBufferAttribute(W,q),Un.normalize(),W.setXYZ(q,Un.x,Un.y,Un.z)}toNonIndexed(){function W(Mt,bt){let{array:Et,itemSize:At,normalized:Ct}=Mt,It=new Et.constructor(bt.length*At),Rt=0,Lt=0;for(let Dt=0,Bt=bt.length;Dt<Bt;Dt++){if(Mt.isInterleavedBufferAttribute)Rt=bt[Dt]*Mt.data.stride+Mt.offset;else Rt=bt[Dt]*At;for(let Pt=0;Pt<At;Pt++)It[Lt++]=Et[Rt++]}return new E(It,At,Ct)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let q=new l,Y=this.index.array,Z=this.attributes;for(let Mt in Z){let bt=Z[Mt],Et=W(bt,Y);q.setAttribute(Mt,Et)}let tt=this.morphAttributes;for(let Mt in tt){let bt=[],Et=tt[Mt];for(let At=0,Ct=Et.length;At<Ct;At++){let It=Et[At],Rt=W(It,Y);bt.push(Rt)}q.morphAttributes[Mt]=bt}q.morphTargetsRelative=this.morphTargetsRelative;let at=this.groups;for(let Mt=0,bt=at.length;Mt<bt;Mt++){let Et=at[Mt];q.addGroup(Et.start,Et.count,Et.materialIndex)}return q}toJSON(){let W={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(W.uuid=this.uuid,W.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,W.name=this.name,Object.keys(this.userData).length>0)W.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let bt=this.parameters;for(let Et in bt)if(bt[Et]!==void 0)W[Et]=bt[Et];return W}W.data={attributes:{}};let q=this.index;if(q!==null)W.data.index={type:q.array.constructor.name,array:Array.prototype.slice.call(q.array)};let Y=this.attributes;for(let bt in Y){let Et=Y[bt];W.data.attributes[bt]=Et.toJSON(W.data)}let Z={},tt=!1;for(let bt in this.morphAttributes){let Et=this.morphAttributes[bt],At=[];for(let Ct=0,It=Et.length;Ct<It;Ct++){let Rt=Et[Ct];At.push(Rt.toJSON(W.data))}if(At.length>0)Z[bt]=At,tt=!0}if(tt)W.data.morphAttributes=Z,W.data.morphTargetsRelative=this.morphTargetsRelative;let at=this.groups;if(at.length>0)W.data.groups=JSON.parse(JSON.stringify(at));let Mt=this.boundingSphere;if(Mt!==null)W.data.boundingSphere=Mt.toJSON();return W}clone(){return new this.constructor().copy(this)}copy(W){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let q={};this.name=W.name;let Y=W.index;if(Y!==null)this.setIndex(Y.clone());let Z=W.attributes;for(let Et in Z){let At=Z[Et];this.setAttribute(Et,At.clone(q))}let tt=W.morphAttributes;for(let Et in tt){let At=[],Ct=tt[Et];for(let It=0,Rt=Ct.length;It<Rt;It++)At.push(Ct[It].clone(q));this.morphAttributes[Et]=At}this.morphTargetsRelative=W.morphTargetsRelative;let at=W.groups;for(let Et=0,At=at.length;Et<At;Et++){let Ct=at[Et];this.addGroup(Ct.start,Ct.count,Ct.materialIndex)}let Mt=W.boundingBox;if(Mt!==null)this.boundingBox=Mt.clone();let bt=W.boundingSphere;if(bt!==null)this.boundingSphere=bt.clone();return this.drawRange.start=W.drawRange.start,this.drawRange.count=W.drawRange.count,this.userData=W.userData,this._transformed=W._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Da=new t,Uu=new t,Fu=new tn;class li{constructor(W=new t(1,0,0),q=0){this.isPlane=!0,this.normal=W,this.constant=q}set(W,q){return this.normal.copy(W),this.constant=q,this}setComponents(W,q,Y,Z){return this.normal.set(W,q,Y),this.constant=Z,this}setFromNormalAndCoplanarPoint(W,q){return this.normal.copy(W),this.constant=-q.dot(this.normal),this}setFromCoplanarPoints(W,q,Y){let Z=Da.subVectors(Y,q).cross(Uu.subVectors(W,q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,W),this}copy(W){return this.normal.copy(W.normal),this.constant=W.constant,this}normalize(){let W=1/this.normal.length();return this.normal.multiplyScalar(W),this.constant*=W,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(W){return this.normal.dot(W)+this.constant}distanceToSphere(W){return this.distanceToPoint(W.center)-W.radius}projectPoint(W,q){return q.copy(W).addScaledVector(this.normal,-this.distanceToPoint(W))}intersectLine(W,q,Y=!0){let Z=W.delta(Da),tt=this.normal.dot(Z);if(tt===0){if(this.distanceToPoint(W.start)===0)return q.copy(W.start);return null}let at=-(W.start.dot(this.normal)+this.constant)/tt;if(Y===!0&&(at<0||at>1))return null;return q.copy(W.start).addScaledVector(Z,at)}intersectsLine(W){let q=this.distanceToPoint(W.start),Y=this.distanceToPoint(W.end);return q<0&&Y>0||Y<0&&q>0}intersectsBox(W){return W.intersectsPlane(this)}intersectsSphere(W){return W.intersectsPlane(this)}coplanarPoint(W){return W.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(W,q){let Y=q||Fu.getNormalMatrix(W),Z=this.coplanarPoint(Da).applyMatrix4(W),tt=this.normal.applyMatrix3(Y).normalize();return this.constant=-Z.dot(tt),this}translate(W){return this.constant-=W.dot(this.normal),this}equals(W){return W.normal.equals(this.normal)&&W.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(W){return this.normal.fromArray(W.normal),this.constant=W.constant,this}}var Ou=0;class ui extends bi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new n(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(W){if(this._alphaTest>0!==W>0)this.version++;this._alphaTest=W}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(W){if(W===void 0)return;for(let q in W){let Y=W[q];if(Y===void 0){Ke(`Material: parameter '${q}' has value of undefined.`);continue}let Z=this[q];if(Z===void 0){Ke(`Material: '${q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Y);else if(Z&&Z.isVector2&&(Y&&Y.isVector2)||Z&&Z.isEuler&&(Y&&Y.isEuler)||Z&&Z.isVector3&&(Y&&Y.isVector3))Z.copy(Y);else this[q]=Y}}toJSON(W){let q=W===void 0||typeof W==="string";if(q)W={textures:{},images:{}};let Y={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Y.uuid=this.uuid,Y.type=this.type,Y.blending=this.blending,Y.side=this.side,Y.shadowSide=this.shadowSide,Y.vertexColors=this.vertexColors,Y.opacity=this.opacity,Y.transparent=this.transparent,Y.blendSrc=this.blendSrc,Y.blendDst=this.blendDst,Y.blendEquation=this.blendEquation,Y.blendSrcAlpha=this.blendSrcAlpha,Y.blendDstAlpha=this.blendDstAlpha,Y.blendEquationAlpha=this.blendEquationAlpha,Y.blendColor=this.blendColor.getHex(),Y.blendAlpha=this.blendAlpha,Y.depthFunc=this.depthFunc,Y.depthTest=this.depthTest,Y.depthWrite=this.depthWrite,Y.colorWrite=this.colorWrite,Y.clipIntersection=this.clipIntersection,Y.clipShadows=this.clipShadows,Y.stencilWriteMask=this.stencilWriteMask,Y.stencilFunc=this.stencilFunc,Y.stencilRef=this.stencilRef,Y.stencilFuncMask=this.stencilFuncMask,Y.stencilFail=this.stencilFail,Y.stencilZFail=this.stencilZFail,Y.stencilZPass=this.stencilZPass,Y.stencilWrite=this.stencilWrite,Y.polygonOffset=this.polygonOffset,Y.polygonOffsetFactor=this.polygonOffsetFactor,Y.polygonOffsetUnits=this.polygonOffsetUnits,Y.dithering=this.dithering,Y.alphaTest=this.alphaTest,Y.alphaHash=this.alphaHash,Y.alphaToCoverage=this.alphaToCoverage,Y.premultipliedAlpha=this.premultipliedAlpha,Y.forceSinglePass=this.forceSinglePass,Y.allowOverride=this.allowOverride,Y.visible=this.visible,Y.toneMapped=this.toneMapped,Y.name=this.name,this.color&&this.color.isColor)Y.color=this.color.getHex();if(this.roughness!==void 0)Y.roughness=this.roughness;if(this.metalness!==void 0)Y.metalness=this.metalness;if(this.sheen!==void 0)Y.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Y.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Y.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Y.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Y.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Y.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Y.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Y.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Y.shininess=this.shininess;if(this.clearcoat!==void 0)Y.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Y.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)Y.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)Y.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(W).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Y.clearcoatMap=this.clearcoatMap.toJSON(W).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Y.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(W).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Y.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(W).uuid,Y.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Y.sheenColorMap=this.sheenColorMap.toJSON(W).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Y.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(W).uuid;if(this.dispersion!==void 0)Y.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Y.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Y.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Y.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Y.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Y.iridescenceMap=this.iridescenceMap.toJSON(W).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Y.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(W).uuid;if(this.anisotropy!==void 0)Y.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Y.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Y.anisotropyMap=this.anisotropyMap.toJSON(W).uuid;if(this.map&&this.map.isTexture)Y.map=this.map.toJSON(W).uuid;if(this.matcap&&this.matcap.isTexture)Y.matcap=this.matcap.toJSON(W).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Y.alphaMap=this.alphaMap.toJSON(W).uuid;if(this.lightMap&&this.lightMap.isTexture)Y.lightMap=this.lightMap.toJSON(W).uuid,Y.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Y.aoMap=this.aoMap.toJSON(W).uuid,Y.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Y.bumpMap=this.bumpMap.toJSON(W).uuid,Y.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Y.normalMap=this.normalMap.toJSON(W).uuid,Y.normalMapType=this.normalMapType,Y.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Y.displacementMap=this.displacementMap.toJSON(W).uuid,Y.displacementScale=this.displacementScale,Y.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Y.roughnessMap=this.roughnessMap.toJSON(W).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Y.metalnessMap=this.metalnessMap.toJSON(W).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Y.emissiveMap=this.emissiveMap.toJSON(W).uuid;if(this.specularMap&&this.specularMap.isTexture)Y.specularMap=this.specularMap.toJSON(W).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Y.specularIntensityMap=this.specularIntensityMap.toJSON(W).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Y.specularColorMap=this.specularColorMap.toJSON(W).uuid;if(this.envMap&&this.envMap.isTexture){if(Y.envMap=this.envMap.toJSON(W).uuid,this.combine!==void 0)Y.combine=this.combine}if(this.envMapRotation!==void 0)Y.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Y.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Y.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Y.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Y.gradientMap=this.gradientMap.toJSON(W).uuid;if(this.transmission!==void 0)Y.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Y.transmissionMap=this.transmissionMap.toJSON(W).uuid;if(this.thickness!==void 0)Y.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Y.thicknessMap=this.thicknessMap.toJSON(W).uuid;if(this.attenuationDistance!==void 0)Y.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Y.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Y.size=this.size;if(this.sizeAttenuation!==void 0)Y.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Y.clippingPlanes=this.clippingPlanes.map((tt)=>tt.toJSON());if(this.rotation!==void 0)Y.rotation=this.rotation;if(this.depthPacking!==void 0)Y.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Y.linewidth=this.linewidth;if(this.linecap!==void 0)Y.linecap=this.linecap;if(this.linejoin!==void 0)Y.linejoin=this.linejoin;if(this.dashSize!==void 0)Y.dashSize=this.dashSize;if(this.gapSize!==void 0)Y.gapSize=this.gapSize;if(this.scale!==void 0)Y.scale=this.scale;if(this.wireframe!==void 0)Y.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Y.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Y.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Y.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Y.flatShading=this.flatShading;if(this.fog!==void 0)Y.fog=this.fog;if(Object.keys(this.userData).length>0)Y.userData=this.userData;function Z(tt){let at=[];for(let Mt in tt){let bt=tt[Mt];delete bt.metadata,at.push(bt)}return at}if(q){let tt=Z(W.textures),at=Z(W.images);if(tt.length>0)Y.textures=tt;if(at.length>0)Y.images=at}return Y}fromJSON(W,q){if(W.uuid!==void 0)this.uuid=W.uuid;if(W.name!==void 0)this.name=W.name;if(W.color!==void 0&&this.color!==void 0)this.color.setHex(W.color);if(W.roughness!==void 0)this.roughness=W.roughness;if(W.metalness!==void 0)this.metalness=W.metalness;if(W.sheen!==void 0)this.sheen=W.sheen;if(W.sheenColor!==void 0)this.sheenColor=new n().setHex(W.sheenColor);if(W.sheenRoughness!==void 0)this.sheenRoughness=W.sheenRoughness;if(W.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(W.emissive);if(W.specular!==void 0&&this.specular!==void 0)this.specular.setHex(W.specular);if(W.specularIntensity!==void 0)this.specularIntensity=W.specularIntensity;if(W.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(W.specularColor);if(W.shininess!==void 0)this.shininess=W.shininess;if(W.clearcoat!==void 0)this.clearcoat=W.clearcoat;if(W.clearcoatRoughness!==void 0)this.clearcoatRoughness=W.clearcoatRoughness;if(W.diffuseRoughness!==void 0)this.diffuseRoughness=W.diffuseRoughness;if(W.dispersion!==void 0)this.dispersion=W.dispersion;if(W.retroreflectivity!==void 0)this.retroreflectivity=W.retroreflectivity;if(W.iridescence!==void 0)this.iridescence=W.iridescence;if(W.iridescenceIOR!==void 0)this.iridescenceIOR=W.iridescenceIOR;if(W.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=W.iridescenceThicknessRange;if(W.transmission!==void 0)this.transmission=W.transmission;if(W.thickness!==void 0)this.thickness=W.thickness;if(W.attenuationDistance!==void 0)this.attenuationDistance=W.attenuationDistance;if(W.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(W.attenuationColor);if(W.anisotropy!==void 0)this.anisotropy=W.anisotropy;if(W.anisotropyRotation!==void 0)this.anisotropyRotation=W.anisotropyRotation;if(W.fog!==void 0)this.fog=W.fog;if(W.flatShading!==void 0)this.flatShading=W.flatShading;if(W.blending!==void 0)this.blending=W.blending;if(W.combine!==void 0)this.combine=W.combine;if(W.side!==void 0)this.side=W.side;if(W.shadowSide!==void 0)this.shadowSide=W.shadowSide;if(W.opacity!==void 0)this.opacity=W.opacity;if(W.transparent!==void 0)this.transparent=W.transparent;if(W.alphaTest!==void 0)this.alphaTest=W.alphaTest;if(W.alphaHash!==void 0)this.alphaHash=W.alphaHash;if(W.depthFunc!==void 0)this.depthFunc=W.depthFunc;if(W.depthTest!==void 0)this.depthTest=W.depthTest;if(W.depthWrite!==void 0)this.depthWrite=W.depthWrite;if(W.colorWrite!==void 0)this.colorWrite=W.colorWrite;if(W.clippingPlanes!==void 0)this.clippingPlanes=W.clippingPlanes.map((Y)=>new li().fromJSON(Y));if(W.clipIntersection!==void 0)this.clipIntersection=W.clipIntersection;if(W.clipShadows!==void 0)this.clipShadows=W.clipShadows;if(W.depthPacking!==void 0)this.depthPacking=W.depthPacking;if(W.blendSrc!==void 0)this.blendSrc=W.blendSrc;if(W.blendDst!==void 0)this.blendDst=W.blendDst;if(W.blendEquation!==void 0)this.blendEquation=W.blendEquation;if(W.blendSrcAlpha!==void 0)this.blendSrcAlpha=W.blendSrcAlpha;if(W.blendDstAlpha!==void 0)this.blendDstAlpha=W.blendDstAlpha;if(W.blendEquationAlpha!==void 0)this.blendEquationAlpha=W.blendEquationAlpha;if(W.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(W.blendColor);if(W.blendAlpha!==void 0)this.blendAlpha=W.blendAlpha;if(W.stencilWriteMask!==void 0)this.stencilWriteMask=W.stencilWriteMask;if(W.stencilFunc!==void 0)this.stencilFunc=W.stencilFunc;if(W.stencilRef!==void 0)this.stencilRef=W.stencilRef;if(W.stencilFuncMask!==void 0)this.stencilFuncMask=W.stencilFuncMask;if(W.stencilFail!==void 0)this.stencilFail=W.stencilFail;if(W.stencilZFail!==void 0)this.stencilZFail=W.stencilZFail;if(W.stencilZPass!==void 0)this.stencilZPass=W.stencilZPass;if(W.stencilWrite!==void 0)this.stencilWrite=W.stencilWrite;if(W.wireframe!==void 0)this.wireframe=W.wireframe;if(W.wireframeLinewidth!==void 0)this.wireframeLinewidth=W.wireframeLinewidth;if(W.wireframeLinecap!==void 0)this.wireframeLinecap=W.wireframeLinecap;if(W.wireframeLinejoin!==void 0)this.wireframeLinejoin=W.wireframeLinejoin;if(W.rotation!==void 0)this.rotation=W.rotation;if(W.linewidth!==void 0)this.linewidth=W.linewidth;if(W.linecap!==void 0)this.linecap=W.linecap;if(W.linejoin!==void 0)this.linejoin=W.linejoin;if(W.dashSize!==void 0)this.dashSize=W.dashSize;if(W.gapSize!==void 0)this.gapSize=W.gapSize;if(W.scale!==void 0)this.scale=W.scale;if(W.polygonOffset!==void 0)this.polygonOffset=W.polygonOffset;if(W.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=W.polygonOffsetFactor;if(W.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=W.polygonOffsetUnits;if(W.dithering!==void 0)this.dithering=W.dithering;if(W.alphaToCoverage!==void 0)this.alphaToCoverage=W.alphaToCoverage;if(W.premultipliedAlpha!==void 0)this.premultipliedAlpha=W.premultipliedAlpha;if(W.forceSinglePass!==void 0)this.forceSinglePass=W.forceSinglePass;if(W.allowOverride!==void 0)this.allowOverride=W.allowOverride;if(W.visible!==void 0)this.visible=W.visible;if(W.toneMapped!==void 0)this.toneMapped=W.toneMapped;if(W.userData!==void 0)this.userData=W.userData;if(W.vertexColors!==void 0)if(typeof W.vertexColors==="number")this.vertexColors=W.vertexColors>0;else this.vertexColors=W.vertexColors;if(W.size!==void 0)this.size=W.size;if(W.sizeAttenuation!==void 0)this.sizeAttenuation=W.sizeAttenuation;if(W.map!==void 0)this.map=q[W.map]||null;if(W.matcap!==void 0)this.matcap=q[W.matcap]||null;if(W.alphaMap!==void 0)this.alphaMap=q[W.alphaMap]||null;if(W.bumpMap!==void 0)this.bumpMap=q[W.bumpMap]||null;if(W.bumpScale!==void 0)this.bumpScale=W.bumpScale;if(W.normalMap!==void 0)this.normalMap=q[W.normalMap]||null;if(W.normalMapType!==void 0)this.normalMapType=W.normalMapType;if(W.normalScale!==void 0){let Y=W.normalScale;if(Array.isArray(Y)===!1)Y=[Y,Y];this.normalScale=new e().fromArray(Y)}if(W.displacementMap!==void 0)this.displacementMap=q[W.displacementMap]||null;if(W.displacementScale!==void 0)this.displacementScale=W.displacementScale;if(W.displacementBias!==void 0)this.displacementBias=W.displacementBias;if(W.roughnessMap!==void 0)this.roughnessMap=q[W.roughnessMap]||null;if(W.metalnessMap!==void 0)this.metalnessMap=q[W.metalnessMap]||null;if(W.emissiveMap!==void 0)this.emissiveMap=q[W.emissiveMap]||null;if(W.emissiveIntensity!==void 0)this.emissiveIntensity=W.emissiveIntensity;if(W.specularMap!==void 0)this.specularMap=q[W.specularMap]||null;if(W.specularIntensityMap!==void 0)this.specularIntensityMap=q[W.specularIntensityMap]||null;if(W.specularColorMap!==void 0)this.specularColorMap=q[W.specularColorMap]||null;if(W.envMap!==void 0)this.envMap=q[W.envMap]||null;if(W.envMapRotation!==void 0)this.envMapRotation.fromArray(W.envMapRotation);if(W.envMapIntensity!==void 0)this.envMapIntensity=W.envMapIntensity;if(W.reflectivity!==void 0)this.reflectivity=W.reflectivity;if(W.refractionRatio!==void 0)this.refractionRatio=W.refractionRatio;if(W.lightMap!==void 0)this.lightMap=q[W.lightMap]||null;if(W.lightMapIntensity!==void 0)this.lightMapIntensity=W.lightMapIntensity;if(W.aoMap!==void 0)this.aoMap=q[W.aoMap]||null;if(W.aoMapIntensity!==void 0)this.aoMapIntensity=W.aoMapIntensity;if(W.gradientMap!==void 0)this.gradientMap=q[W.gradientMap]||null;if(W.clearcoatMap!==void 0)this.clearcoatMap=q[W.clearcoatMap]||null;if(W.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=q[W.clearcoatRoughnessMap]||null;if(W.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=q[W.clearcoatNormalMap]||null;if(W.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new e().fromArray(W.clearcoatNormalScale);if(W.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=q[W.diffuseRoughnessMap]||null;if(W.iridescenceMap!==void 0)this.iridescenceMap=q[W.iridescenceMap]||null;if(W.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=q[W.iridescenceThicknessMap]||null;if(W.transmissionMap!==void 0)this.transmissionMap=q[W.transmissionMap]||null;if(W.thicknessMap!==void 0)this.thicknessMap=q[W.thicknessMap]||null;if(W.anisotropyMap!==void 0)this.anisotropyMap=q[W.anisotropyMap]||null;if(W.sheenColorMap!==void 0)this.sheenColorMap=q[W.sheenColorMap]||null;if(W.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=q[W.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(W){this.name=W.name,this.blending=W.blending,this.side=W.side,this.vertexColors=W.vertexColors,this.opacity=W.opacity,this.transparent=W.transparent,this.blendSrc=W.blendSrc,this.blendDst=W.blendDst,this.blendEquation=W.blendEquation,this.blendSrcAlpha=W.blendSrcAlpha,this.blendDstAlpha=W.blendDstAlpha,this.blendEquationAlpha=W.blendEquationAlpha,this.blendColor.copy(W.blendColor),this.blendAlpha=W.blendAlpha,this.depthFunc=W.depthFunc,this.depthTest=W.depthTest,this.depthWrite=W.depthWrite,this.stencilWriteMask=W.stencilWriteMask,this.stencilFunc=W.stencilFunc,this.stencilRef=W.stencilRef,this.stencilFuncMask=W.stencilFuncMask,this.stencilFail=W.stencilFail,this.stencilZFail=W.stencilZFail,this.stencilZPass=W.stencilZPass,this.stencilWrite=W.stencilWrite;let q=W.clippingPlanes,Y=null;if(q!==null){let Z=q.length;Y=Array(Z);for(let tt=0;tt!==Z;++tt)Y[tt]=q[tt].clone()}return this.clippingPlanes=Y,this.clipIntersection=W.clipIntersection,this.clipShadows=W.clipShadows,this.shadowSide=W.shadowSide,this.colorWrite=W.colorWrite,this.precision=W.precision,this.polygonOffset=W.polygonOffset,this.polygonOffsetFactor=W.polygonOffsetFactor,this.polygonOffsetUnits=W.polygonOffsetUnits,this.dithering=W.dithering,this.alphaTest=W.alphaTest,this.alphaHash=W.alphaHash,this.alphaToCoverage=W.alphaToCoverage,this.premultipliedAlpha=W.premultipliedAlpha,this.forceSinglePass=W.forceSinglePass,this.allowOverride=W.allowOverride,this.visible=W.visible,this.toneMapped=W.toneMapped,this.userData=JSON.parse(JSON.stringify(W.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(W){if(W===!0)this.version++}}var vi=new t,Ua=new t,hr=new t,ur=new t;class Zs{constructor(W=new t,q=new t(0,0,-1)){this.origin=W,this.direction=q}set(W,q){return this.origin.copy(W),this.direction.copy(q),this}copy(W){return this.origin.copy(W.origin),this.direction.copy(W.direction),this}at(W,q){return q.copy(this.origin).addScaledVector(this.direction,W)}lookAt(W){return this.direction.copy(W).sub(this.origin).normalize(),this}recast(W){return this.origin.copy(this.at(W,vi)),this}closestPointToPoint(W,q){q.subVectors(W,this.origin);let Y=q.dot(this.direction);if(Y<0)return q.copy(this.origin);return q.copy(this.origin).addScaledVector(this.direction,Y)}distanceToPoint(W){return Math.sqrt(this.distanceSqToPoint(W))}distanceSqToPoint(W){let q=vi.subVectors(W,this.origin).dot(this.direction);if(q<0)return this.origin.distanceToSquared(W);return vi.copy(this.origin).addScaledVector(this.direction,q),vi.distanceToSquared(W)}distanceSqToSegment(W,q,Y,Z){Ua.copy(W).add(q).multiplyScalar(0.5),hr.copy(q).sub(W).normalize(),ur.copy(this.origin).sub(Ua);let tt=W.distanceTo(q)*0.5,at=-this.direction.dot(hr),Mt=ur.dot(this.direction),bt=-ur.dot(hr),Et=ur.lengthSq(),At=Math.abs(1-at*at),Ct,It,Rt,Lt;if(At>0)if(Ct=at*bt-Mt,It=at*Mt-bt,Lt=tt*At,Ct>=0)if(It>=-Lt)if(It<=Lt){let Dt=1/At;Ct*=Dt,It*=Dt,Rt=Ct*(Ct+at*It+2*Mt)+It*(at*Ct+It+2*bt)+Et}else It=tt,Ct=Math.max(0,-(at*It+Mt)),Rt=-Ct*Ct+It*(It+2*bt)+Et;else It=-tt,Ct=Math.max(0,-(at*It+Mt)),Rt=-Ct*Ct+It*(It+2*bt)+Et;else if(It<=-Lt)Ct=Math.max(0,-(-at*tt+Mt)),It=Ct>0?-tt:Math.min(Math.max(-tt,-bt),tt),Rt=-Ct*Ct+It*(It+2*bt)+Et;else if(It<=Lt)Ct=0,It=Math.min(Math.max(-tt,-bt),tt),Rt=It*(It+2*bt)+Et;else Ct=Math.max(0,-(at*tt+Mt)),It=Ct>0?tt:Math.min(Math.max(-tt,-bt),tt),Rt=-Ct*Ct+It*(It+2*bt)+Et;else It=at>0?-tt:tt,Ct=Math.max(0,-(at*It+Mt)),Rt=-Ct*Ct+It*(It+2*bt)+Et;if(Y)Y.copy(this.origin).addScaledVector(this.direction,Ct);if(Z)Z.copy(Ua).addScaledVector(hr,It);return Rt}intersectSphere(W,q){if(W.radius<0)return null;vi.subVectors(W.center,this.origin);let Y=vi.dot(this.direction),Z=vi.dot(vi)-Y*Y,tt=W.radius*W.radius;if(Z>tt)return null;let at=Math.sqrt(tt-Z),Mt=Y-at,bt=Y+at;if(bt<0)return null;if(Mt<0)return this.at(bt,q);return this.at(Mt,q)}intersectsSphere(W){if(W.radius<0)return!1;return this.distanceSqToPoint(W.center)<=W.radius*W.radius}distanceToPlane(W){let q=W.normal.dot(this.direction);if(q===0){if(W.distanceToPoint(this.origin)===0)return 0;return null}let Y=-(this.origin.dot(W.normal)+W.constant)/q;return Y>=0?Y:null}intersectPlane(W,q){let Y=this.distanceToPlane(W);if(Y===null)return null;return this.at(Y,q)}intersectsPlane(W){let q=W.distanceToPoint(this.origin);if(q===0)return!0;if(W.normal.dot(this.direction)*q<0)return!0;return!1}intersectBox(W,q){let Y,Z,tt,at,Mt,bt,Et=1/this.direction.x,At=1/this.direction.y,Ct=1/this.direction.z,It=this.origin;if(Et>=0)Y=(W.min.x-It.x)*Et,Z=(W.max.x-It.x)*Et;else Y=(W.max.x-It.x)*Et,Z=(W.min.x-It.x)*Et;if(At>=0)tt=(W.min.y-It.y)*At,at=(W.max.y-It.y)*At;else tt=(W.max.y-It.y)*At,at=(W.min.y-It.y)*At;if(Y>at||tt>Z)return null;if(tt>Y||isNaN(Y))Y=tt;if(at<Z||isNaN(Z))Z=at;if(Ct>=0)Mt=(W.min.z-It.z)*Ct,bt=(W.max.z-It.z)*Ct;else Mt=(W.max.z-It.z)*Ct,bt=(W.min.z-It.z)*Ct;if(Y>bt||Mt>Z)return null;if(Mt>Y||Y!==Y)Y=Mt;if(bt<Z||Z!==Z)Z=bt;if(Z<0)return null;return this.at(Y>=0?Y:Z,q)}intersectsBox(W){return this.intersectBox(W,vi)!==null}intersectTriangle(W,q,Y,Z,tt){let at=this.origin,Mt=this.direction,{x:bt,y:Et,z:At}=Mt,Ct=W.x-at.x,It=W.y-at.y,Rt=W.z-at.z,Lt=q.x-at.x,Dt=q.y-at.y,Bt=q.z-at.z,Pt=Y.x-at.x,wt=Y.y-at.y,Gt=Y.z-at.z,Wt=Math.abs(bt),zt=Math.abs(Et),Ht=Math.abs(At),qt,Nt,Ot,Yt,ie,Zt,ee,he,Xt,ae,le,te;if(Wt>=zt&&Wt>=Ht)if(Ot=bt,Zt=Ct,Xt=Lt,te=Pt,bt>=0)qt=Et,Nt=At,Yt=It,ie=Rt,ee=Dt,he=Bt,ae=wt,le=Gt;else qt=At,Nt=Et,Yt=Rt,ie=It,ee=Bt,he=Dt,ae=Gt,le=wt;else if(zt>=Ht)if(Ot=Et,Zt=It,Xt=Dt,te=wt,Et>=0)qt=At,Nt=bt,Yt=Rt,ie=Ct,ee=Bt,he=Lt,ae=Gt,le=Pt;else qt=bt,Nt=At,Yt=Ct,ie=Rt,ee=Lt,he=Bt,ae=Pt,le=Gt;else if(Ot=At,Zt=Rt,Xt=Bt,te=Gt,At>=0)qt=bt,Nt=Et,Yt=Ct,ie=It,ee=Lt,he=Dt,ae=Pt,le=wt;else qt=Et,Nt=bt,Yt=It,ie=Ct,ee=Dt,he=Lt,ae=wt,le=Pt;if(Ot===0)return null;let Me=qt/Ot,se=Nt/Ot,de=1/Ot,ye=Yt-Me*Zt,Oe=ie-se*Zt,fe=ee-Me*Xt,xe=he-se*Xt,ze=ae-Me*te,Ye=le-se*te,Ze=ze*xe-Ye*fe,Ne=ye*Ye-Oe*ze,fn=fe*Oe-xe*ye;if(Z){if(Ze<0||Ne<0||fn<0)return null}else if((Ze<0||Ne<0||fn<0)&&(Ze>0||Ne>0||fn>0))return null;let rn=Ze+Ne+fn;if(rn===0)return null;let $e=de*(Ze*Zt+Ne*Xt+fn*te);if(rn>0?$e<0:$e>0)return null;return this.at($e/rn,tt)}applyMatrix4(W){return this.origin.applyMatrix4(W),this.direction.transformDirection(W),this}equals(W){return W.origin.equals(this.origin)&&W.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class y extends ui{constructor(W){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new n(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(W)}copy(W){return super.copy(W),this.color.copy(W.color),this.map=W.map,this.lightMap=W.lightMap,this.lightMapIntensity=W.lightMapIntensity,this.aoMap=W.aoMap,this.aoMapIntensity=W.aoMapIntensity,this.specularMap=W.specularMap,this.alphaMap=W.alphaMap,this.envMap=W.envMap,this.envMapRotation.copy(W.envMapRotation),this.combine=W.combine,this.reflectivity=W.reflectivity,this.refractionRatio=W.refractionRatio,this.wireframe=W.wireframe,this.wireframeLinewidth=W.wireframeLinewidth,this.wireframeLinecap=W.wireframeLinecap,this.wireframeLinejoin=W.wireframeLinejoin,this.fog=W.fog,this}}var Vl=new o,Bi=new Zs,dr=new L,Xl=new t,fr=new t,pr=new t,mr=new t,Fa=new t,gr=new t,ql=new t,_r=new t;class i extends h{constructor(W=new l,q=new y){super();this.isMesh=!0,this.type="Mesh",this.geometry=W,this.material=q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(W,q){if(super.copy(W,q),W.morphTargetInfluences!==void 0)this.morphTargetInfluences=W.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(W.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},W.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(W.material)?W.material.slice():W.material,this.geometry=W.geometry,this}updateMorphTargets(){let q=this.geometry.morphAttributes,Y=Object.keys(q);if(Y.length>0){let Z=q[Y[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let tt=0,at=Z.length;tt<at;tt++){let Mt=Z[tt].name||String(tt);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Mt]=tt}}}}getVertexPosition(W,q){let Y=this.geometry,Z=Y.attributes.position,tt=Y.morphAttributes.position,at=Y.morphTargetsRelative;q.fromBufferAttribute(Z,W);let Mt=this.morphTargetInfluences;if(tt&&Mt){gr.set(0,0,0);for(let bt=0,Et=tt.length;bt<Et;bt++){let At=Mt[bt],Ct=tt[bt];if(At===0)continue;if(Fa.fromBufferAttribute(Ct,W),at)gr.addScaledVector(Fa,At);else gr.addScaledVector(Fa.sub(q),At)}q.add(gr)}return q}intersectsFrustum(W){return W.intersectsObject(this)}raycast(W,q){let Y=this.geometry,Z=this.material,tt=this.matrixWorld;if(Z===void 0)return;if(Y.boundingSphere===null)Y.computeBoundingSphere();if(dr.copy(Y.boundingSphere),dr.applyMatrix4(tt),Bi.copy(W.ray).recast(W.near),dr.containsPoint(Bi.origin)===!1){if(Bi.intersectSphere(dr,Xl)===null)return;if(Bi.origin.distanceToSquared(Xl)>(W.far-W.near)**2)return}if(Vl.copy(tt).invert(),Bi.copy(W.ray).applyMatrix4(Vl),Y.boundingBox!==null){if(Bi.intersectsBox(Y.boundingBox)===!1)return}this._computeIntersections(W,q,Bi)}_computeIntersections(W,q,Y){let Z,tt=this.geometry,at=this.material,Mt=tt.index,bt=tt.attributes.position,Et=tt.attributes.uv,At=tt.attributes.uv1,Ct=tt.attributes.normal,{groups:It,drawRange:Rt}=tt;if(Mt!==null)if(Array.isArray(at))for(let Lt=0,Dt=It.length;Lt<Dt;Lt++){let Bt=It[Lt],Pt=at[Bt.materialIndex],wt=Math.max(Bt.start,Rt.start),Gt=Math.min(Mt.count,Math.min(Bt.start+Bt.count,Rt.start+Rt.count));for(let Wt=wt,zt=Gt;Wt<zt;Wt+=3){let Ht=Mt.getX(Wt),qt=Mt.getX(Wt+1),Nt=Mt.getX(Wt+2);if(Z=xr(this,Pt,W,Y,Et,At,Ct,Ht,qt,Nt),Z)Z.faceIndex=Math.floor(Wt/3),Z.face.materialIndex=Bt.materialIndex,q.push(Z)}}else{let Lt=Math.max(0,Rt.start),Dt=Math.min(Mt.count,Rt.start+Rt.count);for(let Bt=Lt,Pt=Dt;Bt<Pt;Bt+=3){let wt=Mt.getX(Bt),Gt=Mt.getX(Bt+1),Wt=Mt.getX(Bt+2);if(Z=xr(this,at,W,Y,Et,At,Ct,wt,Gt,Wt),Z)Z.faceIndex=Math.floor(Bt/3),q.push(Z)}}else if(bt!==void 0)if(Array.isArray(at))for(let Lt=0,Dt=It.length;Lt<Dt;Lt++){let Bt=It[Lt],Pt=at[Bt.materialIndex],wt=Math.max(Bt.start,Rt.start),Gt=Math.min(bt.count,Math.min(Bt.start+Bt.count,Rt.start+Rt.count));for(let Wt=wt,zt=Gt;Wt<zt;Wt+=3){let Ht=Wt,qt=Wt+1,Nt=Wt+2;if(Z=xr(this,Pt,W,Y,Et,At,Ct,Ht,qt,Nt),Z)Z.faceIndex=Math.floor(Wt/3),Z.face.materialIndex=Bt.materialIndex,q.push(Z)}}else{let Lt=Math.max(0,Rt.start),Dt=Math.min(bt.count,Rt.start+Rt.count);for(let Bt=Lt,Pt=Dt;Bt<Pt;Bt+=3){let wt=Bt,Gt=Bt+1,Wt=Bt+2;if(Z=xr(this,at,W,Y,Et,At,Ct,wt,Gt,Wt),Z)Z.faceIndex=Math.floor(Bt/3),q.push(Z)}}}}function Bu(W,q,Y,Z,tt,at,Mt,bt){let Et;if(q.side===1)Et=Z.intersectTriangle(Mt,at,tt,!0,bt);else Et=Z.intersectTriangle(tt,at,Mt,q.side===0,bt);if(Et===null)return null;_r.copy(bt),_r.applyMatrix4(W.matrixWorld);let At=Y.ray.origin.distanceTo(_r);if(At<Y.near||At>Y.far)return null;return{distance:At,point:_r.clone(),object:W}}function xr(W,q,Y,Z,tt,at,Mt,bt,Et,At){W.getVertexPosition(bt,fr),W.getVertexPosition(Et,pr),W.getVertexPosition(At,mr);let Ct=Bu(W,q,Y,Z,fr,pr,mr,ql);if(Ct){let It=new t;if(Jn.getBarycoord(ql,fr,pr,mr,It),tt)Ct.uv=Jn.getInterpolatedAttribute(tt,bt,Et,At,It,new e);if(at)Ct.uv1=Jn.getInterpolatedAttribute(at,bt,Et,At,It,new e);if(Mt){if(Ct.normal=Jn.getInterpolatedAttribute(Mt,bt,Et,At,It,new t),Ct.normal.dot(Z.direction)>0)Ct.normal.multiplyScalar(-1)}let Rt={a:bt,b:Et,c:At,normal:new t,materialIndex:0};Jn.getNormal(fr,pr,mr,Rt.normal),Ct.face=Rt,Ct.barycoord=It}return Ct}class Kr extends Bn{constructor(W=null,q=1,Y=1,Z,tt,at,Mt,bt,Et=1003,At=1003,Ct,It){super(null,at,Mt,bt,Et,At,Z,tt,Ct,It);this.isDataTexture=!0,this.image={data:W,width:q,height:Y},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr extends E{constructor(W,q,Y,Z=1){super(W,q,Y);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(W){return super.copy(W),this.meshPerAttribute=W.meshPerAttribute,this}toJSON(){let W=super.toJSON();return W.meshPerAttribute=this.meshPerAttribute,W.isInstancedBufferAttribute=!0,W}}var os=new o,Yl=new o,vr=[],Zl=new T,zu=new o,Is=new i,Ps=new L;class V extends i{constructor(W,q,Y){super(W,q);this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(Y*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Y,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Y;Z++)this.setMatrixAt(Z,zu)}computeBoundingBox(){let W=this.geometry,q=this.count;if(this.boundingBox===null)this.boundingBox=new T;if(W.boundingBox===null)W.computeBoundingBox();this.boundingBox.makeEmpty();for(let Y=0;Y<q;Y++)this.getMatrixAt(Y,os),Zl.copy(W.boundingBox).applyMatrix4(os),this.boundingBox.union(Zl)}computeBoundingSphere(){let W=this.geometry,q=this.count;if(this.boundingSphere===null)this.boundingSphere=new L;if(W.boundingSphere===null)W.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Y=0;Y<q;Y++)this.getMatrixAt(Y,os),Ps.copy(W.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ps)}copy(W,q){return super.copy(W,q),this.instanceMatrix.copy(W.instanceMatrix),this.morphTexture=W.morphTexture!==null?W.morphTexture.clone():null,this.instanceColor=W.instanceColor!==null?W.instanceColor.clone():null,this.count=W.count,this.boundingBox=W.boundingBox!==null?W.boundingBox.clone():null,this.boundingSphere=W.boundingSphere!==null?W.boundingSphere.clone():null,this}getColorAt(W,q){if(this.instanceColor===null)return q.setRGB(1,1,1);else return q.fromArray(this.instanceColor.array,W*3)}getMatrixAt(W,q){return q.fromArray(this.instanceMatrix.array,W*16)}getMorphAt(W,q){let Y=q.morphTargetInfluences,Z=this.morphTexture.source.data.data,tt=Y.length+1,at=W*tt+1;for(let Mt=0;Mt<Y.length;Mt++)Y[Mt]=Z[at+Mt]}raycast(W,q){let Y=this.matrixWorld,Z=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ps.copy(this.boundingSphere),Ps.applyMatrix4(Y),W.ray.intersectsSphere(Ps)===!1)return;for(let tt=0;tt<Z;tt++){this.getMatrixAt(tt,os),Yl.multiplyMatrices(Y,os),Is.matrixWorld=Yl,Is.raycast(W,vr);for(let at=0,Mt=vr.length;at<Mt;at++){let bt=vr[at];bt.instanceId=tt,bt.object=this,q.push(bt)}vr.length=0}}setColorAt(W,q){if(this.instanceColor===null)this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return q.toArray(this.instanceColor.array,W*3),this}setMatrixAt(W,q){return q.toArray(this.instanceMatrix.array,W*16),this}setMorphAt(W,q){let Y=q.morphTargetInfluences,Z=Y.length+1;if(this.morphTexture===null)this.morphTexture=new Kr(new Float32Array(Z*this.count),Z,this.count,1028,1015);let tt=this.morphTexture.source.data.data,at=0;for(let Et=0;Et<Y.length;Et++)at+=Y[Et];let Mt=this.geometry.morphTargetsRelative?1:1-at,bt=Z*W;return tt[bt]=Mt,tt.set(Y,bt+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var zi=new L,Gu=new e(0.5,0.5),yr=new t;class ki{constructor(W=new li,q=new li,Y=new li,Z=new li,tt=new li,at=new li){this.planes=[W,q,Y,Z,tt,at]}set(W,q,Y,Z,tt,at){let Mt=this.planes;return Mt[0].copy(W),Mt[1].copy(q),Mt[2].copy(Y),Mt[3].copy(Z),Mt[4].copy(tt),Mt[5].copy(at),this}copy(W){let q=this.planes;for(let Y=0;Y<6;Y++)q[Y].copy(W.planes[Y]);return this}setFromProjectionMatrix(W,q=2000,Y=!1){let Z=this.planes,tt=W.elements,at=tt[0],Mt=tt[1],bt=tt[2],Et=tt[3],At=tt[4],Ct=tt[5],It=tt[6],Rt=tt[7],Lt=tt[8],Dt=tt[9],Bt=tt[10],Pt=tt[11],wt=tt[12],Gt=tt[13],Wt=tt[14],zt=tt[15];if(Z[0].setComponents(Et-at,Rt-At,Pt-Lt,zt-wt).normalize(),Z[1].setComponents(Et+at,Rt+At,Pt+Lt,zt+wt).normalize(),Z[2].setComponents(Et+Mt,Rt+Ct,Pt+Dt,zt+Gt).normalize(),Z[3].setComponents(Et-Mt,Rt-Ct,Pt-Dt,zt-Gt).normalize(),Y)Z[4].setComponents(bt,It,Bt,Wt).normalize(),Z[5].setComponents(Et-bt,Rt-It,Pt-Bt,zt-Wt).normalize();else if(Z[4].setComponents(Et-bt,Rt-It,Pt-Bt,zt-Wt).normalize(),q===2000)Z[5].setComponents(Et+bt,Rt+It,Pt+Bt,zt+Wt).normalize();else if(q===2001)Z[5].setComponents(bt,It,Bt,Wt).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+q);return this}intersectsObject(W){if(W.boundingSphere!==void 0){if(W.boundingSphere===null)W.computeBoundingSphere();zi.copy(W.boundingSphere).applyMatrix4(W.matrixWorld)}else{let q=W.geometry;if(q.boundingSphere===null)q.computeBoundingSphere();zi.copy(q.boundingSphere).applyMatrix4(W.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(W){zi.center.set(0,0,0);let q=Gu.distanceTo(W.center);return zi.radius=0.7071067811865476+q,zi.applyMatrix4(W.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(W){let q=this.planes,Y=W.center,Z=-W.radius;for(let tt=0;tt<6;tt++)if(q[tt].distanceToPoint(Y)<Z)return!1;return!0}intersectsBox(W){let q=this.planes;for(let Y=0;Y<6;Y++){let Z=q[Y];if(yr.x=Z.normal.x>0?W.max.x:W.min.x,yr.y=Z.normal.y>0?W.max.y:W.min.y,yr.z=Z.normal.z>0?W.max.z:W.min.z,Z.distanceToPoint(yr)<0)return!1}return!0}containsPoint(W){let q=this.planes;for(let Y=0;Y<6;Y++)if(q[Y].distanceToPoint(W)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Jl=new o;class Qr{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(W){let q=W.cameras,Y=this._frustums;for(let Z=0;Z<q.length;Z++){let tt=q[Z];if(Jl.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),Y[Z]===void 0)Y[Z]=new ki;Y[Z].setFromProjectionMatrix(Jl,tt.coordinateSystem,tt.reversedDepth)}return this._count=q.length,this}intersectsObject(W){let q=this._frustums;for(let Y=0;Y<this._count;Y++)if(q[Y].intersectsObject(W))return!0;return!1}intersectsSprite(W){let q=this._frustums;for(let Y=0;Y<this._count;Y++)if(q[Y].intersectsSprite(W))return!0;return!1}intersectsSphere(W){let q=this._frustums;for(let Y=0;Y<this._count;Y++)if(q[Y].intersectsSphere(W))return!0;return!1}intersectsBox(W){let q=this._frustums;for(let Y=0;Y<this._count;Y++)if(q[Y].intersectsBox(W))return!0;return!1}containsPoint(W){let q=this._frustums;for(let Y=0;Y<this._count;Y++)if(q[Y].containsPoint(W))return!0;return!1}copy(W){this.coordinateSystem=W.coordinateSystem;let q=this._frustums,Y=W._frustums;for(let Z=0;Z<W._count;Z++){if(q[Z]===void 0)q[Z]=new ki;q[Z].copy(Y[Z])}return this._count=W._count,this}clone(){return new Qr().copy(this)}}class et extends ui{constructor(W){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new n(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(W)}copy(W){return super.copy(W),this.color.copy(W.color),this.map=W.map,this.linewidth=W.linewidth,this.linecap=W.linecap,this.linejoin=W.linejoin,this.fog=W.fog,this}}var Ur=new t,Fr=new t,$l=new o,Ls=new Zs,Sr=new L,Oa=new t,Kl=new t;class Yo extends h{constructor(W=new l,q=new et){super();this.isLine=!0,this.type="Line",this.geometry=W,this.material=q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(W,q){return super.copy(W,q),this.material=Array.isArray(W.material)?W.material.slice():W.material,this.geometry=W.geometry,this}computeLineDistances(){let W=this.geometry;if(W.index===null){let q=W.attributes.position,Y=[0];for(let Z=1,tt=q.count;Z<tt;Z++)Ur.fromBufferAttribute(q,Z-1),Fr.fromBufferAttribute(q,Z),Y[Z]=Y[Z-1],Y[Z]+=Ur.distanceTo(Fr);W.setAttribute("lineDistance",new s(Y,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(W){return W.intersectsObject(this)}raycast(W,q){let Y=this.geometry,Z=this.matrixWorld,tt=W.params.Line.threshold,at=Y.drawRange;if(Y.boundingSphere===null)Y.computeBoundingSphere();if(Sr.copy(Y.boundingSphere),Sr.applyMatrix4(Z),Sr.radius+=tt,W.ray.intersectsSphere(Sr)===!1)return;$l.copy(Z).invert(),Ls.copy(W.ray).applyMatrix4($l);let Mt=tt/((this.scale.x+this.scale.y+this.scale.z)/3),bt=Mt*Mt,Et=this.isLineSegments?2:1,At=Y.index,It=Y.attributes.position;if(At!==null){let Rt=Math.max(0,at.start),Lt=Math.min(At.count,at.start+at.count);for(let Dt=Rt,Bt=Lt-1;Dt<Bt;Dt+=Et){let Pt=At.getX(Dt),wt=At.getX(Dt+1),Gt=Mr(this,W,Ls,bt,Pt,wt,Dt);if(Gt)q.push(Gt)}if(this.isLineLoop){let Dt=At.getX(Lt-1),Bt=At.getX(Rt),Pt=Mr(this,W,Ls,bt,Dt,Bt,Lt-1);if(Pt)q.push(Pt)}}else{let Rt=Math.max(0,at.start),Lt=Math.min(It.count,at.start+at.count);for(let Dt=Rt,Bt=Lt-1;Dt<Bt;Dt+=Et){let Pt=Mr(this,W,Ls,bt,Dt,Dt+1,Dt);if(Pt)q.push(Pt)}if(this.isLineLoop){let Dt=Mr(this,W,Ls,bt,Lt-1,Rt,Lt-1);if(Dt)q.push(Dt)}}}updateMorphTargets(){let q=this.geometry.morphAttributes,Y=Object.keys(q);if(Y.length>0){let Z=q[Y[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let tt=0,at=Z.length;tt<at;tt++){let Mt=Z[tt].name||String(tt);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Mt]=tt}}}}}function Mr(W,q,Y,Z,tt,at,Mt){let bt=W.geometry.attributes.position;if(Ur.fromBufferAttribute(bt,tt),Fr.fromBufferAttribute(bt,at),Y.distanceSqToSegment(Ur,Fr,Oa,Kl)>Z)return;Oa.applyMatrix4(W.matrixWorld);let At=q.ray.origin.distanceTo(Oa);if(At<q.near||At>q.far)return;return{distance:At,point:Kl.clone().applyMatrix4(W.matrixWorld),index:Mt,face:null,faceIndex:null,barycoord:null,object:W}}var Ql=new t,jl=new t;class K extends Yo{constructor(W,q){super(W,q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let W=this.geometry;if(W.index===null){let q=W.attributes.position,Y=[];for(let Z=0,tt=q.count;Z<tt;Z+=2)Ql.fromBufferAttribute(q,Z),jl.fromBufferAttribute(q,Z+1),Y[Z]=Z===0?0:Y[Z-1],Y[Z+1]=Y[Z]+Ql.distanceTo(jl);W.setAttribute("lineDistance",new s(Y,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zo extends ui{constructor(W){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new n(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(W)}copy(W){return super.copy(W),this.color.copy(W.color),this.map=W.map,this.alphaMap=W.alphaMap,this.size=W.size,this.sizeAttenuation=W.sizeAttenuation,this.fog=W.fog,this}}var tc=new o,Va=new Zs,br=new L,Er=new t;class mt extends h{constructor(W=new l,q=new Zo){super();this.isPoints=!0,this.type="Points",this.geometry=W,this.material=q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(W,q){return super.copy(W,q),this.material=Array.isArray(W.material)?W.material.slice():W.material,this.geometry=W.geometry,this}intersectsFrustum(W){return W.intersectsObject(this)}raycast(W,q){let Y=this.geometry,Z=this.matrixWorld,tt=W.params.Points.threshold,at=Y.drawRange;if(Y.boundingSphere===null)Y.computeBoundingSphere();if(br.copy(Y.boundingSphere),br.applyMatrix4(Z),br.radius+=tt,W.ray.intersectsSphere(br)===!1)return;tc.copy(Z).invert(),Va.copy(W.ray).applyMatrix4(tc);let Mt=tt/((this.scale.x+this.scale.y+this.scale.z)/3),bt=Mt*Mt,Et=Y.index,Ct=Y.attributes.position;if(Et!==null){let It=Math.max(0,at.start),Rt=Math.min(Et.count,at.start+at.count);for(let Lt=It,Dt=Rt;Lt<Dt;Lt++){let Bt=Et.getX(Lt);Er.fromBufferAttribute(Ct,Bt),ec(Er,Bt,bt,Z,W,q,this)}}else{let It=Math.max(0,at.start),Rt=Math.min(Ct.count,at.start+at.count);for(let Lt=It,Dt=Rt;Lt<Dt;Lt++)Er.fromBufferAttribute(Ct,Lt),ec(Er,Lt,bt,Z,W,q,this)}}updateMorphTargets(){let q=this.geometry.morphAttributes,Y=Object.keys(q);if(Y.length>0){let Z=q[Y[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let tt=0,at=Z.length;tt<at;tt++){let Mt=Z[tt].name||String(tt);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Mt]=tt}}}}}function ec(W,q,Y,Z,tt,at,Mt){let bt=Va.distanceSqToPoint(W);if(bt<Y){let Et=new t;Va.closestPointToPoint(W,Et),Et.applyMatrix4(Z);let At=tt.ray.origin.distanceTo(Et);if(At<tt.near||At>tt.far)return;at.push({distance:At,distanceToRay:Math.sqrt(bt),point:Et,index:q,face:null,faceIndex:null,barycoord:null,object:Mt})}}class jr extends Bn{constructor(W=[],q=301,Y,Z,tt,at,Mt,bt,Et,At){super(W,q,Y,Z,tt,at,Mt,bt,Et,At);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(W){this.image=W}}class Q extends Bn{constructor(W,q,Y,Z,tt,at,Mt,bt,Et){super(W,q,Y,Z,tt,at,Mt,bt,Et);this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi extends Bn{constructor(W,q,Y=1014,Z,tt,at,Mt=1003,bt=1003,Et,At=1026,Ct=1){if(At!==1026&&At!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let It={width:W,height:q,depth:Ct};super(It,Z,tt,at,Mt,bt,At,Y,Et);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(W){return super.copy(W),this.source=new qs(Object.assign({},W.image)),this.compareFunction=W.compareFunction,this}toJSON(W){let q=super.toJSON(W);return q.compareFunction=this.compareFunction,q}}class ta extends qi{constructor(W,q=1014,Y=301,Z,tt,at=1003,Mt=1003,bt,Et=1026){let At={width:W,height:W,depth:1},Ct=[At,At,At,At,At,At];super(W,W,q,Y,Z,tt,at,Mt,bt,Et);this.image=Ct,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(W){this.image=W}}class ea extends Bn{constructor(W=null){super();this.sourceTexture=W,this.isExternalTexture=!0}copy(W){return super.copy(W),this.sourceTexture=W.sourceTexture,this}}class S extends l{constructor(W=1,q=1,Y=1,Z=1,tt=1,at=1){super();this.type="BoxGeometry",this.parameters={width:W,height:q,depth:Y,widthSegments:Z,heightSegments:tt,depthSegments:at};let Mt=this;Z=Math.floor(Z),tt=Math.floor(tt),at=Math.floor(at);let bt=[],Et=[],At=[],Ct=[],It=0,Rt=0;Lt("z","y","x",-1,-1,Y,q,W,at,tt,0),Lt("z","y","x",1,-1,Y,q,-W,at,tt,1),Lt("x","z","y",1,1,W,Y,q,Z,at,2),Lt("x","z","y",1,-1,W,Y,-q,Z,at,3),Lt("x","y","z",1,-1,W,q,Y,Z,tt,4),Lt("x","y","z",-1,-1,W,q,-Y,Z,tt,5),this.setIndex(bt),this.setAttribute("position",new s(Et,3)),this.setAttribute("normal",new s(At,3)),this.setAttribute("uv",new s(Ct,2));function Lt(Dt,Bt,Pt,wt,Gt,Wt,zt,Ht,qt,Nt,Ot){let Yt=Wt/qt,ie=zt/Nt,Zt=Wt/2,ee=zt/2,he=Ht/2,Xt=qt+1,ae=Nt+1,le=0,te=0,Me=new t;for(let se=0;se<ae;se++){let de=se*ie-ee;for(let ye=0;ye<Xt;ye++){let Oe=ye*Yt-Zt;Me[Dt]=Oe*wt,Me[Bt]=de*Gt,Me[Pt]=he,Et.push(Me.x,Me.y,Me.z),Me[Dt]=0,Me[Bt]=0,Me[Pt]=Ht>0?1:-1,At.push(Me.x,Me.y,Me.z),Ct.push(ye/qt),Ct.push(1-se/Nt),le+=1}}for(let se=0;se<Nt;se++)for(let de=0;de<qt;de++){let ye=It+de+Xt*se,Oe=It+de+Xt*(se+1),fe=It+(de+1)+Xt*(se+1),xe=It+(de+1)+Xt*se;bt.push(ye,Oe,xe),bt.push(Oe,fe,xe),te+=6}Mt.addGroup(Rt,te,Ot),Rt+=te,It+=le}}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}static fromJSON(W){return new S(W.width,W.height,W.depth,W.widthSegments,W.heightSegments,W.depthSegments)}}class nt extends l{constructor(W=1,q=1,Y=4,Z=8,tt=1){super();this.type="CapsuleGeometry",this.parameters={radius:W,height:q,capSegments:Y,radialSegments:Z,heightSegments:tt},q=Math.max(0,q),Y=Math.max(1,Math.floor(Y)),Z=Math.max(3,Math.floor(Z)),tt=Math.max(1,Math.floor(tt));let at=[],Mt=[],bt=[],Et=[],At=q/2,Ct=Math.PI/2*W,It=q,Rt=2*Ct+It,Lt=Y*2+tt,Dt=Z+1,Bt=new t,Pt=new t;for(let wt=0;wt<=Lt;wt++){let Gt=0,Wt=0,zt=0,Ht=0;if(wt<=Y){let Ot=wt/Y,Yt=Ot*Math.PI/2;Wt=-At-W*Math.cos(Yt),zt=W*Math.sin(Yt),Ht=-W*Math.cos(Yt),Gt=Ot*Ct}else if(wt<=Y+tt){let Ot=(wt-Y)/tt;Wt=-At+Ot*q,zt=W,Ht=0,Gt=Ct+Ot*It}else{let Ot=(wt-Y-tt)/Y,Yt=Ot*Math.PI/2;Wt=At+W*Math.sin(Yt),zt=W*Math.cos(Yt),Ht=W*Math.sin(Yt),Gt=Ct+It+Ot*Ct}let qt=Math.max(0,Math.min(1,Gt/Rt)),Nt=0;if(wt===0)Nt=0.5/Z;else if(wt===Lt)Nt=-0.5/Z;for(let Ot=0;Ot<=Z;Ot++){let Yt=Ot/Z,ie=Yt*Math.PI*2,Zt=Math.sin(ie),ee=Math.cos(ie);Pt.x=-zt*ee,Pt.y=Wt,Pt.z=zt*Zt,Mt.push(Pt.x,Pt.y,Pt.z),Bt.set(-zt*ee,Ht,zt*Zt),Bt.normalize(),bt.push(Bt.x,Bt.y,Bt.z),Et.push(Yt+Nt,qt)}if(wt>0){let Ot=(wt-1)*Dt;for(let Yt=0;Yt<Z;Yt++){let ie=Ot+Yt,Zt=Ot+Yt+1,ee=wt*Dt+Yt,he=wt*Dt+Yt+1;at.push(ie,Zt,ee),at.push(Zt,he,ee)}}}this.setIndex(at),this.setAttribute("position",new s(Mt,3)),this.setAttribute("normal",new s(bt,3)),this.setAttribute("uv",new s(Et,2))}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}static fromJSON(W){return new nt(W.radius,W.height,W.capSegments,W.radialSegments,W.heightSegments)}}class M extends l{constructor(W=1,q=1,Y=1,Z=32,tt=1,at=!1,Mt=0,bt=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:W,radiusBottom:q,height:Y,radialSegments:Z,heightSegments:tt,openEnded:at,thetaStart:Mt,thetaLength:bt};let Et=this;Z=Math.floor(Z),tt=Math.floor(tt);let At=[],Ct=[],It=[],Rt=[],Lt=0,Dt=[],Bt=Y/2,Pt=0;if(wt(),at===!1){if(W>0)Gt(!0);if(q>0)Gt(!1)}this.setIndex(At),this.setAttribute("position",new s(Ct,3)),this.setAttribute("normal",new s(It,3)),this.setAttribute("uv",new s(Rt,2));function wt(){let Wt=new t,zt=new t,Ht=0,qt=(q-W)/Y;for(let Nt=0;Nt<=tt;Nt++){let Ot=[],Yt=Nt/tt,ie=Yt*(q-W)+W;for(let Zt=0;Zt<=Z;Zt++){let ee=Zt/Z,he=ee*bt+Mt,Xt=Math.sin(he),ae=Math.cos(he);zt.x=ie*Xt,zt.y=-Yt*Y+Bt,zt.z=ie*ae,Ct.push(zt.x,zt.y,zt.z),Wt.set(Xt,qt,ae).normalize(),It.push(Wt.x,Wt.y,Wt.z),Rt.push(ee,1-Yt),Ot.push(Lt++)}Dt.push(Ot)}for(let Nt=0;Nt<Z;Nt++)for(let Ot=0;Ot<tt;Ot++){let Yt=Dt[Ot][Nt],ie=Dt[Ot+1][Nt],Zt=Dt[Ot+1][Nt+1],ee=Dt[Ot][Nt+1];if(W>0||Ot!==0)At.push(Yt,ie,ee),Ht+=3;if(q>0||Ot!==tt-1)At.push(ie,Zt,ee),Ht+=3}Et.addGroup(Pt,Ht,0),Pt+=Ht}function Gt(Wt){let zt=Lt,Ht=new e,qt=new t,Nt=0,Ot=Wt===!0?W:q,Yt=Wt===!0?1:-1;for(let Zt=1;Zt<=Z;Zt++)Ct.push(0,Bt*Yt,0),It.push(0,Yt,0),Rt.push(0.5,0.5),Lt++;let ie=Lt;for(let Zt=0;Zt<=Z;Zt++){let he=Zt/Z*bt+Mt,Xt=Math.cos(he),ae=Math.sin(he);qt.x=Ot*ae,qt.y=Bt*Yt,qt.z=Ot*Xt,Ct.push(qt.x,qt.y,qt.z),It.push(0,Yt,0),Ht.x=Xt*0.5+0.5,Ht.y=ae*0.5*Yt+0.5,Rt.push(Ht.x,Ht.y),Lt++}for(let Zt=0;Zt<Z;Zt++){let ee=zt+Zt,he=ie+Zt;if(Wt===!0)At.push(he,he+1,ee);else At.push(he+1,he,ee);Nt+=3}Et.addGroup(Pt,Nt,Wt===!0?1:2),Pt+=Nt}}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}static fromJSON(W){return new M(W.radiusTop,W.radiusBottom,W.height,W.radialSegments,W.heightSegments,W.openEnded,W.thetaStart,W.thetaLength)}}class gt extends M{constructor(W=1,q=1,Y=32,Z=1,tt=!1,at=0,Mt=Math.PI*2){super(0,W,q,Y,Z,tt,at,Mt);this.type="ConeGeometry",this.parameters={radius:W,height:q,radialSegments:Y,heightSegments:Z,openEnded:tt,thetaStart:at,thetaLength:Mt}}static fromJSON(W){return new gt(W.radius,W.height,W.radialSegments,W.heightSegments,W.openEnded,W.thetaStart,W.thetaLength)}}var Ar=new t,Tr=new t,Ba=new t,wr=new Jn;class it extends l{constructor(W=null,q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:W,thresholdAngle:q},W!==null){let Z=Math.pow(10,4),tt=Math.cos(Lr*q),at=W.getIndex(),Mt=W.getAttribute("position"),bt=at?at.count:Mt.count,Et=[0,0,0],At=["a","b","c"],Ct=[,,,],It=new Map,Rt=[];for(let Lt=0;Lt<bt;Lt+=3){if(at)Et[0]=at.getX(Lt),Et[1]=at.getX(Lt+1),Et[2]=at.getX(Lt+2);else Et[0]=Lt,Et[1]=Lt+1,Et[2]=Lt+2;let{a:Dt,b:Bt,c:Pt}=wr;if(Dt.fromBufferAttribute(Mt,Et[0]),Bt.fromBufferAttribute(Mt,Et[1]),Pt.fromBufferAttribute(Mt,Et[2]),wr.getNormal(Ba),Ct[0]=`${Math.round(Dt.x*Z)},${Math.round(Dt.y*Z)},${Math.round(Dt.z*Z)}`,Ct[1]=`${Math.round(Bt.x*Z)},${Math.round(Bt.y*Z)},${Math.round(Bt.z*Z)}`,Ct[2]=`${Math.round(Pt.x*Z)},${Math.round(Pt.y*Z)},${Math.round(Pt.z*Z)}`,Ct[0]===Ct[1]||Ct[1]===Ct[2]||Ct[2]===Ct[0])continue;for(let wt=0;wt<3;wt++){let Gt=(wt+1)%3,Wt=Ct[wt],zt=Ct[Gt],Ht=wr[At[wt]],qt=wr[At[Gt]],Nt=`${Wt}_${zt}`,Ot=`${zt}_${Wt}`,Yt=It.get(Ot);if(Yt){if(Ba.dot(Yt.normal)<=tt)Rt.push(Ht.x,Ht.y,Ht.z),Rt.push(qt.x,qt.y,qt.z);It.set(Ot,null)}else if(!It.has(Nt))It.set(Nt,{index0:Et[wt],index1:Et[Gt],normal:Ba.clone()})}}for(let Lt of It.values())if(Lt){let{index0:Dt,index1:Bt}=Lt;Ar.fromBufferAttribute(Mt,Dt),Tr.fromBufferAttribute(Mt,Bt),Rt.push(Ar.x,Ar.y,Ar.z),Rt.push(Tr.x,Tr.y,Tr.z)}this.setAttribute("position",new s(Rt,3))}}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(W,q){let Y=this.getUtoTmapping(W);return this.getPoint(Y,q)}getPoints(W=5){let q=[];for(let Y=0;Y<=W;Y++)q.push(this.getPoint(Y/W));return q}getSpacedPoints(W=5){let q=[];for(let Y=0;Y<=W;Y++)q.push(this.getPointAt(Y/W));return q}getLength(){let W=this.getLengths();return W[W.length-1]}getLengths(W=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===W+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let q=[],Y,Z=this.getPoint(0),tt=0;q.push(0);for(let at=1;at<=W;at++)Y=this.getPoint(at/W),tt+=Y.distanceTo(Z),q.push(tt),Z=Y;return this.cacheArcLengths=q,q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(W,q=null){let Y=this.getLengths(),Z=0,tt=Y.length,at;if(q)at=q;else at=W*Y[tt-1];let Mt=0,bt=tt-1,Et;while(Mt<=bt)if(Z=Math.floor(Mt+(bt-Mt)/2),Et=Y[Z]-at,Et<0)Mt=Z+1;else if(Et>0)bt=Z-1;else{bt=Z;break}if(Z=bt,Y[Z]===at)return Z/(tt-1);let At=Y[Z],It=Y[Z+1]-At,Rt=(at-At)/It;return(Z+Rt)/(tt-1)}getTangent(W,q){let Z=W-0.0001,tt=W+0.0001;if(Z<0)Z=0;if(tt>1)tt=1;let at=this.getPoint(Z),Mt=this.getPoint(tt),bt=q||(at.isVector2?new e:new t);return bt.copy(Mt).sub(at).normalize(),bt}getTangentAt(W,q){let Y=this.getUtoTmapping(W);return this.getTangent(Y,q)}computeFrenetFrames(W,q=!1){let Y=new t,Z=[],tt=[],at=[],Mt=new t,bt=new o;for(let Rt=0;Rt<=W;Rt++){let Lt=Rt/W;Z[Rt]=this.getTangentAt(Lt,new t)}tt[0]=new t,at[0]=new t;let Et=Number.MAX_VALUE,At=Math.abs(Z[0].x),Ct=Math.abs(Z[0].y),It=Math.abs(Z[0].z);if(At<=Et)Et=At,Y.set(1,0,0);if(Ct<=Et)Et=Ct,Y.set(0,1,0);if(It<=Et)Y.set(0,0,1);Mt.crossVectors(Z[0],Y).normalize(),tt[0].crossVectors(Z[0],Mt),at[0].crossVectors(Z[0],tt[0]);for(let Rt=1;Rt<=W;Rt++){if(tt[Rt]=tt[Rt-1].clone(),at[Rt]=at[Rt-1].clone(),Mt.crossVectors(Z[Rt-1],Z[Rt]),Mt.length()>Number.EPSILON){Mt.normalize();let Lt=Math.acos(cn(Z[Rt-1].dot(Z[Rt]),-1,1));tt[Rt].applyMatrix4(bt.makeRotationAxis(Mt,Lt))}at[Rt].crossVectors(Z[Rt],tt[Rt])}if(q===!0){let Rt=Math.acos(cn(tt[0].dot(tt[W]),-1,1));if(Rt/=W,Z[0].dot(Mt.crossVectors(tt[0],tt[W]))>0)Rt=-Rt;for(let Lt=1;Lt<=W;Lt++)tt[Lt].applyMatrix4(bt.makeRotationAxis(Z[Lt],Rt*Lt)),at[Lt].crossVectors(Z[Lt],tt[Lt])}return{tangents:Z,normals:tt,binormals:at}}clone(){return new this.constructor().copy(this)}copy(W){return this.arcLengthDivisions=W.arcLengthDivisions,this}toJSON(){let W={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return W.arcLengthDivisions=this.arcLengthDivisions,W.type=this.type,W}fromJSON(W){return this.arcLengthDivisions=W.arcLengthDivisions,this}}class Js extends Qn{constructor(W=0,q=0,Y=1,Z=1,tt=0,at=Math.PI*2,Mt=!1,bt=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=W,this.aY=q,this.xRadius=Y,this.yRadius=Z,this.aStartAngle=tt,this.aEndAngle=at,this.aClockwise=Mt,this.aRotation=bt}getPoint(W,q=new e){let Y=q,Z=Math.PI*2,tt=this.aEndAngle-this.aStartAngle,at=Math.abs(tt)<Number.EPSILON;while(tt<0)tt+=Z;while(tt>Z)tt-=Z;if(tt<Number.EPSILON)if(at)tt=0;else tt=Z;if(this.aClockwise===!0&&!at)if(tt===Z)tt=-Z;else tt=tt-Z;let Mt=this.aStartAngle+W*tt,bt=this.aX+this.xRadius*Math.cos(Mt),Et=this.aY+this.yRadius*Math.sin(Mt);if(this.aRotation!==0){let At=Math.cos(this.aRotation),Ct=Math.sin(this.aRotation),It=bt-this.aX,Rt=Et-this.aY;bt=It*At-Rt*Ct+this.aX,Et=It*Ct+Rt*At+this.aY}return Y.set(bt,Et)}copy(W){return super.copy(W),this.aX=W.aX,this.aY=W.aY,this.xRadius=W.xRadius,this.yRadius=W.yRadius,this.aStartAngle=W.aStartAngle,this.aEndAngle=W.aEndAngle,this.aClockwise=W.aClockwise,this.aRotation=W.aRotation,this}toJSON(){let W=super.toJSON();return W.aX=this.aX,W.aY=this.aY,W.xRadius=this.xRadius,W.yRadius=this.yRadius,W.aStartAngle=this.aStartAngle,W.aEndAngle=this.aEndAngle,W.aClockwise=this.aClockwise,W.aRotation=this.aRotation,W}fromJSON(W){return super.fromJSON(W),this.aX=W.aX,this.aY=W.aY,this.xRadius=W.xRadius,this.yRadius=W.yRadius,this.aStartAngle=W.aStartAngle,this.aEndAngle=W.aEndAngle,this.aClockwise=W.aClockwise,this.aRotation=W.aRotation,this}}class Jo extends Js{constructor(W,q,Y,Z,tt,at){super(W,q,Y,Y,Z,tt,at);this.isArcCurve=!0,this.type="ArcCurve"}}function $o(){let W=0,q=0,Y=0,Z=0;function tt(at,Mt,bt,Et){W=at,q=bt,Y=-3*at+3*Mt-2*bt-Et,Z=2*at-2*Mt+bt+Et}return{initCatmullRom:function(at,Mt,bt,Et,At){tt(Mt,bt,At*(bt-at),At*(Et-Mt))},initNonuniformCatmullRom:function(at,Mt,bt,Et,At,Ct,It){let Rt=(Mt-at)/At-(bt-at)/(At+Ct)+(bt-Mt)/Ct,Lt=(bt-Mt)/Ct-(Et-Mt)/(Ct+It)+(Et-bt)/It;Rt*=Ct,Lt*=Ct,tt(Mt,bt,Rt,Lt)},calc:function(at){let Mt=at*at,bt=Mt*at;return W+q*at+Y*Mt+Z*bt}}}var nc=new t,ic=new t,za=new $o,Ga=new $o,ka=new $o;class U extends Qn{constructor(W=[],q=!1,Y="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=W,this.closed=q,this.curveType=Y,this.tension=Z}getPoint(W,q=new t){let Y=q,Z=this.points,tt=Z.length,at=(tt-(this.closed?0:1))*W,Mt=Math.floor(at),bt=at-Mt;if(this.closed)Mt+=Mt>0?0:(Math.floor(Math.abs(Mt)/tt)+1)*tt;else if(bt===0&&Mt===tt-1)Mt=tt-2,bt=1;let Et,At;if(this.closed||Mt>0)Et=Z[(Mt-1)%tt];else ic.subVectors(Z[0],Z[1]).add(Z[0]),Et=ic;let Ct=Z[Mt%tt],It=Z[(Mt+1)%tt];if(this.closed||Mt+2<tt)At=Z[(Mt+2)%tt];else nc.subVectors(Z[tt-1],Z[tt-2]).add(Z[tt-1]),At=nc;if(this.curveType==="centripetal"||this.curveType==="chordal"){let Rt=this.curveType==="chordal"?0.5:0.25,Lt=Math.pow(Et.distanceToSquared(Ct),Rt),Dt=Math.pow(Ct.distanceToSquared(It),Rt),Bt=Math.pow(It.distanceToSquared(At),Rt);if(Dt<0.0001)Dt=1;if(Lt<0.0001)Lt=Dt;if(Bt<0.0001)Bt=Dt;za.initNonuniformCatmullRom(Et.x,Ct.x,It.x,At.x,Lt,Dt,Bt),Ga.initNonuniformCatmullRom(Et.y,Ct.y,It.y,At.y,Lt,Dt,Bt),ka.initNonuniformCatmullRom(Et.z,Ct.z,It.z,At.z,Lt,Dt,Bt)}else if(this.curveType==="catmullrom")za.initCatmullRom(Et.x,Ct.x,It.x,At.x,this.tension),Ga.initCatmullRom(Et.y,Ct.y,It.y,At.y,this.tension),ka.initCatmullRom(Et.z,Ct.z,It.z,At.z,this.tension);return Y.set(za.calc(bt),Ga.calc(bt),ka.calc(bt)),Y}copy(W){super.copy(W),this.points=[];for(let q=0,Y=W.points.length;q<Y;q++){let Z=W.points[q];this.points.push(Z.clone())}return this.closed=W.closed,this.curveType=W.curveType,this.tension=W.tension,this}toJSON(){let W=super.toJSON();W.points=[];for(let q=0,Y=this.points.length;q<Y;q++){let Z=this.points[q];W.points.push(Z.toArray())}return W.closed=this.closed,W.curveType=this.curveType,W.tension=this.tension,W}fromJSON(W){super.fromJSON(W),this.points=[];for(let q=0,Y=W.points.length;q<Y;q++){let Z=W.points[q];this.points.push(new t().fromArray(Z))}return this.closed=W.closed,this.curveType=W.curveType,this.tension=W.tension,this}}function sc(W,q,Y,Z,tt){let at=(Z-q)*0.5,Mt=(tt-Y)*0.5,bt=W*W,Et=W*bt;return(2*Y-2*Z+at+Mt)*Et+(-3*Y+3*Z-2*at-Mt)*bt+at*W+Y}function ku(W,q){let Y=1-W;return Y*Y*q}function Hu(W,q){return 2*(1-W)*W*q}function Wu(W,q){return W*W*q}function Us(W,q,Y,Z){return ku(W,q)+Hu(W,Y)+Wu(W,Z)}function Vu(W,q){let Y=1-W;return Y*Y*Y*q}function Xu(W,q){let Y=1-W;return 3*Y*Y*W*q}function qu(W,q){return 3*(1-W)*W*W*q}function Yu(W,q){return W*W*W*q}function Fs(W,q,Y,Z,tt){return Vu(W,q)+Xu(W,Y)+qu(W,Z)+Yu(W,tt)}class na extends Qn{constructor(W=new e,q=new e,Y=new e,Z=new e){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=W,this.v1=q,this.v2=Y,this.v3=Z}getPoint(W,q=new e){let Y=q,Z=this.v0,tt=this.v1,at=this.v2,Mt=this.v3;return Y.set(Fs(W,Z.x,tt.x,at.x,Mt.x),Fs(W,Z.y,tt.y,at.y,Mt.y)),Y}copy(W){return super.copy(W),this.v0.copy(W.v0),this.v1.copy(W.v1),this.v2.copy(W.v2),this.v3.copy(W.v3),this}toJSON(){let W=super.toJSON();return W.v0=this.v0.toArray(),W.v1=this.v1.toArray(),W.v2=this.v2.toArray(),W.v3=this.v3.toArray(),W}fromJSON(W){return super.fromJSON(W),this.v0.fromArray(W.v0),this.v1.fromArray(W.v1),this.v2.fromArray(W.v2),this.v3.fromArray(W.v3),this}}class Ko extends Qn{constructor(W=new t,q=new t,Y=new t,Z=new t){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=W,this.v1=q,this.v2=Y,this.v3=Z}getPoint(W,q=new t){let Y=q,Z=this.v0,tt=this.v1,at=this.v2,Mt=this.v3;return Y.set(Fs(W,Z.x,tt.x,at.x,Mt.x),Fs(W,Z.y,tt.y,at.y,Mt.y),Fs(W,Z.z,tt.z,at.z,Mt.z)),Y}copy(W){return super.copy(W),this.v0.copy(W.v0),this.v1.copy(W.v1),this.v2.copy(W.v2),this.v3.copy(W.v3),this}toJSON(){let W=super.toJSON();return W.v0=this.v0.toArray(),W.v1=this.v1.toArray(),W.v2=this.v2.toArray(),W.v3=this.v3.toArray(),W}fromJSON(W){return super.fromJSON(W),this.v0.fromArray(W.v0),this.v1.fromArray(W.v1),this.v2.fromArray(W.v2),this.v3.fromArray(W.v3),this}}class ia extends Qn{constructor(W=new e,q=new e){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=W,this.v2=q}getPoint(W,q=new e){let Y=q;if(W===1)Y.copy(this.v2);else Y.copy(this.v2).sub(this.v1),Y.multiplyScalar(W).add(this.v1);return Y}getPointAt(W,q){return this.getPoint(W,q)}getTangent(W,q=new e){return q.subVectors(this.v2,this.v1).normalize()}getTangentAt(W,q){return this.getTangent(W,q)}copy(W){return super.copy(W),this.v1.copy(W.v1),this.v2.copy(W.v2),this}toJSON(){let W=super.toJSON();return W.v1=this.v1.toArray(),W.v2=this.v2.toArray(),W}fromJSON(W){return super.fromJSON(W),this.v1.fromArray(W.v1),this.v2.fromArray(W.v2),this}}class Qo extends Qn{constructor(W=new t,q=new t){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=W,this.v2=q}getPoint(W,q=new t){let Y=q;if(W===1)Y.copy(this.v2);else Y.copy(this.v2).sub(this.v1),Y.multiplyScalar(W).add(this.v1);return Y}getPointAt(W,q){return this.getPoint(W,q)}getTangent(W,q=new t){return q.subVectors(this.v2,this.v1).normalize()}getTangentAt(W,q){return this.getTangent(W,q)}copy(W){return super.copy(W),this.v1.copy(W.v1),this.v2.copy(W.v2),this}toJSON(){let W=super.toJSON();return W.v1=this.v1.toArray(),W.v2=this.v2.toArray(),W}fromJSON(W){return super.fromJSON(W),this.v1.fromArray(W.v1),this.v2.fromArray(W.v2),this}}class sa extends Qn{constructor(W=new e,q=new e,Y=new e){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=W,this.v1=q,this.v2=Y}getPoint(W,q=new e){let Y=q,Z=this.v0,tt=this.v1,at=this.v2;return Y.set(Us(W,Z.x,tt.x,at.x),Us(W,Z.y,tt.y,at.y)),Y}copy(W){return super.copy(W),this.v0.copy(W.v0),this.v1.copy(W.v1),this.v2.copy(W.v2),this}toJSON(){let W=super.toJSON();return W.v0=this.v0.toArray(),W.v1=this.v1.toArray(),W.v2=this.v2.toArray(),W}fromJSON(W){return super.fromJSON(W),this.v0.fromArray(W.v0),this.v1.fromArray(W.v1),this.v2.fromArray(W.v2),this}}class jo extends Qn{constructor(W=new t,q=new t,Y=new t){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=W,this.v1=q,this.v2=Y}getPoint(W,q=new t){let Y=q,Z=this.v0,tt=this.v1,at=this.v2;return Y.set(Us(W,Z.x,tt.x,at.x),Us(W,Z.y,tt.y,at.y),Us(W,Z.z,tt.z,at.z)),Y}copy(W){return super.copy(W),this.v0.copy(W.v0),this.v1.copy(W.v1),this.v2.copy(W.v2),this}toJSON(){let W=super.toJSON();return W.v0=this.v0.toArray(),W.v1=this.v1.toArray(),W.v2=this.v2.toArray(),W}fromJSON(W){return super.fromJSON(W),this.v0.fromArray(W.v0),this.v1.fromArray(W.v1),this.v2.fromArray(W.v2),this}}class ra extends Qn{constructor(W=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=W}getPoint(W,q=new e){let Y=q,Z=this.points,tt=(Z.length-1)*W,at=Math.floor(tt),Mt=tt-at,bt=Z[at===0?at:at-1],Et=Z[at],At=Z[at>Z.length-2?Z.length-1:at+1],Ct=Z[at>Z.length-3?Z.length-1:at+2];return Y.set(sc(Mt,bt.x,Et.x,At.x,Ct.x),sc(Mt,bt.y,Et.y,At.y,Ct.y)),Y}copy(W){super.copy(W),this.points=[];for(let q=0,Y=W.points.length;q<Y;q++){let Z=W.points[q];this.points.push(Z.clone())}return this}toJSON(){let W=super.toJSON();W.points=[];for(let q=0,Y=this.points.length;q<Y;q++){let Z=this.points[q];W.points.push(Z.toArray())}return W}fromJSON(W){super.fromJSON(W),this.points=[];for(let q=0,Y=W.points.length;q<Y;q++){let Z=W.points[q];this.points.push(new e().fromArray(Z))}return this}}var Xa=Object.freeze({__proto__:null,ArcCurve:Jo,CatmullRomCurve3:U,CubicBezierCurve:na,CubicBezierCurve3:Ko,EllipseCurve:Js,LineCurve:ia,LineCurve3:Qo,QuadraticBezierCurve:sa,QuadraticBezierCurve3:jo,SplineCurve:ra});class tl extends Qn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(W){this.curves.push(W)}closePath(){let W=this.curves[0].getPoint(0),q=this.curves[this.curves.length-1].getPoint(1);if(!W.equals(q)){let Y=W.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[Y](q,W))}return this}getPoint(W,q){let Y=W*this.getLength(),Z=this.getCurveLengths(),tt=0;while(tt<Z.length){if(Z[tt]>=Y){let at=Z[tt]-Y,Mt=this.curves[tt],bt=Mt.getLength(),Et=bt===0?0:1-at/bt;return Mt.getPointAt(Et,q)}tt++}return null}getLength(){let W=this.getCurveLengths();return W[W.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let W=[],q=0;for(let Y=0,Z=this.curves.length;Y<Z;Y++)q+=this.curves[Y].getLength(),W.push(q);return this.cacheLengths=W,W}getSpacedPoints(W=40){let q=[];for(let Y=0;Y<=W;Y++)q.push(this.getPoint(Y/W));if(this.autoClose)q.push(q[0]);return q}getPoints(W=12){let q=[],Y;for(let Z=0,tt=this.curves;Z<tt.length;Z++){let at=tt[Z],Mt=at.isEllipseCurve?W*2:at.isLineCurve||at.isLineCurve3?1:at.isSplineCurve?W*at.points.length:W,bt=at.getPoints(Mt);for(let Et=0;Et<bt.length;Et++){let At=bt[Et];if(Y&&Y.equals(At))continue;q.push(At),Y=At}}if(this.autoClose&&q.length>1&&!q[q.length-1].equals(q[0]))q.push(q[0]);return q}copy(W){super.copy(W),this.curves=[];for(let q=0,Y=W.curves.length;q<Y;q++){let Z=W.curves[q];this.curves.push(Z.clone())}return this.autoClose=W.autoClose,this}toJSON(){let W=super.toJSON();W.autoClose=this.autoClose,W.curves=[];for(let q=0,Y=this.curves.length;q<Y;q++){let Z=this.curves[q];W.curves.push(Z.toJSON())}return W}fromJSON(W){super.fromJSON(W),this.autoClose=W.autoClose,this.curves=[];for(let q=0,Y=W.curves.length;q<Y;q++){let Z=W.curves[q];this.curves.push(new Xa[Z.type]().fromJSON(Z))}return this}}class j extends tl{constructor(W){super();if(this.type="Path",this.currentPoint=new e,W)this.setFromPoints(W)}setFromPoints(W){this.moveTo(W[0].x,W[0].y);for(let q=1,Y=W.length;q<Y;q++)this.lineTo(W[q].x,W[q].y);return this}moveTo(W,q){return this.currentPoint.set(W,q),this}lineTo(W,q){let Y=new ia(this.currentPoint.clone(),new e(W,q));return this.curves.push(Y),this.currentPoint.set(W,q),this}quadraticCurveTo(W,q,Y,Z){let tt=new sa(this.currentPoint.clone(),new e(W,q),new e(Y,Z));return this.curves.push(tt),this.currentPoint.set(Y,Z),this}bezierCurveTo(W,q,Y,Z,tt,at){let Mt=new na(this.currentPoint.clone(),new e(W,q),new e(Y,Z),new e(tt,at));return this.curves.push(Mt),this.currentPoint.set(tt,at),this}splineThru(W){let q=[this.currentPoint.clone()].concat(W),Y=new ra(q);return this.curves.push(Y),this.currentPoint.copy(W[W.length-1]),this}arc(W,q,Y,Z,tt,at){let Mt=this.currentPoint.x,bt=this.currentPoint.y;return this.absarc(W+Mt,q+bt,Y,Z,tt,at),this}absarc(W,q,Y,Z,tt,at){return this.absellipse(W,q,Y,Y,Z,tt,at),this}ellipse(W,q,Y,Z,tt,at,Mt,bt){let Et=this.currentPoint.x,At=this.currentPoint.y;return this.absellipse(W+Et,q+At,Y,Z,tt,at,Mt,bt),this}absellipse(W,q,Y,Z,tt,at,Mt,bt){let Et=new Js(W,q,Y,Z,tt,at,Mt,bt);if(this.curves.length>0){let Ct=Et.getPoint(0);if(!Ct.equals(this.currentPoint))this.lineTo(Ct.x,Ct.y)}this.curves.push(Et);let At=Et.getPoint(1);return this.currentPoint.copy(At),this}copy(W){return super.copy(W),this.currentPoint.copy(W.currentPoint),this}toJSON(){let W=super.toJSON();return W.currentPoint=this.currentPoint.toArray(),W}fromJSON(W){return super.fromJSON(W),this.currentPoint.fromArray(W.currentPoint),this}}class A extends j{constructor(W){super(W);this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(W){let q=[];for(let Y=0,Z=this.holes.length;Y<Z;Y++)q[Y]=this.holes[Y].getPoints(W);return q}extractPoints(W){return{shape:this.getPoints(W),holes:this.getPointsHoles(W)}}copy(W){super.copy(W),this.holes=[];for(let q=0,Y=W.holes.length;q<Y;q++){let Z=W.holes[q];this.holes.push(Z.clone())}return this}toJSON(){let W=super.toJSON();W.uuid=this.uuid,W.holes=[];for(let q=0,Y=this.holes.length;q<Y;q++){let Z=this.holes[q];W.holes.push(Z.toJSON())}return W}fromJSON(W){super.fromJSON(W),this.uuid=W.uuid,this.holes=[];for(let q=0,Y=W.holes.length;q<Y;q++){let Z=W.holes[q];this.holes.push(new j().fromJSON(Z))}return this}}function Zu(W,q,Y=2){let Z=q&&q.length,tt=Z?q[0]*Y:W.length,at=gh(W,0,tt,Y,!0),Mt=[];if(!at||at.next===at.prev)return Mt;let bt,Et,At;if(Z)at=ju(W,q,at,Y);if(W.length>80*Y){bt=W[0],Et=W[1];let Ct=bt,It=Et;for(let Rt=Y;Rt<tt;Rt+=Y){let Lt=W[Rt],Dt=W[Rt+1];if(Lt<bt)bt=Lt;if(Dt<Et)Et=Dt;if(Lt>Ct)Ct=Lt;if(Dt>It)It=Dt}At=Math.max(Ct-bt,It-Et),At=At!==0?32767/At:0}return Bs(at,Mt,Y,bt,Et,At,0),Mt}function gh(W,q,Y,Z,tt){let at;if(tt===hd(W,q,Y,Z)>0)for(let Mt=q;Mt<Y;Mt+=Z)at=rc(Mt/Z|0,W[Mt],W[Mt+1],at);else for(let Mt=Y-Z;Mt>=q;Mt-=Z)at=rc(Mt/Z|0,W[Mt],W[Mt+1],at);if(at&&fs(at,at.next))Gs(at),at=at.next;return at}function Hi(W,q){if(!W)return W;if(!q)q=W;let Y=W,Z;do if(Z=!1,!Y.steiner&&(fs(Y,Y.next)||An(Y.prev,Y,Y.next)===0)){if(Gs(Y),Y=q=Y.prev,Y===Y.next)break;Z=!0}else Y=Y.next;while(Z||Y!==q);return q}function Bs(W,q,Y,Z,tt,at,Mt){if(!W)return;if(!Mt&&at)sd(W,Z,tt,at);let bt=W;while(W.prev!==W.next){let Et=W.prev,At=W.next;if(at?$u(W,Z,tt,at):Ju(W)){q.push(Et.i,W.i,At.i),Gs(W),W=At.next,bt=At.next;continue}if(W=At,W===bt){if(!Mt)Bs(Hi(W),q,Y,Z,tt,at,1);else if(Mt===1)W=Ku(Hi(W),q),Bs(W,q,Y,Z,tt,at,2);else if(Mt===2)Qu(W,q,Y,Z,tt,at);break}}}function Ju(W){let q=W.prev,Y=W,Z=W.next;if(An(q,Y,Z)>=0)return!1;let tt=q.x,at=Y.x,Mt=Z.x,bt=q.y,Et=Y.y,At=Z.y,Ct=Math.min(tt,at,Mt),It=Math.min(bt,Et,At),Rt=Math.max(tt,at,Mt),Lt=Math.max(bt,Et,At),Dt=Z.next;while(Dt!==q){if(Dt.x>=Ct&&Dt.x<=Rt&&Dt.y>=It&&Dt.y<=Lt&&Ns(tt,bt,at,Et,Mt,At,Dt.x,Dt.y)&&An(Dt.prev,Dt,Dt.next)>=0)return!1;Dt=Dt.next}return!0}function $u(W,q,Y,Z){let tt=W.prev,at=W,Mt=W.next;if(An(tt,at,Mt)>=0)return!1;let bt=tt.x,Et=at.x,At=Mt.x,Ct=tt.y,It=at.y,Rt=Mt.y,Lt=Math.min(bt,Et,At),Dt=Math.min(Ct,It,Rt),Bt=Math.max(bt,Et,At),Pt=Math.max(Ct,It,Rt),wt=qa(Lt,Dt,q,Y,Z),Gt=qa(Bt,Pt,q,Y,Z),{prevZ:Wt,nextZ:zt}=W;while(Wt&&Wt.z>=wt&&zt&&zt.z<=Gt){if(Wt.x>=Lt&&Wt.x<=Bt&&Wt.y>=Dt&&Wt.y<=Pt&&Wt!==tt&&Wt!==Mt&&Ns(bt,Ct,Et,It,At,Rt,Wt.x,Wt.y)&&An(Wt.prev,Wt,Wt.next)>=0)return!1;if(Wt=Wt.prevZ,zt.x>=Lt&&zt.x<=Bt&&zt.y>=Dt&&zt.y<=Pt&&zt!==tt&&zt!==Mt&&Ns(bt,Ct,Et,It,At,Rt,zt.x,zt.y)&&An(zt.prev,zt,zt.next)>=0)return!1;zt=zt.nextZ}while(Wt&&Wt.z>=wt){if(Wt.x>=Lt&&Wt.x<=Bt&&Wt.y>=Dt&&Wt.y<=Pt&&Wt!==tt&&Wt!==Mt&&Ns(bt,Ct,Et,It,At,Rt,Wt.x,Wt.y)&&An(Wt.prev,Wt,Wt.next)>=0)return!1;Wt=Wt.prevZ}while(zt&&zt.z<=Gt){if(zt.x>=Lt&&zt.x<=Bt&&zt.y>=Dt&&zt.y<=Pt&&zt!==tt&&zt!==Mt&&Ns(bt,Ct,Et,It,At,Rt,zt.x,zt.y)&&An(zt.prev,zt,zt.next)>=0)return!1;zt=zt.nextZ}return!0}function Ku(W,q){let Y=W;do{let Z=Y.prev,tt=Y.next.next;if(!fs(Z,tt)&&xh(Z,Y,Y.next,tt)&&zs(Z,tt)&&zs(tt,Z))q.push(Z.i,Y.i,tt.i),Gs(Y),Gs(Y.next),Y=W=tt;Y=Y.next}while(Y!==W);return Hi(Y)}function Qu(W,q,Y,Z,tt,at){let Mt=W;do{let bt=Mt.next.next;while(bt!==Mt.prev){if(Mt.i!==bt.i&&od(Mt,bt)){let Et=vh(Mt,bt);Mt=Hi(Mt,Mt.next),Et=Hi(Et,Et.next),Bs(Mt,q,Y,Z,tt,at,0),Bs(Et,q,Y,Z,tt,at,0);return}bt=bt.next}Mt=Mt.next}while(Mt!==W)}function ju(W,q,Y,Z){let tt=[];for(let at=0,Mt=q.length;at<Mt;at++){let bt=q[at]*Z,Et=at<Mt-1?q[at+1]*Z:W.length,At=gh(W,bt,Et,Z,!1);if(At===At.next)At.steiner=!0;tt.push(ad(At))}tt.sort(td);for(let at=0;at<tt.length;at++)Y=ed(tt[at],Y);return Y}function td(W,q){let Y=W.x-q.x;if(Y===0){if(Y=W.y-q.y,Y===0){let Z=(W.next.y-W.y)/(W.next.x-W.x),tt=(q.next.y-q.y)/(q.next.x-q.x);Y=Z-tt}}return Y}function ed(W,q){let Y=nd(W,q);if(!Y)return q;let Z=vh(Y,W);return Hi(Z,Z.next),Hi(Y,Y.next)}function nd(W,q){let Y=q,{x:Z,y:tt}=W,at=-1/0,Mt;if(fs(W,Y))return Y;do{if(fs(W,Y.next))return Y.next;else if(tt<=Y.y&&tt>=Y.next.y&&Y.next.y!==Y.y){let It=Y.x+(tt-Y.y)*(Y.next.x-Y.x)/(Y.next.y-Y.y);if(It<=Z&&It>at){if(at=It,Mt=Y.x<Y.next.x?Y:Y.next,It===Z)return Mt}}Y=Y.next}while(Y!==q);if(!Mt)return null;let bt=Mt,Et=Mt.x,At=Mt.y,Ct=1/0;Y=Mt;do{if(Z>=Y.x&&Y.x>=Et&&Z!==Y.x&&_h(tt<At?Z:at,tt,Et,At,tt<At?at:Z,tt,Y.x,Y.y)){let It=Math.abs(tt-Y.y)/(Z-Y.x);if(zs(Y,W)&&(It<Ct||It===Ct&&(Y.x>Mt.x||Y.x===Mt.x&&id(Mt,Y))))Mt=Y,Ct=It}Y=Y.next}while(Y!==bt);return Mt}function id(W,q){return An(W.prev,W,q.prev)<0&&An(q.next,W,W.next)<0}function sd(W,q,Y,Z){let tt=W;do{if(tt.z===0)tt.z=qa(tt.x,tt.y,q,Y,Z);tt.prevZ=tt.prev,tt.nextZ=tt.next,tt=tt.next}while(tt!==W);tt.prevZ.nextZ=null,tt.prevZ=null,rd(tt)}function rd(W){let q,Y=1;do{let Z=W,tt;W=null;let at=null;q=0;while(Z){q++;let Mt=Z,bt=0;for(let At=0;At<Y;At++)if(bt++,Mt=Mt.nextZ,!Mt)break;let Et=Y;while(bt>0||Et>0&&Mt){if(bt!==0&&(Et===0||!Mt||Z.z<=Mt.z))tt=Z,Z=Z.nextZ,bt--;else tt=Mt,Mt=Mt.nextZ,Et--;if(at)at.nextZ=tt;else W=tt;tt.prevZ=at,at=tt}Z=Mt}at.nextZ=null,Y*=2}while(q>1);return W}function qa(W,q,Y,Z,tt){return W=(W-Y)*tt|0,q=(q-Z)*tt|0,W=(W|W<<8)&16711935,W=(W|W<<4)&252645135,W=(W|W<<2)&858993459,W=(W|W<<1)&1431655765,q=(q|q<<8)&16711935,q=(q|q<<4)&252645135,q=(q|q<<2)&858993459,q=(q|q<<1)&1431655765,W|q<<1}function ad(W){let q=W,Y=W;do{if(q.x<Y.x||q.x===Y.x&&q.y<Y.y)Y=q;q=q.next}while(q!==W);return Y}function _h(W,q,Y,Z,tt,at,Mt,bt){return(tt-Mt)*(q-bt)>=(W-Mt)*(at-bt)&&(W-Mt)*(Z-bt)>=(Y-Mt)*(q-bt)&&(Y-Mt)*(at-bt)>=(tt-Mt)*(Z-bt)}function Ns(W,q,Y,Z,tt,at,Mt,bt){return!(W===Mt&&q===bt)&&_h(W,q,Y,Z,tt,at,Mt,bt)}function od(W,q){return W.next.i!==q.i&&W.prev.i!==q.i&&!ld(W,q)&&(zs(W,q)&&zs(q,W)&&cd(W,q)&&(An(W.prev,W,q.prev)||An(W,q.prev,q))||fs(W,q)&&An(W.prev,W,W.next)>0&&An(q.prev,q,q.next)>0)}function An(W,q,Y){return(q.y-W.y)*(Y.x-q.x)-(q.x-W.x)*(Y.y-q.y)}function fs(W,q){return W.x===q.x&&W.y===q.y}function xh(W,q,Y,Z){let tt=Cr(An(W,q,Y)),at=Cr(An(W,q,Z)),Mt=Cr(An(Y,Z,W)),bt=Cr(An(Y,Z,q));if(tt!==at&&Mt!==bt)return!0;if(tt===0&&Rr(W,Y,q))return!0;if(at===0&&Rr(W,Z,q))return!0;if(Mt===0&&Rr(Y,W,Z))return!0;if(bt===0&&Rr(Y,q,Z))return!0;return!1}function Rr(W,q,Y){return q.x<=Math.max(W.x,Y.x)&&q.x>=Math.min(W.x,Y.x)&&q.y<=Math.max(W.y,Y.y)&&q.y>=Math.min(W.y,Y.y)}function Cr(W){return W>0?1:W<0?-1:0}function ld(W,q){let Y=W;do{if(Y.i!==W.i&&Y.next.i!==W.i&&Y.i!==q.i&&Y.next.i!==q.i&&xh(Y,Y.next,W,q))return!0;Y=Y.next}while(Y!==W);return!1}function zs(W,q){return An(W.prev,W,W.next)<0?An(W,q,W.next)>=0&&An(W,W.prev,q)>=0:An(W,q,W.prev)<0||An(W,W.next,q)<0}function cd(W,q){let Y=W,Z=!1,tt=(W.x+q.x)/2,at=(W.y+q.y)/2;do{if(Y.y>at!==Y.next.y>at&&Y.next.y!==Y.y&&tt<(Y.next.x-Y.x)*(at-Y.y)/(Y.next.y-Y.y)+Y.x)Z=!Z;Y=Y.next}while(Y!==W);return Z}function vh(W,q){let Y=Ya(W.i,W.x,W.y),Z=Ya(q.i,q.x,q.y),tt=W.next,at=q.prev;return W.next=q,q.prev=W,Y.next=tt,tt.prev=Y,Z.next=Y,Y.prev=Z,at.next=Z,Z.prev=at,Z}function rc(W,q,Y,Z){let tt=Ya(W,q,Y);if(!Z)tt.prev=tt,tt.next=tt;else tt.next=Z.next,tt.prev=Z,Z.next.prev=tt,Z.next=tt;return tt}function Gs(W){if(W.next.prev=W.prev,W.prev.next=W.next,W.prevZ)W.prevZ.nextZ=W.nextZ;if(W.nextZ)W.nextZ.prevZ=W.prevZ}function Ya(W,q,Y){return{i:W,x:q,y:Y,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hd(W,q,Y,Z){let tt=0;for(let at=q,Mt=Y-Z;at<Y;at+=Z)tt+=(W[Mt]-W[at])*(W[at+1]+W[Mt+1]),Mt=at;return tt}class yh{static triangulate(W,q,Y=2){return Zu(W,q,Y)}}class Gi{static area(W){let q=W.length,Y=0;for(let Z=q-1,tt=0;tt<q;Z=tt++)Y+=W[Z].x*W[tt].y-W[tt].x*W[Z].y;return Y*0.5}static isClockWise(W){return Gi.area(W)<0}static triangulateShape(W,q){let Y=[],Z=[],tt=[];ac(W),oc(Y,W);let at=W.length;q.forEach(ac);for(let bt=0;bt<q.length;bt++)Z.push(at),at+=q[bt].length,oc(Y,q[bt]);let Mt=yh.triangulate(Y,Z);for(let bt=0;bt<Mt.length;bt+=3)tt.push(Mt.slice(bt,bt+3));return tt}}function ac(W){let q=W.length;if(q>2&&W[q-1].equals(W[0]))W.pop()}function oc(W,q){for(let Y=0;Y<q.length;Y++)W.push(q[Y].x),W.push(q[Y].y)}class C extends l{constructor(W=new A([new e(0.5,0.5),new e(-0.5,0.5),new e(-0.5,-0.5),new e(0.5,-0.5)]),q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:W,options:q},W=Array.isArray(W)?W:[W];let Y=this,Z=[],tt=[];for(let Mt=0,bt=W.length;Mt<bt;Mt++){let Et=W[Mt];at(Et)}this.setAttribute("position",new s(Z,3)),this.setAttribute("uv",new s(tt,2)),this.computeVertexNormals();function at(Mt){let bt=[],Et=q.curveSegments!==void 0?q.curveSegments:12,At=q.steps!==void 0?q.steps:1,Ct=q.depth!==void 0?q.depth:1,It=q.bevelEnabled!==void 0?q.bevelEnabled:!0,Rt=q.bevelThickness!==void 0?q.bevelThickness:0.2,Lt=q.bevelSize!==void 0?q.bevelSize:Rt-0.1,Dt=q.bevelOffset!==void 0?q.bevelOffset:0,Bt=q.bevelSegments!==void 0?q.bevelSegments:3,Pt=q.extrudePath,wt=q.UVGenerator!==void 0?q.UVGenerator:ud,Gt,Wt=!1,zt,Ht,qt,Nt;if(Pt){Gt=Pt.getSpacedPoints(At),Wt=!0,It=!1;let pe=Pt.isCatmullRomCurve3?Pt.closed:!1;zt=Pt.computeFrenetFrames(At,pe),Ht=new t,qt=new t,Nt=new t}if(!It)Bt=0,Rt=0,Lt=0,Dt=0;let Ot=Mt.extractPoints(Et),{shape:Yt,holes:ie}=Ot;if(!Gi.isClockWise(Yt)){Yt=Yt.reverse();for(let pe=0,Ee=ie.length;pe<Ee;pe++){let we=ie[pe];if(Gi.isClockWise(we))ie[pe]=we.reverse()}}function ee(pe){let Ue=pe[0];for(let De=1;De<=pe.length;De++){let Je=De%pe.length,qe=pe[Je],ln=qe.x-Ue.x,hn=qe.y-Ue.y,_n=ln*ln+hn*hn,$t=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(Ue.x),Math.abs(Ue.y)),In=0.000000000000000000010000000000000001*$t*$t;if(_n<=In){pe.splice(Je,1),De--;continue}Ue=qe}}ee(Yt),ie.forEach(ee);let he=ie.length,Xt=Yt;for(let pe=0;pe<he;pe++){let Ee=ie[pe];Yt=Yt.concat(Ee)}function ae(pe,Ee,we){if(!Ee)Qe("ExtrudeGeometry: vec does not exist");return pe.clone().addScaledVector(Ee,we)}let le=Yt.length;function te(pe,Ee,we){let Ue,De,Je,qe=pe.x-Ee.x,ln=pe.y-Ee.y,hn=we.x-pe.x,_n=we.y-pe.y,$t=qe*qe+ln*ln,In=qe*_n-ln*hn;if(Math.abs(In)>Number.EPSILON){let en=Math.sqrt($t),En=Math.sqrt(hn*hn+_n*_n),Le=Ee.x-ln/en,yn=Ee.y+qe/en,We=we.x-_n/En,je=we.y+hn/En,Fn=((We-Le)*_n-(je-yn)*hn)/(qe*_n-ln*hn);Ue=Le+qe*Fn-pe.x,De=yn+ln*Fn-pe.y;let Pn=Ue*Ue+De*De;if(Pn<=2)return new e(Ue,De);else Je=Math.sqrt(Pn/2)}else{let en=!1;if(qe>Number.EPSILON){if(hn>Number.EPSILON)en=!0}else if(qe<-Number.EPSILON){if(hn<-Number.EPSILON)en=!0}else if(Math.sign(ln)===Math.sign(_n))en=!0;if(en)Ue=-ln,De=qe,Je=Math.sqrt($t);else Ue=qe,De=ln,Je=Math.sqrt($t/2)}return new e(Ue/Je,De/Je)}let Me=[];for(let pe=0,Ee=Xt.length,we=Ee-1,Ue=pe+1;pe<Ee;pe++,we++,Ue++){if(we===Ee)we=0;if(Ue===Ee)Ue=0;Me[pe]=te(Xt[pe],Xt[we],Xt[Ue])}let se=[],de,ye=Me.concat();for(let pe=0,Ee=he;pe<Ee;pe++){let we=ie[pe];de=[];for(let Ue=0,De=we.length,Je=De-1,qe=Ue+1;Ue<De;Ue++,Je++,qe++){if(Je===De)Je=0;if(qe===De)qe=0;de[Ue]=te(we[Ue],we[Je],we[qe])}se.push(de),ye=ye.concat(de)}let Oe;if(Bt===0)Oe=Gi.triangulateShape(Xt,ie);else{let pe=[],Ee=[];for(let we=0;we<Bt;we++){let Ue=we/Bt,De=Rt*Math.cos(Ue*Math.PI/2),Je=Lt*Math.sin(Ue*Math.PI/2)+Dt;for(let qe=0,ln=Xt.length;qe<ln;qe++){let hn=ae(Xt[qe],Me[qe],Je);if(Ne(hn.x,hn.y,-De),Ue===0)pe.push(hn)}for(let qe=0,ln=he;qe<ln;qe++){let hn=ie[qe];de=se[qe];let _n=[];for(let $t=0,In=hn.length;$t<In;$t++){let en=ae(hn[$t],de[$t],Je);if(Ne(en.x,en.y,-De),Ue===0)_n.push(en)}if(Ue===0)Ee.push(_n)}}Oe=Gi.triangulateShape(pe,Ee)}let fe=Oe.length,xe=Lt+Dt;for(let pe=0;pe<le;pe++){let Ee=It?ae(Yt[pe],ye[pe],xe):Yt[pe];if(!Wt)Ne(Ee.x,Ee.y,0);else qt.copy(zt.normals[0]).multiplyScalar(Ee.x),Ht.copy(zt.binormals[0]).multiplyScalar(Ee.y),Nt.copy(Gt[0]).add(qt).add(Ht),Ne(Nt.x,Nt.y,Nt.z)}for(let pe=1;pe<=At;pe++)for(let Ee=0;Ee<le;Ee++){let we=It?ae(Yt[Ee],ye[Ee],xe):Yt[Ee];if(!Wt)Ne(we.x,we.y,Ct/At*pe);else qt.copy(zt.normals[pe]).multiplyScalar(we.x),Ht.copy(zt.binormals[pe]).multiplyScalar(we.y),Nt.copy(Gt[pe]).add(qt).add(Ht),Ne(Nt.x,Nt.y,Nt.z)}for(let pe=Bt-1;pe>=0;pe--){let Ee=pe/Bt,we=Rt*Math.cos(Ee*Math.PI/2),Ue=Lt*Math.sin(Ee*Math.PI/2)+Dt;for(let De=0,Je=Xt.length;De<Je;De++){let qe=ae(Xt[De],Me[De],Ue);Ne(qe.x,qe.y,Ct+we)}for(let De=0,Je=ie.length;De<Je;De++){let qe=ie[De];de=se[De];for(let ln=0,hn=qe.length;ln<hn;ln++){let _n=ae(qe[ln],de[ln],Ue);if(!Wt)Ne(_n.x,_n.y,Ct+we);else Ne(_n.x,_n.y+Gt[At-1].y,Gt[At-1].x+we)}}}ze(),Ye();function ze(){let pe=Z.length/3;if(It){let Ee=0,we=le*Ee;for(let Ue=0;Ue<fe;Ue++){let De=Oe[Ue];fn(De[2]+we,De[1]+we,De[0]+we)}Ee=At+Bt*2,we=le*Ee;for(let Ue=0;Ue<fe;Ue++){let De=Oe[Ue];fn(De[0]+we,De[1]+we,De[2]+we)}}else{for(let Ee=0;Ee<fe;Ee++){let we=Oe[Ee];fn(we[2],we[1],we[0])}for(let Ee=0;Ee<fe;Ee++){let we=Oe[Ee];fn(we[0]+le*At,we[1]+le*At,we[2]+le*At)}}Y.addGroup(pe,Z.length/3-pe,0)}function Ye(){let pe=Z.length/3,Ee=0;Ze(Xt,Ee),Ee+=Xt.length;for(let we=0,Ue=ie.length;we<Ue;we++){let De=ie[we];Ze(De,Ee),Ee+=De.length}Y.addGroup(pe,Z.length/3-pe,1)}function Ze(pe,Ee){let we=pe.length;while(--we>=0){let Ue=we,De=we-1;if(De<0)De=pe.length-1;for(let Je=0,qe=At+Bt*2;Je<qe;Je++){let ln=le*Je,hn=le*(Je+1),_n=Ee+Ue+ln,$t=Ee+De+ln,In=Ee+De+hn,en=Ee+Ue+hn;rn(_n,$t,In,en)}}}function Ne(pe,Ee,we){bt.push(pe),bt.push(Ee),bt.push(we)}function fn(pe,Ee,we){$e(pe),$e(Ee),$e(we);let Ue=Z.length/3,De=wt.generateTopUV(Y,Z,Ue-3,Ue-2,Ue-1);dn(De[0]),dn(De[1]),dn(De[2])}function rn(pe,Ee,we,Ue){$e(pe),$e(Ee),$e(Ue),$e(Ee),$e(we),$e(Ue);let De=Z.length/3,Je=wt.generateSideWallUV(Y,Z,De-6,De-3,De-2,De-1);dn(Je[0]),dn(Je[1]),dn(Je[3]),dn(Je[1]),dn(Je[2]),dn(Je[3])}function $e(pe){Z.push(bt[pe*3+0]),Z.push(bt[pe*3+1]),Z.push(bt[pe*3+2])}function dn(pe){tt.push(pe.x),tt.push(pe.y)}}}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}toJSON(){let W=super.toJSON(),q=this.parameters.shapes,Y=this.parameters.options;return dd(q,Y,W)}static fromJSON(W,q){let Y=[];for(let tt=0,at=W.shapes.length;tt<at;tt++){let Mt=q[W.shapes[tt]];Y.push(Mt)}let Z=W.options.extrudePath;if(Z!==void 0)W.options.extrudePath=new Xa[Z.type]().fromJSON(Z);return new C(Y,W.options)}}var ud={generateTopUV:function(W,q,Y,Z,tt){let at=q[Y*3],Mt=q[Y*3+1],bt=q[Z*3],Et=q[Z*3+1],At=q[tt*3],Ct=q[tt*3+1];return[new e(at,Mt),new e(bt,Et),new e(At,Ct)]},generateSideWallUV:function(W,q,Y,Z,tt,at){let Mt=q[Y*3],bt=q[Y*3+1],Et=q[Y*3+2],At=q[Z*3],Ct=q[Z*3+1],It=q[Z*3+2],Rt=q[tt*3],Lt=q[tt*3+1],Dt=q[tt*3+2],Bt=q[at*3],Pt=q[at*3+1],wt=q[at*3+2];if(Math.abs(bt-Ct)<Math.abs(Mt-At))return[new e(Mt,1-Et),new e(At,1-It),new e(Rt,1-Dt),new e(Bt,1-wt)];else return[new e(bt,1-Et),new e(Ct,1-It),new e(Lt,1-Dt),new e(Pt,1-wt)]}};function dd(W,q,Y){if(Y.shapes=[],Array.isArray(W))for(let Z=0,tt=W.length;Z<tt;Z++){let at=W[Z];Y.shapes.push(at.uuid)}else Y.shapes.push(W.uuid);if(Y.options=Object.assign({},q),q.extrudePath!==void 0)Y.options.extrudePath=q.extrudePath.toJSON();return Y}class _t extends l{constructor(W=[new e(0,-0.5),new e(0.5,0),new e(0,0.5)],q=12,Y=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:W,segments:q,phiStart:Y,phiLength:Z},q=Math.floor(q),Z=cn(Z,0,Math.PI*2);let tt=[],at=[],Mt=[],bt=[],Et=[],At=1/q,Ct=new t,It=new e,Rt=new t,Lt=new t,Dt=new t,Bt=0,Pt=0;for(let wt=0;wt<=W.length-1;wt++)switch(wt){case 0:Bt=W[wt+1].x-W[wt].x,Pt=W[wt+1].y-W[wt].y,Rt.x=Pt*1,Rt.y=-Bt,Rt.z=Pt*0,Dt.copy(Rt),Rt.normalize(),bt.push(Rt.x,Rt.y,Rt.z);break;case W.length-1:bt.push(Dt.x,Dt.y,Dt.z);break;default:Bt=W[wt+1].x-W[wt].x,Pt=W[wt+1].y-W[wt].y,Rt.x=Pt*1,Rt.y=-Bt,Rt.z=Pt*0,Lt.copy(Rt),Rt.x+=Dt.x,Rt.y+=Dt.y,Rt.z+=Dt.z,Rt.normalize(),bt.push(Rt.x,Rt.y,Rt.z),Dt.copy(Lt)}for(let wt=0;wt<=q;wt++){let Gt=Y+wt*At*Z,Wt=Math.sin(Gt),zt=Math.cos(Gt);for(let Ht=0;Ht<=W.length-1;Ht++){Ct.x=W[Ht].x*Wt,Ct.y=W[Ht].y,Ct.z=W[Ht].x*zt,at.push(Ct.x,Ct.y,Ct.z),It.x=wt/q,It.y=Ht/(W.length-1),Mt.push(It.x,It.y);let qt=bt[3*Ht+0]*Wt,Nt=bt[3*Ht+1],Ot=bt[3*Ht+0]*zt;Et.push(qt,Nt,Ot)}}for(let wt=0;wt<q;wt++)for(let Gt=0;Gt<W.length-1;Gt++){let Wt=Gt+wt*W.length,zt=Wt,Ht=Wt+W.length,qt=Wt+W.length+1,Nt=Wt+1;tt.push(zt,Ht,Nt),tt.push(qt,Nt,Ht)}this.setIndex(tt),this.setAttribute("position",new s(at,3)),this.setAttribute("uv",new s(Mt,2)),this.setAttribute("normal",new s(Et,3))}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}static fromJSON(W){return new _t(W.points,W.segments,W.phiStart,W.phiLength)}}class b extends l{constructor(W=1,q=1,Y=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:W,height:q,widthSegments:Y,heightSegments:Z};let tt=W/2,at=q/2,Mt=Math.floor(Y),bt=Math.floor(Z),Et=Mt+1,At=bt+1,Ct=W/Mt,It=q/bt,Rt=[],Lt=[],Dt=[],Bt=[];for(let Pt=0;Pt<At;Pt++){let wt=Pt*It-at;for(let Gt=0;Gt<Et;Gt++){let Wt=Gt*Ct-tt;Lt.push(Wt,-wt,0),Dt.push(0,0,1),Bt.push(Gt/Mt),Bt.push(1-Pt/bt)}}for(let Pt=0;Pt<bt;Pt++)for(let wt=0;wt<Mt;wt++){let Gt=wt+Et*Pt,Wt=wt+Et*(Pt+1),zt=wt+1+Et*(Pt+1),Ht=wt+1+Et*Pt;Rt.push(Gt,Wt,Ht),Rt.push(Wt,zt,Ht)}this.setIndex(Rt),this.setAttribute("position",new s(Lt,3)),this.setAttribute("normal",new s(Dt,3)),this.setAttribute("uv",new s(Bt,2))}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}static fromJSON(W){return new b(W.width,W.height,W.widthSegments,W.heightSegments)}}class G extends l{constructor(W=0.5,q=1,Y=32,Z=1,tt=0,at=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:W,outerRadius:q,thetaSegments:Y,phiSegments:Z,thetaStart:tt,thetaLength:at},Y=Math.max(3,Y),Z=Math.max(1,Z);let Mt=[],bt=[],Et=[],At=[],Ct=W,It=(q-W)/Z,Rt=new t,Lt=new e;for(let Dt=0;Dt<=Z;Dt++){for(let Bt=0;Bt<=Y;Bt++){let Pt=tt+Bt/Y*at;Rt.x=Ct*Math.cos(Pt),Rt.y=Ct*Math.sin(Pt),bt.push(Rt.x,Rt.y,Rt.z),Et.push(0,0,1),Lt.x=(Rt.x/q+1)/2,Lt.y=(Rt.y/q+1)/2,At.push(Lt.x,Lt.y)}Ct+=It}for(let Dt=0;Dt<Z;Dt++){let Bt=Dt*(Y+1);for(let Pt=0;Pt<Y;Pt++){let wt=Pt+Bt,Gt=wt,Wt=wt+Y+1,zt=wt+Y+2,Ht=wt+1;Mt.push(Gt,Wt,Ht),Mt.push(Wt,zt,Ht)}}this.setIndex(Mt),this.setAttribute("position",new s(bt,3)),this.setAttribute("normal",new s(Et,3)),this.setAttribute("uv",new s(At,2))}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}static fromJSON(W){return new G(W.innerRadius,W.outerRadius,W.thetaSegments,W.phiSegments,W.thetaStart,W.thetaLength)}}class X extends l{constructor(W=1,q=32,Y=16,Z=0,tt=Math.PI*2,at=0,Mt=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:W,widthSegments:q,heightSegments:Y,phiStart:Z,phiLength:tt,thetaStart:at,thetaLength:Mt},q=Math.max(3,Math.floor(q)),Y=Math.max(2,Math.floor(Y));let bt=Math.min(at+Mt,Math.PI),Et=0,At=[],Ct=new t,It=new t,Rt=[],Lt=[],Dt=[],Bt=[];for(let Pt=0;Pt<=Y;Pt++){let wt=[],Gt=Pt/Y,Wt=at+Gt*Mt,zt=W*Math.cos(Wt),Ht=Math.sqrt(W*W-zt*zt),qt=0;if(Pt===0&&at===0)qt=0.5/q;else if(Pt===Y&&bt===Math.PI)qt=-0.5/q;for(let Nt=0;Nt<=q;Nt++){let Ot=Nt/q,Yt=Z+Ot*tt;Ct.x=-Ht*Math.cos(Yt),Ct.y=zt,Ct.z=Ht*Math.sin(Yt),Lt.push(Ct.x,Ct.y,Ct.z),It.copy(Ct).normalize(),Dt.push(It.x,It.y,It.z),Bt.push(Ot+qt,1-Gt),wt.push(Et++)}At.push(wt)}for(let Pt=0;Pt<Y;Pt++)for(let wt=0;wt<q;wt++){let Gt=At[Pt][wt+1],Wt=At[Pt][wt],zt=At[Pt+1][wt],Ht=At[Pt+1][wt+1];if(Pt!==0||at>0)Rt.push(Gt,Wt,Ht);if(Pt!==Y-1||bt<Math.PI)Rt.push(Wt,zt,Ht)}this.setIndex(Rt),this.setAttribute("position",new s(Lt,3)),this.setAttribute("normal",new s(Dt,3)),this.setAttribute("uv",new s(Bt,2))}copy(W){return super.copy(W),this.parameters=Object.assign({},W.parameters),this}static fromJSON(W){return new X(W.radius,W.widthSegments,W.heightSegments,W.phiStart,W.phiLength,W.thetaStart,W.thetaLength)}}function Yi(W){let q={};for(let Y in W){q[Y]={};for(let Z in W[Y]){let tt=W[Y][Z];if(lc(tt))if(tt.isRenderTargetTexture)Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),q[Y][Z]=null;else q[Y][Z]=tt.clone();else if(Array.isArray(tt))if(lc(tt[0])){let at=[];for(let Mt=0,bt=tt.length;Mt<bt;Mt++)at[Mt]=tt[Mt].clone();q[Y][Z]=at}else q[Y][Z]=tt.slice();else q[Y][Z]=tt}}return q}function Vn(W){let q={};for(let Y=0;Y<W.length;Y++){let Z=Yi(W[Y]);for(let tt in Z)q[tt]=Z[tt]}return q}function lc(W){return W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion)}function fd(W){let q=[];for(let Y=0;Y<W.length;Y++)q.push(W[Y].clone());return q}function el(W){let q=W.getRenderTarget();if(q===null)return W.outputColorSpace;if(q.isXRRenderTarget===!0)return q.texture.colorSpace;return r.workingColorSpace}var H={clone:Yi,merge:Vn},pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class d extends ui{constructor(W){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,W!==void 0)this.setValues(W)}copy(W){return super.copy(W),this.fragmentShader=W.fragmentShader,this.vertexShader=W.vertexShader,this.uniforms=Yi(W.uniforms),this.uniformsGroups=fd(W.uniformsGroups),this.defines=Object.assign({},W.defines),this.wireframe=W.wireframe,this.wireframeLinewidth=W.wireframeLinewidth,this.fog=W.fog,this.lights=W.lights,this.clipping=W.clipping,this.extensions=Object.assign({},W.extensions),this.glslVersion=W.glslVersion,this.defaultAttributeValues=Object.assign({},W.defaultAttributeValues),this.index0AttributeName=W.index0AttributeName,this.uniformsNeedUpdate=W.uniformsNeedUpdate,this}toJSON(W){let q=super.toJSON(W);q.glslVersion=this.glslVersion,q.uniforms={};for(let Z in this.uniforms){let at=this.uniforms[Z].value;if(at&&at.isTexture)q.uniforms[Z]={type:"t",value:at.toJSON(W).uuid};else if(at&&at.isColor)q.uniforms[Z]={type:"c",value:at.getHex()};else if(at&&at.isVector2)q.uniforms[Z]={type:"v2",value:at.toArray()};else if(at&&at.isVector3)q.uniforms[Z]={type:"v3",value:at.toArray()};else if(at&&at.isVector4)q.uniforms[Z]={type:"v4",value:at.toArray()};else if(at&&at.isMatrix3)q.uniforms[Z]={type:"m3",value:at.toArray()};else if(at&&at.isMatrix4)q.uniforms[Z]={type:"m4",value:at.toArray()};else q.uniforms[Z]={value:at}}if(Object.keys(this.defines).length>0)q.defines=this.defines;q.vertexShader=this.vertexShader,q.fragmentShader=this.fragmentShader,q.lights=this.lights,q.clipping=this.clipping;let Y={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Y[Z]=!0;if(Object.keys(Y).length>0)q.extensions=Y;return q}fromJSON(W,q){if(super.fromJSON(W,q),W.uniforms!==void 0)for(let Y in W.uniforms){let Z=W.uniforms[Y];switch(this.uniforms[Y]={},Z.type){case"t":this.uniforms[Y].value=q[Z.value]||null;break;case"c":this.uniforms[Y].value=new n().setHex(Z.value);break;case"v2":this.uniforms[Y].value=new e().fromArray(Z.value);break;case"v3":this.uniforms[Y].value=new t().fromArray(Z.value);break;case"v4":this.uniforms[Y].value=new Tn().fromArray(Z.value);break;case"m3":this.uniforms[Y].value=new tn().fromArray(Z.value);break;case"m4":this.uniforms[Y].value=new o().fromArray(Z.value);break;default:this.uniforms[Y].value=Z.value}}if(W.defines!==void 0)this.defines=W.defines;if(W.vertexShader!==void 0)this.vertexShader=W.vertexShader;if(W.fragmentShader!==void 0)this.fragmentShader=W.fragmentShader;if(W.glslVersion!==void 0)this.glslVersion=W.glslVersion;if(W.extensions!==void 0)for(let Y in W.extensions)this.extensions[Y]=W.extensions[Y];if(W.lights!==void 0)this.lights=W.lights;if(W.clipping!==void 0)this.clipping=W.clipping;return this}}class xt extends d{constructor(W){super(W);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class v extends ui{constructor(W){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new n(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new n(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(W)}copy(W){return super.copy(W),this.defines={STANDARD:""},this.color.copy(W.color),this.roughness=W.roughness,this.metalness=W.metalness,this.map=W.map,this.lightMap=W.lightMap,this.lightMapIntensity=W.lightMapIntensity,this.aoMap=W.aoMap,this.aoMapIntensity=W.aoMapIntensity,this.emissive.copy(W.emissive),this.emissiveMap=W.emissiveMap,this.emissiveIntensity=W.emissiveIntensity,this.bumpMap=W.bumpMap,this.bumpScale=W.bumpScale,this.normalMap=W.normalMap,this.normalMapType=W.normalMapType,this.normalScale.copy(W.normalScale),this.displacementMap=W.displacementMap,this.displacementScale=W.displacementScale,this.displacementBias=W.displacementBias,this.roughnessMap=W.roughnessMap,this.metalnessMap=W.metalnessMap,this.alphaMap=W.alphaMap,this.envMap=W.envMap,this.envMapRotation.copy(W.envMapRotation),this.envMapIntensity=W.envMapIntensity,this.wireframe=W.wireframe,this.wireframeLinewidth=W.wireframeLinewidth,this.wireframeLinecap=W.wireframeLinecap,this.wireframeLinejoin=W.wireframeLinejoin,this.flatShading=W.flatShading,this.fog=W.fog,this}}class R extends v{constructor(W){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(q){this.ior=(1+0.4*q)/(1-0.4*q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new n(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new n(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new n(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(W)}get anisotropy(){return this._anisotropy}set anisotropy(W){if(this._anisotropy>0!==W>0)this.version++;this._anisotropy=W}get clearcoat(){return this._clearcoat}set clearcoat(W){if(this._clearcoat>0!==W>0)this.version++;this._clearcoat=W}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(W){if(this._diffuseRoughness>0!==W>0)this.version++;this._diffuseRoughness=W}get iridescence(){return this._iridescence}set iridescence(W){if(this._iridescence>0!==W>0)this.version++;this._iridescence=W}get dispersion(){return this._dispersion}set dispersion(W){if(this._dispersion>0!==W>0)this.version++;this._dispersion=W}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(W){if(this._retroreflectivity>0!==W>0)this.version++;this._retroreflectivity=W}get sheen(){return this._sheen}set sheen(W){if(this._sheen>0!==W>0)this.version++;this._sheen=W}get transmission(){return this._transmission}set transmission(W){if(this._transmission>0!==W>0)this.version++;this._transmission=W}copy(W){return super.copy(W),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=W.anisotropy,this.anisotropyRotation=W.anisotropyRotation,this.anisotropyMap=W.anisotropyMap,this.clearcoat=W.clearcoat,this.clearcoatMap=W.clearcoatMap,this.clearcoatRoughness=W.clearcoatRoughness,this.clearcoatRoughnessMap=W.clearcoatRoughnessMap,this.clearcoatNormalMap=W.clearcoatNormalMap,this.clearcoatNormalScale.copy(W.clearcoatNormalScale),this.diffuseRoughness=W.diffuseRoughness,this.diffuseRoughnessMap=W.diffuseRoughnessMap,this.dispersion=W.dispersion,this.ior=W.ior,this.iridescence=W.iridescence,this.iridescenceMap=W.iridescenceMap,this.iridescenceIOR=W.iridescenceIOR,this.iridescenceThicknessRange=[...W.iridescenceThicknessRange],this.iridescenceThicknessMap=W.iridescenceThicknessMap,this.retroreflectivity=W.retroreflectivity,this.sheen=W.sheen,this.sheenColor.copy(W.sheenColor),this.sheenColorMap=W.sheenColorMap,this.sheenRoughness=W.sheenRoughness,this.sheenRoughnessMap=W.sheenRoughnessMap,this.transmission=W.transmission,this.transmissionMap=W.transmissionMap,this.thickness=W.thickness,this.thicknessMap=W.thicknessMap,this.attenuationDistance=W.attenuationDistance,this.attenuationColor.copy(W.attenuationColor),this.specularIntensity=W.specularIntensity,this.specularIntensityMap=W.specularIntensityMap,this.specularColor.copy(W.specularColor),this.specularColorMap=W.specularColorMap,this}}class aa extends ui{constructor(W){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new n(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new n(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(W)}copy(W){return super.copy(W),this.color.copy(W.color),this.map=W.map,this.lightMap=W.lightMap,this.lightMapIntensity=W.lightMapIntensity,this.aoMap=W.aoMap,this.aoMapIntensity=W.aoMapIntensity,this.emissive.copy(W.emissive),this.emissiveMap=W.emissiveMap,this.emissiveIntensity=W.emissiveIntensity,this.bumpMap=W.bumpMap,this.bumpScale=W.bumpScale,this.normalMap=W.normalMap,this.normalMapType=W.normalMapType,this.normalScale.copy(W.normalScale),this.displacementMap=W.displacementMap,this.displacementScale=W.displacementScale,this.displacementBias=W.displacementBias,this.specularMap=W.specularMap,this.alphaMap=W.alphaMap,this.envMap=W.envMap,this.envMapRotation.copy(W.envMapRotation),this.combine=W.combine,this.reflectivity=W.reflectivity,this.envMapIntensity=W.envMapIntensity,this.refractionRatio=W.refractionRatio,this.wireframe=W.wireframe,this.wireframeLinewidth=W.wireframeLinewidth,this.wireframeLinecap=W.wireframeLinecap,this.wireframeLinejoin=W.wireframeLinejoin,this.flatShading=W.flatShading,this.fog=W.fog,this}}class nl extends ui{constructor(W){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(W)}copy(W){return super.copy(W),this.depthPacking=W.depthPacking,this.map=W.map,this.alphaMap=W.alphaMap,this.displacementMap=W.displacementMap,this.displacementScale=W.displacementScale,this.displacementBias=W.displacementBias,this.wireframe=W.wireframe,this.wireframeLinewidth=W.wireframeLinewidth,this}}class il extends ui{constructor(W){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(W)}copy(W){return super.copy(W),this.map=W.map,this.alphaMap=W.alphaMap,this.displacementMap=W.displacementMap,this.displacementScale=W.displacementScale,this.displacementBias=W.displacementBias,this}}function ls(W,q){if(!W||W.constructor===q)return W;if(typeof q.BYTES_PER_ELEMENT==="number")return new q(W);return Array.prototype.slice.call(W)}function Ha(W){return W!==void 0&&W.inTangents!==void 0&&W.outTangents!==void 0}class Zi{constructor(W,q,Y,Z){this.parameterPositions=W,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new q.constructor(Y),this.sampleValues=q,this.valueSize=Y,this.settings=null,this.DefaultSettings_={}}evaluate(W){let q=this.parameterPositions,Y=this._cachedIndex,Z=q[Y],tt=q[Y-1];n:{t:{let at;e:{i:if(!(W<Z)){for(let Mt=Y+2;;){if(Z===void 0){if(W<tt)break i;return Y=q.length,this._cachedIndex=Y,this.copySampleValue_(Y-1)}if(Y===Mt)break;if(tt=Z,Z=q[++Y],W<Z)break t}at=q.length;break e}if(!(W>=tt)){let Mt=q[1];if(W<Mt)Y=2,tt=Mt;for(let bt=Y-2;;){if(tt===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Y===bt)break;if(Z=tt,tt=q[--Y-1],W>=tt)break t}at=Y,Y=0;break e}break n}while(Y<at){let Mt=Y+at>>>1;if(W<q[Mt])at=Mt;else Y=Mt+1}if(Z=q[Y],tt=q[Y-1],tt===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Y=q.length,this._cachedIndex=Y,this.copySampleValue_(Y-1)}this._cachedIndex=Y,this.intervalChanged_(Y,tt,Z)}return this.interpolate_(Y,tt,W,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(W){let q=this.resultBuffer,Y=this.sampleValues,Z=this.valueSize,tt=W*Z;for(let at=0;at!==Z;++at)q[at]=Y[tt+at];return q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class sl extends Zi{constructor(W,q,Y,Z){super(W,q,Y,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(W,q,Y){let Z=this.parameterPositions,tt=W-2,at=W+1,Mt=Z[tt],bt=Z[at];if(Mt===void 0)switch(this.getSettings_().endingStart){case 2401:tt=W,Mt=2*q-Y;break;case 2402:tt=Z.length-2,Mt=q+Z[tt]-Z[tt+1];break;default:tt=W,Mt=Y}if(bt===void 0)switch(this.getSettings_().endingEnd){case 2401:at=W,bt=2*Y-q;break;case 2402:at=1,bt=Y+Z[1]-Z[0];break;default:at=W-1,bt=q}let Et=(Y-q)*0.5,At=this.valueSize;this._weightPrev=Et/(q-Mt),this._weightNext=Et/(bt-Y),this._offsetPrev=tt*At,this._offsetNext=at*At}interpolate_(W,q,Y,Z){let tt=this.resultBuffer,at=this.sampleValues,Mt=this.valueSize,bt=W*Mt,Et=bt-Mt,At=this._offsetPrev,Ct=this._offsetNext,It=this._weightPrev,Rt=this._weightNext,Lt=(Y-q)/(Z-q),Dt=Lt*Lt,Bt=Dt*Lt,Pt=-It*Bt+2*It*Dt-It*Lt,wt=(1+It)*Bt+(-1.5-2*It)*Dt+(-0.5+It)*Lt+1,Gt=(-1-Rt)*Bt+(1.5+Rt)*Dt+0.5*Lt,Wt=Rt*Bt-Rt*Dt;for(let zt=0;zt!==Mt;++zt)tt[zt]=Pt*at[At+zt]+wt*at[Et+zt]+Gt*at[bt+zt]+Wt*at[Ct+zt];return tt}}class rl extends Zi{constructor(W,q,Y,Z){super(W,q,Y,Z)}interpolate_(W,q,Y,Z){let tt=this.resultBuffer,at=this.sampleValues,Mt=this.valueSize,bt=W*Mt,Et=bt-Mt,At=(Y-q)/(Z-q),Ct=1-At;for(let It=0;It!==Mt;++It)tt[It]=at[Et+It]*Ct+at[bt+It]*At;return tt}}class al extends Zi{constructor(W,q,Y,Z){super(W,q,Y,Z)}interpolate_(W){return this.copySampleValue_(W-1)}}class ol extends Zi{interpolate_(W,q,Y,Z){let tt=this.resultBuffer,at=this.sampleValues,Mt=this.valueSize,bt=W*Mt,Et=bt-Mt,At=this.inTangents,Ct=this.outTangents;if(!At||!Ct){let Lt=(Y-q)/(Z-q),Dt=1-Lt;for(let Bt=0;Bt!==Mt;++Bt)tt[Bt]=at[Et+Bt]*Dt+at[bt+Bt]*Lt;return tt}let It=Mt*2,Rt=W-1;for(let Lt=0;Lt!==Mt;++Lt){let Dt=at[Et+Lt],Bt=at[bt+Lt],Pt=Rt*It+Lt*2,wt=Ct[Pt],Gt=Ct[Pt+1],Wt=W*It+Lt*2,zt=At[Wt],Ht=At[Wt+1],qt=_d(Y,q,wt,zt,Z);tt[Lt]=Sh(qt,Dt,Gt,Ht,Bt)}return tt}}function Sh(W,q,Y,Z,tt){let at=1-W;return at*at*at*q+3*at*at*W*Y+3*at*W*W*Z+W*W*W*tt}function gd(W,q,Y,Z,tt){let at=1-W;return 3*at*at*(Y-q)+6*at*W*(Z-Y)+3*W*W*(tt-Z)}function _d(W,q,Y,Z,tt){let at=(W-q)/(tt-q);for(let Mt=0;Mt<8;Mt++){let bt=Sh(at,q,Y,Z,tt)-W;if(Math.abs(bt)<0.0000000001)break;let Et=gd(at,q,Y,Z,tt);if(Math.abs(Et)<0.0000000001)break;at=Math.max(0,Math.min(1,at-bt/Et))}return at}class jn{constructor(W,q,Y,Z){if(W===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(q===void 0||q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+W);this.name=W,this.times=ls(q,this.TimeBufferType),this.values=ls(Y,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(W){let q=W.constructor,Y;if(q.toJSON!==this.toJSON)Y=q.toJSON(W);else{Y={name:W.name,times:ls(W.times,Array),values:ls(W.values,Array)};let Z=W.getInterpolation();if(Z!==W.DefaultInterpolation)Y.interpolation=Z;if(Ha(W.settings))Y.settings={inTangents:ls(W.settings.inTangents,Array),outTangents:ls(W.settings.outTangents,Array)}}return Y.type=W.ValueTypeName,Y}InterpolantFactoryMethodDiscrete(W){return new al(this.times,this.values,this.getValueSize(),W)}InterpolantFactoryMethodLinear(W){return new rl(this.times,this.values,this.getValueSize(),W)}InterpolantFactoryMethodSmooth(W){return new sl(this.times,this.values,this.getValueSize(),W)}InterpolantFactoryMethodBezier(W){let q=new ol(this.times,this.values,this.getValueSize(),W);if(this.settings)q.inTangents=this.settings.inTangents,q.outTangents=this.settings.outTangents;return q}setInterpolation(W){let q;switch(W){case 2300:q=this.InterpolantFactoryMethodDiscrete;break;case 2301:q=this.InterpolantFactoryMethodLinear;break;case 2302:q=this.InterpolantFactoryMethodSmooth;break;case 2303:q=this.InterpolantFactoryMethodBezier;break}if(q===void 0){let Y="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(W!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Y);return Ke("KeyframeTrack:",Y),this}return this.createInterpolant=q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(W){if(W!==0){let q=this.times;for(let Y=0,Z=q.length;Y!==Z;++Y)q[Y]+=W}return this}scale(W){if(W!==1){let q=this.times;for(let Y=0,Z=q.length;Y!==Z;++Y)q[Y]*=W;if(Ha(this.settings))cc(this.settings.inTangents,W),cc(this.settings.outTangents,W)}return this}trim(W,q){let Y=this.times,Z=Y.length,tt=0,at=Z-1;while(tt!==Z&&Y[tt]<W)++tt;while(at!==-1&&Y[at]>q)--at;if(++at,tt!==0||at!==Z){if(tt>=at)at=Math.max(at,1),tt=at-1;let Mt=this.getValueSize();this.times=Y.slice(tt,at),this.values=this.values.slice(tt*Mt,at*Mt)}return this}validate(){let W=!0,q=this.getValueSize();if(q-Math.floor(q)!==0)Qe("KeyframeTrack: Invalid value size in track.",this),W=!1;let Y=this.times,Z=this.values,tt=Y.length;if(tt===0)Qe("KeyframeTrack: Track is empty.",this),W=!1;let at=null;for(let Mt=0;Mt!==tt;Mt++){let bt=Y[Mt];if(typeof bt==="number"&&isNaN(bt)){Qe("KeyframeTrack: Time is not a valid number.",this,Mt,bt),W=!1;break}if(at!==null&&at>bt){Qe("KeyframeTrack: Out of order keys.",this,Mt,bt,at),W=!1;break}at=bt}if(Z!==void 0){if(yu(Z))for(let Mt=0,bt=Z.length;Mt!==bt;++Mt){let Et=Z[Mt];if(isNaN(Et)){Qe("KeyframeTrack: Value is not a valid number.",this,Mt,Et),W=!1;break}}}return W}optimize(){let W=this.times.slice(),q=this.values.slice(),Y=this.getValueSize(),Z=this.getInterpolation()===2302,tt=W.length-1,at=1;for(let Mt=1;Mt<tt;++Mt){let bt=!1,Et=W[Mt],At=W[Mt+1];if(Et!==At&&(Mt!==1||Et!==W[0]))if(!Z){let Ct=Mt*Y,It=Ct-Y,Rt=Ct+Y;for(let Lt=0;Lt!==Y;++Lt){let Dt=q[Ct+Lt];if(Dt!==q[It+Lt]||Dt!==q[Rt+Lt]){bt=!0;break}}}else bt=!0;if(bt){if(Mt!==at){W[at]=W[Mt];let Ct=Mt*Y,It=at*Y;for(let Rt=0;Rt!==Y;++Rt)q[It+Rt]=q[Ct+Rt]}++at}}if(tt>0){W[at]=W[tt];for(let Mt=tt*Y,bt=at*Y,Et=0;Et!==Y;++Et)q[bt+Et]=q[Mt+Et];++at}if(at!==W.length)this.times=W.slice(0,at),this.values=q.slice(0,at*Y);else this.times=W,this.values=q;return this}clone(){let W=this.times.slice(),q=this.values.slice(),Z=new this.constructor(this.name,W,q);if(Z.createInterpolant=this.createInterpolant,Ha(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function cc(W,q){for(let Y=0,Z=W.length;Y!==Z;Y+=2)W[Y]*=q}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=2301;class Ji extends jn{constructor(W,q,Y){super(W,q,Y)}}Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=2300;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ll extends jn{constructor(W,q,Y,Z){super(W,q,Y,Z)}}ll.prototype.ValueTypeName="color";class cl extends jn{constructor(W,q,Y,Z){super(W,q,Y,Z)}}cl.prototype.ValueTypeName="number";class hl extends Zi{constructor(W,q,Y,Z){super(W,q,Y,Z)}interpolate_(W,q,Y,Z){let tt=this.resultBuffer,at=this.sampleValues,Mt=this.valueSize,bt=(Y-q)/(Z-q),Et=W*Mt;for(let At=Et+Mt;Et!==At;Et+=4)Ei.slerpFlat(tt,0,at,Et-Mt,at,Et,bt);return tt}}class oa extends jn{constructor(W,q,Y,Z){super(W,q,Y,Z)}InterpolantFactoryMethodLinear(W){return new hl(this.times,this.values,this.getValueSize(),W)}}oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;class $i extends jn{constructor(W,q,Y){super(W,q,Y)}}$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=2300;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class ul extends jn{constructor(W,q,Y,Z){super(W,q,Y,Z)}}ul.prototype.ValueTypeName="vector";class dl{constructor(W,q,Y){let Z=this,tt=!1,at=0,Mt=0,bt=void 0,Et=[];this.onStart=void 0,this.onLoad=W,this.onProgress=q,this.onError=Y,this._abortController=null,this.itemStart=function(At){if(Mt++,tt===!1){if(Z.onStart!==void 0)Z.onStart(At,at,Mt)}tt=!0},this.itemEnd=function(At){if(at++,Z.onProgress!==void 0)Z.onProgress(At,at,Mt);if(at===Mt){if(tt=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(At){if(Z.onError!==void 0)Z.onError(At)},this.resolveURL=function(At){if(At=At.normalize("NFC"),bt)return bt(At);return At},this.setURLModifier=function(At){return bt=At,this},this.addHandler=function(At,Ct){return Et.push(At,Ct),this},this.removeHandler=function(At){let Ct=Et.indexOf(At);if(Ct!==-1)Et.splice(Ct,2);return this},this.getHandler=function(At){for(let Ct=0,It=Et.length;Ct<It;Ct+=2){let Rt=Et[Ct],Lt=Et[Ct+1];if(Rt.global)Rt.lastIndex=0;if(Rt.test(At))return Lt}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Mh=new dl;class fl{constructor(W){if(this.manager=W!==void 0?W:Mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(W,q){let Y=this;return new Promise(function(Z,tt){Y.load(W,Z,q,tt)})}parse(){}setCrossOrigin(W){return this.crossOrigin=W,this}setWithCredentials(W){return this.withCredentials=W,this}setPath(W){return this.path=W,this}setResourcePath(W){return this.resourcePath=W,this}setRequestHeader(W){return this.requestHeader=W,this}abort(){return this}}fl.DEFAULT_MATERIAL_NAME="__DEFAULT";class la extends h{static registerNode(W){this.prototype._lightNode=W}constructor(W,q=1){super();this.isLight=!0,this.type="Light",this.color=new n(W),this.intensity=q}copy(W,q){return super.copy(W,q),this.color.copy(W.color),this.intensity=W.intensity,this}toJSON(W){let q=super.toJSON(W);return q.object.color=this.color.getHex(),q.object.intensity=this.intensity,q}}var Wa=new o,hc=new t,uc=new t;class ca{constructor(W){this.camera=W,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new e(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new o,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new e(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(W){let q=this.camera;hc.setFromMatrixPosition(W.matrixWorld),q.position.copy(hc),uc.setFromMatrixPosition(W.target.matrixWorld),q.lookAt(uc),q.updateMatrixWorld(),this._updateMatrix(q,this.matrix,this._frustum)}_updateMatrix(W,q,Y,Z){Wa.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(Wa,W.coordinateSystem,W.reversedDepth);let tt=this._frameExtents,at=Z?Z.z/tt.x:1,Mt=Z?Z.w/tt.y:1,bt=Z?Z.x/tt.x:0,Et=Z?Z.y/tt.y:0;if(W.coordinateSystem===2001||W.reversedDepth)q.set(0.5*at,0,0,0.5*at+bt,0,0.5*Mt,0,0.5*Mt+Et,0,0,1,0,0,0,0,1);else q.set(0.5*at,0,0,0.5*at+bt,0,0.5*Mt,0,0.5*Mt+Et,0,0,0.5,0.5,0,0,0,1);q.multiply(Wa)}getViewport(W){return this._viewports[W]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(W){return this.camera=W.camera.clone(),this.intensity=W.intensity,this.bias=W.bias,this.radius=W.radius,this.autoUpdate=W.autoUpdate,this.needsUpdate=W.needsUpdate,this.normalBias=W.normalBias,this.blurSamples=W.blurSamples,this.mapSize.copy(W.mapSize),this.biasNode=W.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let W={};return W.intensity=this.intensity,W.bias=this.bias,W.normalBias=this.normalBias,W.radius=this.radius,W.blurSamples=this.blurSamples,W.mapSize=this.mapSize.toArray(),W.camera=this.camera.toJSON(!1).object,delete W.camera.matrix,W}}var Ir=new t,Pr=new Ei,oi=new t;class ha extends h{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new o,this.projectionMatrix=new o,this.projectionMatrixInverse=new o,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(W,q){return super.copy(W,q),this.matrixWorldInverse.copy(W.matrixWorldInverse),this.projectionMatrix.copy(W.projectionMatrix),this.projectionMatrixInverse.copy(W.projectionMatrixInverse),this.coordinateSystem=W.coordinateSystem,this}getWorldDirection(W){return super.getWorldDirection(W).negate()}updateMatrixWorld(W){if(super.updateMatrixWorld(W),this.matrixWorld.decompose(Ir,Pr,oi),oi.x===1&&oi.y===1&&oi.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ir,Pr,oi.set(1,1,1)).invert()}updateWorldMatrix(W,q,Y=!1){if(super.updateWorldMatrix(W,q,Y),this.matrixWorld.decompose(Ir,Pr,oi),oi.x===1&&oi.y===1&&oi.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ir,Pr,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Ci=new t,dc=new e,fc=new e;class g extends ha{constructor(W=50,q=1,Y=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=W,this.zoom=1,this.near=Y,this.far=Z,this.focus=10,this.aspect=q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(W,q){return super.copy(W,q),this.fov=W.fov,this.zoom=W.zoom,this.near=W.near,this.far=W.far,this.focus=W.focus,this.aspect=W.aspect,this.view=W.view===null?null:Object.assign({},W.view),this.filmGauge=W.filmGauge,this.filmOffset=W.filmOffset,this}setFocalLength(W){let q=0.5*this.getFilmHeight()/W;this.fov=Nr*2*Math.atan(q),this.updateProjectionMatrix()}getFocalLength(){let W=Math.tan(Lr*0.5*this.fov);return 0.5*this.getFilmHeight()/W}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Lr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(W,q,Y){Ci.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),q.set(Ci.x,Ci.y).multiplyScalar(-W/Ci.z),Ci.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Y.set(Ci.x,Ci.y).multiplyScalar(-W/Ci.z)}getViewSize(W,q){return this.getViewBounds(W,dc,fc),q.subVectors(fc,dc)}setViewOffset(W,q,Y,Z,tt,at){if(this.aspect=W/q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=W,this.view.fullHeight=q,this.view.offsetX=Y,this.view.offsetY=Z,this.view.width=tt,this.view.height=at,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let W=this.near,q=W*Math.tan(Lr*0.5*this.fov)/this.zoom,Y=2*q,Z=this.aspect*Y,tt=-0.5*Z,at=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:bt,fullHeight:Et}=at;tt+=at.offsetX*Z/bt,q-=at.offsetY*Y/Et,Z*=at.width/bt,Y*=at.height/Et}let Mt=this.filmOffset;if(Mt!==0)tt+=W*Mt/this.getFilmWidth();this.projectionMatrix.makePerspective(tt,tt+Z,q,q-Y,W,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(W){let q=super.toJSON(W);if(q.object.fov=this.fov,q.object.zoom=this.zoom,q.object.near=this.near,q.object.far=this.far,q.object.focus=this.focus,q.object.aspect=this.aspect,this.view!==null)q.object.view=Object.assign({},this.view);return q.object.filmGauge=this.filmGauge,q.object.filmOffset=this.filmOffset,q}}class bh extends ca{constructor(){super(new g(90,1,0.5,500));this.isPointLightShadow=!0}}class D extends la{constructor(W,q,Y=0,Z=2){super(W,q);this.isPointLight=!0,this.type="PointLight",this.distance=Y,this.decay=Z,this.shadow=new bh}get power(){return this.intensity*4*Math.PI}set power(W){this.intensity=W/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(W,q){return super.copy(W,q),this.distance=W.distance,this.decay=W.decay,this.shadow=W.shadow.clone(),this}toJSON(W){let q=super.toJSON(W);return q.object.distance=this.distance,q.object.decay=this.decay,q.object.shadow=this.shadow.toJSON(),q}}class st extends ha{constructor(W=-1,q=1,Y=1,Z=-1,tt=0.1,at=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=W,this.right=q,this.top=Y,this.bottom=Z,this.near=tt,this.far=at,this.updateProjectionMatrix()}copy(W,q){return super.copy(W,q),this.left=W.left,this.right=W.right,this.top=W.top,this.bottom=W.bottom,this.near=W.near,this.far=W.far,this.zoom=W.zoom,this.view=W.view===null?null:Object.assign({},W.view),this}setViewOffset(W,q,Y,Z,tt,at){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=W,this.view.fullHeight=q,this.view.offsetX=Y,this.view.offsetY=Z,this.view.width=tt,this.view.height=at,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let W=(this.right-this.left)/(2*this.zoom),q=(this.top-this.bottom)/(2*this.zoom),Y=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,tt=Y-W,at=Y+W,Mt=Z+q,bt=Z-q;if(this.view!==null&&this.view.enabled){let Et=(this.right-this.left)/this.view.fullWidth/this.zoom,At=(this.top-this.bottom)/this.view.fullHeight/this.zoom;tt+=Et*this.view.offsetX,at=tt+Et*this.view.width,Mt-=At*this.view.offsetY,bt=Mt-At*this.view.height}this.projectionMatrix.makeOrthographic(tt,at,Mt,bt,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(W){let q=super.toJSON(W);if(q.object.zoom=this.zoom,q.object.left=this.left,q.object.right=this.right,q.object.top=this.top,q.object.bottom=this.bottom,q.object.near=this.near,q.object.far=this.far,this.view!==null)q.object.view=Object.assign({},this.view);return q}}class Eh extends ca{constructor(){super(new st(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class F extends la{constructor(W,q){super(W,q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(h.DEFAULT_UP),this.updateMatrix(),this.target=new h,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(W){return super.copy(W),this.target=W.target.clone(),this.shadow=W.shadow.clone(),this}toJSON(W){let q=super.toJSON(W);return q.object.shadow=this.shadow.toJSON(),q.object.target=this.target.uuid,q}}var cs=-90,hs=1;class $s extends h{constructor(W,q,Y){super();this.type="CubeCamera",this.renderTarget=Y,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new g(cs,hs,W,q);Z.layers=this.layers,this.add(Z);let tt=new g(cs,hs,W,q);tt.layers=this.layers,this.add(tt);let at=new g(cs,hs,W,q);at.layers=this.layers,this.add(at);let Mt=new g(cs,hs,W,q);Mt.layers=this.layers,this.add(Mt);let bt=new g(cs,hs,W,q);bt.layers=this.layers,this.add(bt);let Et=new g(cs,hs,W,q);Et.layers=this.layers,this.add(Et)}updateCoordinateSystem(){let W=this.coordinateSystem,q=this.children.concat(),[Y,Z,tt,at,Mt,bt]=q;for(let Et of q)this.remove(Et);if(W===2000)Y.up.set(0,1,0),Y.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),tt.up.set(0,0,-1),tt.lookAt(0,1,0),at.up.set(0,0,1),at.lookAt(0,-1,0),Mt.up.set(0,1,0),Mt.lookAt(0,0,1),bt.up.set(0,1,0),bt.lookAt(0,0,-1);else if(W===2001)Y.up.set(0,-1,0),Y.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),tt.up.set(0,0,1),tt.lookAt(0,1,0),at.up.set(0,0,-1),at.lookAt(0,-1,0),Mt.up.set(0,-1,0),Mt.lookAt(0,0,1),bt.up.set(0,-1,0),bt.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+W);for(let Et of q)this.add(Et),Et.updateMatrixWorld()}update(W,q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Y,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==W.coordinateSystem)this.coordinateSystem=W.coordinateSystem,this.updateCoordinateSystem();let[tt,at,Mt,bt,Et,At]=this.children,Ct=W.getRenderTarget(),It=W.getActiveCubeFace(),Rt=W.getActiveMipmapLevel(),Lt=W.xr.enabled;W.xr.enabled=!1;let Dt=Y.texture.mipmapsAutoUpdate;Y.texture.mipmapsAutoUpdate=!1;let Bt=!1;if(W.isWebGLRenderer===!0)Bt=W.state.buffers.depth.getReversed();else Bt=W.reversedDepthBuffer;if(W.setRenderTarget(Y,0,Z),Bt&&W.autoClear===!1)W.clearDepth();if(W.render(q,tt),W.setRenderTarget(Y,1,Z),Bt&&W.autoClear===!1)W.clearDepth();if(W.render(q,at),W.setRenderTarget(Y,2,Z),Bt&&W.autoClear===!1)W.clearDepth();if(W.render(q,Mt),W.setRenderTarget(Y,3,Z),Bt&&W.autoClear===!1)W.clearDepth();if(W.render(q,bt),W.setRenderTarget(Y,4,Z),Bt&&W.autoClear===!1)W.clearDepth();if(W.render(q,Et),Y.texture.mipmapsAutoUpdate=Dt,W.setRenderTarget(Y,5,Z),Bt&&W.autoClear===!1)W.clearDepth();W.render(q,At),W.setRenderTarget(Ct,It,Rt),W.xr.enabled=Lt,Y.texture.needsPMREMUpdate=!0}}class pl extends g{constructor(W=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=W}}class vt{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(W){if(this._document=W,W.hidden!==void 0)this._pageVisibilityHandler=xd.bind(this),W.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(W){return this._timescale=W,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(W){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(W!==void 0?W:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function xd(){if(this._document.hidden===!1)this.reset()}var ml="\\[\\]\\.:\\/",vd=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",yd="[^"+ml.replace("\\.","")+"]",Sd=/((?:WC+[\/:])*)/.source.replace("WC",gl),Md=/(WCOD+)?/.source.replace("WCOD",yd),bd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),Ed=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),Ad=new RegExp("^"+Sd+Md+bd+Ed+"$"),Td=["material","materials","bones","map"];class Ah{constructor(W,q,Y){let Z=Y||vn.parseTrackName(q);this._targetGroup=W,this._bindings=W.subscribe_(q,Z)}getValue(W,q){this.bind();let Y=this._targetGroup.nCachedObjects_,Z=this._bindings[Y];if(Z!==void 0)Z.getValue(W,q)}setValue(W,q){let Y=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,tt=Y.length;Z!==tt;++Z)Y[Z].setValue(W,q)}bind(){let W=this._bindings;for(let q=this._targetGroup.nCachedObjects_,Y=W.length;q!==Y;++q)W[q].bind()}unbind(){let W=this._bindings;for(let q=this._targetGroup.nCachedObjects_,Y=W.length;q!==Y;++q)W[q].unbind()}}class vn{constructor(W,q,Y){this.path=q,this.parsedPath=Y||vn.parseTrackName(q),this.node=vn.findNode(W,this.parsedPath.nodeName),this.rootNode=W,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(W,q,Y){if(!(W&&W.isAnimationObjectGroup))return new vn(W,q,Y);else return new vn.Composite(W,q,Y)}static sanitizeNodeName(W){return W.replace(/\s/g,"_").replace(vd,"")}static parseTrackName(W){let q=Ad.exec(W);if(q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+W);let Y={nodeName:q[2],objectName:q[3],objectIndex:q[4],propertyName:q[5],propertyIndex:q[6]},Z=Y.nodeName&&Y.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let tt=Y.nodeName.substring(Z+1);if(Td.indexOf(tt)!==-1)Y.nodeName=Y.nodeName.substring(0,Z),Y.objectName=tt}if(Y.propertyName===null||Y.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+W);return Y}static findNode(W,q){if(q===void 0||q===""||q==="."||q===-1||q===W.name||q===W.uuid)return W;if(W.skeleton){let Y=W.skeleton.getBoneByName(q);if(Y!==void 0)return Y}if(W.children){let Y=function(tt){for(let at=0;at<tt.length;at++){let Mt=tt[at];if(Mt.name===q||Mt.uuid===q)return Mt;let bt=Y(Mt.children);if(bt)return bt}return null},Z=Y(W.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(W,q){W[q]=this.targetObject[this.propertyName]}_getValue_array(W,q){let Y=this.resolvedProperty;for(let Z=0,tt=Y.length;Z!==tt;++Z)W[q++]=Y[Z]}_getValue_arrayElement(W,q){W[q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(W,q){this.resolvedProperty.toArray(W,q)}_setValue_direct(W,q){this.targetObject[this.propertyName]=W[q]}_setValue_direct_setNeedsUpdate(W,q){this.targetObject[this.propertyName]=W[q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(W,q){this.targetObject[this.propertyName]=W[q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(W,q){let Y=this.resolvedProperty;for(let Z=0,tt=Y.length;Z!==tt;++Z)Y[Z]=W[q++]}_setValue_array_setNeedsUpdate(W,q){let Y=this.resolvedProperty;for(let Z=0,tt=Y.length;Z!==tt;++Z)Y[Z]=W[q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(W,q){let Y=this.resolvedProperty;for(let Z=0,tt=Y.length;Z!==tt;++Z)Y[Z]=W[q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(W,q){this.resolvedProperty[this.propertyIndex]=W[q]}_setValue_arrayElement_setNeedsUpdate(W,q){this.resolvedProperty[this.propertyIndex]=W[q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(W,q){this.resolvedProperty[this.propertyIndex]=W[q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(W,q){this.resolvedProperty.fromArray(W,q)}_setValue_fromArray_setNeedsUpdate(W,q){this.resolvedProperty.fromArray(W,q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(W,q){this.resolvedProperty.fromArray(W,q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(W,q){this.bind(),this.getValue(W,q)}_setValue_unbound(W,q){this.bind(),this.setValue(W,q)}bind(){let W=this.node,q=this.parsedPath,{objectName:Y,propertyName:Z,propertyIndex:tt}=q;if(!W)W=vn.findNode(this.rootNode,q.nodeName),this.node=W;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!W){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(Y){let Et=q.objectIndex;switch(Y){case"materials":if(!W.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!W.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}W=W.material.materials;break;case"bones":if(!W.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}W=W.skeleton.bones;for(let At=0;At<W.length;At++)if(W[At].name===Et){Et=At;break}break;case"map":if("map"in W){W=W.map;break}if(!W.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!W.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}W=W.material.map;break;default:if(W[Y]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}W=W[Y]}if(Et!==void 0){if(W[Et]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,W);return}W=W[Et]}}let at=W[Z];if(at===void 0){let Et=q.nodeName;Qe("PropertyBinding: Trying to update property for track: "+Et+"."+Z+" but it wasn't found.",W);return}let Mt=this.Versioning.None;if(this.targetObject=W,W.isMaterial===!0)Mt=this.Versioning.NeedsUpdate;else if(W.isObject3D===!0)Mt=this.Versioning.MatrixWorldNeedsUpdate;let bt=this.BindingType.Direct;if(tt!==void 0){if(Z==="morphTargetInfluences"){if(!W.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!W.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(W.morphTargetDictionary[tt]!==void 0)tt=W.morphTargetDictionary[tt]}bt=this.BindingType.ArrayElement,this.resolvedProperty=at,this.propertyIndex=tt}else if(at.fromArray!==void 0&&at.toArray!==void 0)bt=this.BindingType.HasFromToArray,this.resolvedProperty=at;else if(Array.isArray(at))bt=this.BindingType.EntireArray,this.resolvedProperty=at;else this.propertyName=Z;this.getValue=this.GetterByBindingType[bt],this.setValue=this.SetterByBindingTypeAndVersioning[bt][Mt]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vn.Composite=Ah;vn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vn.prototype.GetterByBindingType=[vn.prototype._getValue_direct,vn.prototype._getValue_array,vn.prototype._getValue_arrayElement,vn.prototype._getValue_toArray];vn.prototype.SetterByBindingTypeAndVersioning=[[vn.prototype._setValue_direct,vn.prototype._setValue_direct_setNeedsUpdate,vn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_array,vn.prototype._setValue_array_setNeedsUpdate,vn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_arrayElement,vn.prototype._setValue_arrayElement_setNeedsUpdate,vn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_fromArray,vn.prototype._setValue_fromArray_setNeedsUpdate,vn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);class Th{static{this.prototype.isMatrix2=!0}constructor(W,q,Y,Z){if(this.elements=[1,0,0,1],W!==void 0)this.set(W,q,Y,Z)}identity(){return this.set(1,0,0,1),this}fromArray(W,q=0){for(let Y=0;Y<4;Y++)this.elements[Y]=W[Y+q];return this}set(W,q,Y,Z){let tt=this.elements;return tt[0]=W,tt[2]=q,tt[1]=Y,tt[3]=Z,this}}function _l(W,q,Y,Z){let tt=wd(Z);switch(Y){case 1021:return W*q;case 1028:return W*q/tt.components*tt.byteLength;case 1029:return W*q/tt.components*tt.byteLength;case 1030:return W*q*2/tt.components*tt.byteLength;case 1031:return W*q*2/tt.components*tt.byteLength;case 1022:return W*q*3/tt.components*tt.byteLength;case 1023:return W*q*4/tt.components*tt.byteLength;case 1033:return W*q*4/tt.components*tt.byteLength;case 33776:case 33777:return Math.floor((W+3)/4)*Math.floor((q+3)/4)*8;case 33778:case 33779:return Math.floor((W+3)/4)*Math.floor((q+3)/4)*16;case 35841:case 35843:return Math.max(W,16)*Math.max(q,8)/4;case 35840:case 35842:return Math.max(W,8)*Math.max(q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((W+3)/4)*Math.floor((q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((W+3)/4)*Math.floor((q+3)/4)*16;case 37808:return Math.floor((W+3)/4)*Math.floor((q+3)/4)*16;case 37809:return Math.floor((W+4)/5)*Math.floor((q+3)/4)*16;case 37810:return Math.floor((W+4)/5)*Math.floor((q+4)/5)*16;case 37811:return Math.floor((W+5)/6)*Math.floor((q+4)/5)*16;case 37812:return Math.floor((W+5)/6)*Math.floor((q+5)/6)*16;case 37813:return Math.floor((W+7)/8)*Math.floor((q+4)/5)*16;case 37814:return Math.floor((W+7)/8)*Math.floor((q+5)/6)*16;case 37815:return Math.floor((W+7)/8)*Math.floor((q+7)/8)*16;case 37816:return Math.floor((W+9)/10)*Math.floor((q+4)/5)*16;case 37817:return Math.floor((W+9)/10)*Math.floor((q+5)/6)*16;case 37818:return Math.floor((W+9)/10)*Math.floor((q+7)/8)*16;case 37819:return Math.floor((W+9)/10)*Math.floor((q+9)/10)*16;case 37820:return Math.floor((W+11)/12)*Math.floor((q+9)/10)*16;case 37821:return Math.floor((W+11)/12)*Math.floor((q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(W/4)*Math.ceil(q/4)*16;case 36283:case 36284:return Math.ceil(W/4)*Math.ceil(q/4)*8;case 36285:case 36286:return Math.ceil(W/4)*Math.ceil(q/4)*16}throw Error(`Unable to determine texture byte length for ${Y} format.`)}function wd(W){switch(W){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${W}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187dev"}}));if(typeof window<"u")if(window.__THREE__)Ke("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187dev";function Zh(){let W=null,q=!1,Y=null,Z=null;function tt(at,Mt){Z=W.requestAnimationFrame(tt),Y(at,Mt)}return{start:function(){if(q===!0)return;if(Y===null)return;if(W===null)return;Z=W.requestAnimationFrame(tt),q=!0},stop:function(){if(W!==null)W.cancelAnimationFrame(Z);q=!1},setAnimationLoop:function(at){Y=at},setContext:function(at){W=at}}}function Rd(W){let q=new WeakMap;function Y(bt,Et){let{array:At,usage:Ct}=bt,It=At.byteLength,Rt=W.createBuffer();W.bindBuffer(Et,Rt),W.bufferData(Et,At,Ct),bt.onUploadCallback();let Lt;if(At instanceof Float32Array)Lt=W.FLOAT;else if(typeof Float16Array<"u"&&At instanceof Float16Array)Lt=W.HALF_FLOAT;else if(At instanceof Uint16Array)if(bt.isFloat16BufferAttribute)Lt=W.HALF_FLOAT;else Lt=W.UNSIGNED_SHORT;else if(At instanceof Int16Array)Lt=W.SHORT;else if(At instanceof Uint32Array)Lt=W.UNSIGNED_INT;else if(At instanceof Int32Array)Lt=W.INT;else if(At instanceof Int8Array)Lt=W.BYTE;else if(At instanceof Uint8Array)Lt=W.UNSIGNED_BYTE;else if(At instanceof Uint8ClampedArray)Lt=W.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+At);return{buffer:Rt,type:Lt,bytesPerElement:At.BYTES_PER_ELEMENT,version:bt.version,size:It}}function Z(bt,Et,At){let{array:Ct,updateRanges:It}=Et;if(W.bindBuffer(At,bt),It.length===0)W.bufferSubData(At,0,Ct);else{It.sort((Lt,Dt)=>Lt.start-Dt.start);let Rt=0;for(let Lt=1;Lt<It.length;Lt++){let Dt=It[Rt],Bt=It[Lt];if(Bt.start<=Dt.start+Dt.count+1)Dt.count=Math.max(Dt.count,Bt.start+Bt.count-Dt.start);else++Rt,It[Rt]=Bt}It.length=Rt+1;for(let Lt=0,Dt=It.length;Lt<Dt;Lt++){let Bt=It[Lt];W.bufferSubData(At,Bt.start*Ct.BYTES_PER_ELEMENT,Ct,Bt.start,Bt.count)}Et.clearUpdateRanges()}Et.onUploadCallback()}function tt(bt){if(bt.isInterleavedBufferAttribute)bt=bt.data;return q.get(bt)}function at(bt){if(bt.isInterleavedBufferAttribute)bt=bt.data;let Et=q.get(bt);if(Et)W.deleteBuffer(Et.buffer),q.delete(bt)}function Mt(bt,Et){if(bt.isInterleavedBufferAttribute)bt=bt.data;if(bt.isGLBufferAttribute){let Ct=q.get(bt);if(!Ct||Ct.version<bt.version)q.set(bt,{buffer:bt.buffer,type:bt.type,bytesPerElement:bt.elementSize,version:bt.version});return}let At=q.get(bt);if(At===void 0)q.set(bt,Y(bt,Et));else if(At.version<bt.version){if(At.size!==bt.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(At.buffer,bt,Et),At.version=bt.version}}return{get:tt,remove:at,update:Mt}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$p=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,on={alphahash_fragment:Cd,alphahash_pars_fragment:Id,alphamap_fragment:Pd,alphamap_pars_fragment:Ld,alphatest_fragment:Nd,alphatest_pars_fragment:Dd,aomap_fragment:Ud,aomap_pars_fragment:Fd,batching_pars_vertex:Od,batching_vertex:Bd,begin_vertex:zd,beginnormal_vertex:Gd,bsdfs:kd,iridescence_fragment:Hd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Yd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:$d,color_vertex:Kd,common:Qd,defaultnormal_vertex:jd,displacementmap_pars_vertex:tf,displacementmap_vertex:ef,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:af,envmap_fragment:of,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Sf,envmap_vertex:uf,fog_vertex:df,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:xf,lights_lambert_pars_fragment:vf,lights_pars_begin:yf,lights_toon_fragment:Mf,lights_toon_pars_fragment:bf,lights_phong_fragment:Ef,lights_phong_pars_fragment:Af,lights_physical_fragment:Tf,lights_physical_pars_fragment:wf,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:If,lightprobes_pars_fragment:Pf,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:Uf,map_fragment:Ff,map_pars_fragment:Of,map_particle_fragment:Bf,map_particle_pars_fragment:zf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Hf,morphcolor_vertex:Wf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Xf,morphtarget_vertex:qf,normal_fragment_begin:Yf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:$f,normal_vertex:Kf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:ap,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:dp,shadowmap_vertex:fp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:_p,skinnormal_vertex:xp,specularmap_fragment:vp,specularmap_pars_fragment:yp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Mp,transmission_fragment:bp,transmission_pars_fragment:Ep,uv_pars_fragment:Ap,uv_pars_vertex:Tp,uv_vertex:wp,worldpos_vertex:Rp,background_vert:Cp,background_frag:Ip,backgroundCube_vert:Pp,backgroundCube_frag:Lp,cube_vert:Np,cube_frag:Dp,depth_vert:Up,depth_frag:Fp,distance_vert:Op,distance_frag:Bp,equirect_vert:zp,equirect_frag:Gp,linedashed_vert:kp,linedashed_frag:Hp,meshbasic_vert:Wp,meshbasic_frag:Vp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:$p,meshphong_vert:Kp,meshphong_frag:Qp,meshphysical_vert:jp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:am,sprite_vert:om,sprite_frag:lm},Ie={common:{diffuse:{value:new n(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tn},alphaMap:{value:null},alphaMapTransform:{value:new tn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tn}},envmap:{envMap:{value:null},envMapRotation:{value:new tn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tn},normalScale:{value:new e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new n(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new t},probesMax:{value:new t},probesResolution:{value:new t}},points:{diffuse:{value:new n(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tn},alphaTest:{value:0},uvTransform:{value:new tn}},sprite:{diffuse:{value:new n(16777215)},opacity:{value:1},center:{value:new e(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tn},alphaMap:{value:null},alphaMapTransform:{value:new tn},alphaTest:{value:0}}},fi={basic:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:on.meshbasic_vert,fragmentShader:on.meshbasic_frag},lambert:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new n(0)},envMapIntensity:{value:1}}]),vertexShader:on.meshlambert_vert,fragmentShader:on.meshlambert_frag},phong:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new n(0)},specular:{value:new n(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:on.meshphong_vert,fragmentShader:on.meshphong_frag},standard:{uniforms:Vn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new n(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:on.meshphysical_vert,fragmentShader:on.meshphysical_frag},toon:{uniforms:Vn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new n(0)}}]),vertexShader:on.meshtoon_vert,fragmentShader:on.meshtoon_frag},matcap:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:on.meshmatcap_vert,fragmentShader:on.meshmatcap_frag},points:{uniforms:Vn([Ie.points,Ie.fog]),vertexShader:on.points_vert,fragmentShader:on.points_frag},dashed:{uniforms:Vn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:on.linedashed_vert,fragmentShader:on.linedashed_frag},depth:{uniforms:Vn([Ie.common,Ie.displacementmap]),vertexShader:on.depth_vert,fragmentShader:on.depth_frag},normal:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:on.meshnormal_vert,fragmentShader:on.meshnormal_frag},sprite:{uniforms:Vn([Ie.sprite,Ie.fog]),vertexShader:on.sprite_vert,fragmentShader:on.sprite_frag},background:{uniforms:{uvTransform:{value:new tn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:on.background_vert,fragmentShader:on.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tn}},vertexShader:on.backgroundCube_vert,fragmentShader:on.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:on.cube_vert,fragmentShader:on.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:on.equirect_vert,fragmentShader:on.equirect_frag},distance:{uniforms:Vn([Ie.common,Ie.displacementmap,{referencePosition:{value:new t},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:on.distance_vert,fragmentShader:on.distance_frag},shadow:{uniforms:Vn([Ie.lights,Ie.fog,{color:{value:new n(0)},opacity:{value:1}}]),vertexShader:on.shadow_vert,fragmentShader:on.shadow_frag}};fi.physical={uniforms:Vn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tn},clearcoatNormalScale:{value:new e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tn},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tn},sheen:{value:0},sheenColor:{value:new n(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tn},transmissionSamplerSize:{value:new e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tn},attenuationDistance:{value:0},attenuationColor:{value:new n(0)},specularColor:{value:new n(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tn},anisotropyVector:{value:new e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tn}}]),vertexShader:on.meshphysical_vert,fragmentShader:on.meshphysical_frag};var ua={r:0,b:0,g:0},cm=new o,Jh=new tn;Jh.set(-1,0,0,0,1,0,0,0,1);function hm(W,q,Y,Z,tt,at){let Mt=new n(0),bt=tt===!0?0:1,Et,At,Ct=null,It=0,Rt=null;function Lt(Gt){let Wt=Gt.isScene===!0?Gt.background:null;if(Wt&&Wt.isTexture){let zt=Gt.backgroundBlurriness>0;Wt=q.get(Wt,zt)}return Wt}function Dt(Gt){let Wt=!1,zt=Lt(Gt);if(zt===null)Pt(Mt,bt);else if(zt&&zt.isColor)Pt(zt,1),Wt=!0;let Ht=W.xr.getEnvironmentBlendMode();if(Ht==="additive")Y.buffers.color.setClear(0,0,0,1,at);else if(Ht==="alpha-blend")Y.buffers.color.setClear(0,0,0,0,at);if(W.autoClear||Wt)Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),W.clear(W.autoClearColor,W.autoClearDepth,W.autoClearStencil)}function Bt(Gt,Wt){let zt=Lt(Wt);if(zt&&zt.isCubeTexture){if(At===void 0)At=new i(new S(1,1,1),new d({name:"BackgroundCubeMaterial",uniforms:Yi(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),At.geometry.deleteAttribute("normal"),At.geometry.deleteAttribute("uv"),At.onBeforeRender=function(Ht,qt,Nt){this.matrixWorld.copyPosition(Nt.matrixWorld)},Object.defineProperty(At.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(At);if(At.material.uniforms.envMap.value=zt,At.material.uniforms.backgroundBlurriness.value=Wt.backgroundBlurriness,At.material.uniforms.backgroundIntensity.value=Wt.backgroundIntensity,At.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(Wt.backgroundRotation)).transpose(),zt.isRenderTargetTexture===!1)At.material.uniforms.backgroundRotation.value.premultiply(Jh);if(At.material.toneMapped=r.getTransfer(zt.colorSpace)!==a,Ct!==zt||It!==zt.version||Rt!==W.toneMapping)At.material.needsUpdate=!0,Ct=zt,It=zt.version,Rt=W.toneMapping;At.layers.enableAll(),Gt.unshift(At,At.geometry,At.material,0,0,null)}else if(zt&&zt.isTexture){if(Et===void 0)Et=new i(new b(2,2),new d({name:"BackgroundMaterial",uniforms:Yi(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),Et.geometry.deleteAttribute("normal"),Object.defineProperty(Et.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(Et);if(Et.material.uniforms.t2D.value=zt,Et.material.uniforms.backgroundIntensity.value=Wt.backgroundIntensity,Et.material.toneMapped=r.getTransfer(zt.colorSpace)!==a,zt.matrixAutoUpdate===!0)zt.updateMatrix();if(Et.material.uniforms.uvTransform.value.copy(zt.matrix),Ct!==zt||It!==zt.version||Rt!==W.toneMapping)Et.material.needsUpdate=!0,Ct=zt,It=zt.version,Rt=W.toneMapping;Et.layers.enableAll(),Gt.unshift(Et,Et.geometry,Et.material,0,0,null)}}function Pt(Gt,Wt){Gt.getRGB(ua,el(W)),Y.buffers.color.setClear(ua.r,ua.g,ua.b,Wt,at)}function wt(){if(At!==void 0)At.geometry.dispose(),At.material.dispose(),At=void 0;if(Et!==void 0)Et.geometry.dispose(),Et.material.dispose(),Et=void 0}return{getClearColor:function(){return Mt},setClearColor:function(Gt,Wt=1){Mt.set(Gt),bt=Wt,Pt(Mt,bt)},getClearAlpha:function(){return bt},setClearAlpha:function(Gt){bt=Gt,Pt(Mt,bt)},render:Dt,addToRenderList:Bt,dispose:wt}}function um(W,q){let Y=W.getParameter(W.MAX_VERTEX_ATTRIBS),Z={},tt=Rt(null),at=tt,Mt=!1;function bt(Zt,ee,he,Xt,ae){let le=!1,te=It(Zt,Xt,he,ee);if(at!==te)at=te,At(at.object);if(le=Lt(Zt,Xt,he,ae),le)Dt(Zt,Xt,he,ae);if(ae!==null)q.update(ae,W.ELEMENT_ARRAY_BUFFER);if(le||Mt){if(Mt=!1,zt(Zt,ee,he,Xt),ae!==null)W.bindBuffer(W.ELEMENT_ARRAY_BUFFER,q.get(ae).buffer)}}function Et(){return W.createVertexArray()}function At(Zt){return W.bindVertexArray(Zt)}function Ct(Zt){return W.deleteVertexArray(Zt)}function It(Zt,ee,he,Xt){let ae=Xt.wireframe===!0,le=Z[ee.id];if(le===void 0)le={},Z[ee.id]=le;let te=Zt.isInstancedMesh===!0?Zt.id:0,Me=le[te];if(Me===void 0)Me={},le[te]=Me;let se=Me[he.id];if(se===void 0)se={},Me[he.id]=se;let de=se[ae];if(de===void 0)de=Rt(Et()),se[ae]=de;return de}function Rt(Zt){let ee=[],he=[],Xt=[];for(let ae=0;ae<Y;ae++)ee[ae]=0,he[ae]=0,Xt[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:he,attributeDivisors:Xt,object:Zt,attributes:{},index:null}}function Lt(Zt,ee,he,Xt){let ae=at.attributes,le=ee.attributes,te=0,Me=he.getAttributes();for(let se in Me)if(Me[se].location>=0){let ye=ae[se],Oe=le[se];if(Oe===void 0){if(se==="instanceMatrix"&&Zt.instanceMatrix)Oe=Zt.instanceMatrix;if(se==="instanceColor"&&Zt.instanceColor)Oe=Zt.instanceColor}if(ye===void 0)return!0;if(ye.attribute!==Oe)return!0;if(Oe&&ye.data!==Oe.data)return!0;te++}if(at.attributesNum!==te)return!0;if(at.index!==Xt)return!0;return!1}function Dt(Zt,ee,he,Xt){let ae={},le=ee.attributes,te=0,Me=he.getAttributes();for(let se in Me)if(Me[se].location>=0){let ye=le[se];if(ye===void 0){if(se==="instanceMatrix"&&Zt.instanceMatrix)ye=Zt.instanceMatrix;if(se==="instanceColor"&&Zt.instanceColor)ye=Zt.instanceColor}let Oe={};if(Oe.attribute=ye,ye&&ye.data)Oe.data=ye.data;ae[se]=Oe,te++}at.attributes=ae,at.attributesNum=te,at.index=Xt}function Bt(){let Zt=at.newAttributes;for(let ee=0,he=Zt.length;ee<he;ee++)Zt[ee]=0}function Pt(Zt){wt(Zt,0)}function wt(Zt,ee){let he=at.newAttributes,Xt=at.enabledAttributes,ae=at.attributeDivisors;if(he[Zt]=1,Xt[Zt]===0)W.enableVertexAttribArray(Zt),Xt[Zt]=1;if(ae[Zt]!==ee)W.vertexAttribDivisor(Zt,ee),ae[Zt]=ee}function Gt(){let Zt=at.newAttributes,ee=at.enabledAttributes;for(let he=0,Xt=ee.length;he<Xt;he++)if(ee[he]!==Zt[he])W.disableVertexAttribArray(he),ee[he]=0}function Wt(Zt,ee,he,Xt,ae,le,te){if(te===!0)W.vertexAttribIPointer(Zt,ee,he,ae,le);else W.vertexAttribPointer(Zt,ee,he,Xt,ae,le)}function zt(Zt,ee,he,Xt){Bt();let ae=Xt.attributes,le=he.getAttributes(),te=ee.defaultAttributeValues;for(let Me in le){let se=le[Me];if(se.location>=0){let de=ae[Me];if(de===void 0){if(Me==="instanceMatrix"&&Zt.instanceMatrix)de=Zt.instanceMatrix;if(Me==="instanceColor"&&Zt.instanceColor)de=Zt.instanceColor}if(de!==void 0){let ye=de.normalized,Oe=de.itemSize,fe=q.get(de);if(fe===void 0)continue;let{buffer:xe,type:ze,bytesPerElement:Ye}=fe,Ze=ze===W.INT||ze===W.UNSIGNED_INT||de.gpuType===Qa;if(de.isInterleavedBufferAttribute){let Ne=de.data,fn=Ne.stride,rn=de.offset;if(Ne.isInstancedInterleavedBuffer){for(let $e=0;$e<se.locationSize;$e++)wt(se.location+$e,Ne.meshPerAttribute);if(Zt.isInstancedMesh!==!0&&Xt._maxInstanceCount===void 0)Xt._maxInstanceCount=Ne.meshPerAttribute*Ne.count}else for(let $e=0;$e<se.locationSize;$e++)Pt(se.location+$e);W.bindBuffer(W.ARRAY_BUFFER,xe);for(let $e=0;$e<se.locationSize;$e++)Wt(se.location+$e,Oe/se.locationSize,ze,ye,fn*Ye,(rn+Oe/se.locationSize*$e)*Ye,Ze)}else{if(de.isInstancedBufferAttribute){for(let Ne=0;Ne<se.locationSize;Ne++)wt(se.location+Ne,de.meshPerAttribute);if(Zt.isInstancedMesh!==!0&&Xt._maxInstanceCount===void 0)Xt._maxInstanceCount=de.meshPerAttribute*de.count}else for(let Ne=0;Ne<se.locationSize;Ne++)Pt(se.location+Ne);W.bindBuffer(W.ARRAY_BUFFER,xe);for(let Ne=0;Ne<se.locationSize;Ne++)Wt(se.location+Ne,Oe/se.locationSize,ze,ye,Oe*Ye,Oe/se.locationSize*Ne*Ye,Ze)}}else if(te!==void 0){let ye=te[Me];if(ye!==void 0)switch(ye.length){case 2:W.vertexAttrib2fv(se.location,ye);break;case 3:W.vertexAttrib3fv(se.location,ye);break;case 4:W.vertexAttrib4fv(se.location,ye);break;default:W.vertexAttrib1fv(se.location,ye)}}}}Gt()}function Ht(){Yt();for(let Zt in Z){let ee=Z[Zt];for(let he in ee){let Xt=ee[he];for(let ae in Xt){let le=Xt[ae];for(let te in le)Ct(le[te].object),delete le[te];delete Xt[ae]}}delete Z[Zt]}}function qt(Zt){if(Z[Zt.id]===void 0)return;let ee=Z[Zt.id];for(let he in ee){let Xt=ee[he];for(let ae in Xt){let le=Xt[ae];for(let te in le)Ct(le[te].object),delete le[te];delete Xt[ae]}}delete Z[Zt.id]}function Nt(Zt){for(let ee in Z){let he=Z[ee];for(let Xt in he){let ae=he[Xt];if(ae[Zt.id]===void 0)continue;let le=ae[Zt.id];for(let te in le)Ct(le[te].object),delete le[te];delete ae[Zt.id]}}}function Ot(Zt){for(let ee in Z){let he=Z[ee],Xt=Zt.isInstancedMesh===!0?Zt.id:0,ae=he[Xt];if(ae===void 0)continue;for(let le in ae){let te=ae[le];for(let Me in te)Ct(te[Me].object),delete te[Me];delete ae[le]}if(delete he[Xt],Object.keys(he).length===0)delete Z[ee]}}function Yt(){if(ie(),Mt=!0,at===tt)return;at=tt,At(at.object)}function ie(){tt.geometry=null,tt.program=null,tt.wireframe=!1}return{setup:bt,reset:Yt,resetDefaultState:ie,dispose:Ht,releaseStatesOfGeometry:qt,releaseStatesOfObject:Ot,releaseStatesOfProgram:Nt,initAttributes:Bt,enableAttribute:Pt,disableUnusedAttributes:Gt}}function dm(W,q,Y){let Z;function tt(Et){Z=Et}function at(Et,At){W.drawArrays(Z,Et,At),Y.update(At,Z,1)}function Mt(Et,At,Ct){if(Ct===0)return;W.drawArraysInstanced(Z,Et,At,Ct),Y.update(At,Z,Ct)}function bt(Et,At,Ct){if(Ct===0)return;q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,Et,0,At,0,Ct);let Rt=0;for(let Lt=0;Lt<Ct;Lt++)Rt+=At[Lt];Y.update(Rt,Z,1)}this.setMode=tt,this.render=at,this.renderInstances=Mt,this.renderMultiDraw=bt}function fm(W,q,Y,Z){let tt;function at(){if(tt!==void 0)return tt;if(q.has("EXT_texture_filter_anisotropic")===!0){let Nt=q.get("EXT_texture_filter_anisotropic");tt=W.getParameter(Nt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else tt=0;return tt}function Mt(Nt){if(Nt!==Mi&&Z.convert(Nt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function bt(Nt){let Ot=Nt===x&&(q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float"));if(Nt!==ri&&Nt!==Si&&!Ot&&Z.convert(Nt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function Et(Nt){if(Nt==="highp"){if(W.getShaderPrecisionFormat(W.VERTEX_SHADER,W.HIGH_FLOAT).precision>0&&W.getShaderPrecisionFormat(W.FRAGMENT_SHADER,W.HIGH_FLOAT).precision>0)return"highp";Nt="mediump"}if(Nt==="mediump"){if(W.getShaderPrecisionFormat(W.VERTEX_SHADER,W.MEDIUM_FLOAT).precision>0&&W.getShaderPrecisionFormat(W.FRAGMENT_SHADER,W.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let At=Y.precision!==void 0?Y.precision:"highp",Ct=Et(At);if(Ct!==At)Ke("WebGLRenderer:",At,"not supported, using",Ct,"instead."),At=Ct;let It=Y.logarithmicDepthBuffer===!0,Rt=Y.reversedDepthBuffer===!0&&q.has("EXT_clip_control");if(Y.reversedDepthBuffer===!0&&Rt===!1)Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let Lt=W.getParameter(W.MAX_TEXTURE_IMAGE_UNITS),Dt=W.getParameter(W.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Bt=W.getParameter(W.MAX_TEXTURE_SIZE),Pt=W.getParameter(W.MAX_CUBE_MAP_TEXTURE_SIZE),wt=W.getParameter(W.MAX_VERTEX_ATTRIBS),Gt=W.getParameter(W.MAX_VERTEX_UNIFORM_VECTORS),Wt=W.getParameter(W.MAX_VARYING_VECTORS),zt=W.getParameter(W.MAX_FRAGMENT_UNIFORM_VECTORS),Ht=W.getParameter(W.MAX_SAMPLES),qt=W.getParameter(W.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:at,getMaxPrecision:Et,textureFormatReadable:Mt,textureTypeReadable:bt,precision:At,logarithmicDepthBuffer:It,reversedDepthBuffer:Rt,maxTextures:Lt,maxVertexTextures:Dt,maxTextureSize:Bt,maxCubemapSize:Pt,maxAttributes:wt,maxVertexUniforms:Gt,maxVaryings:Wt,maxFragmentUniforms:zt,maxSamples:Ht,samples:qt}}function pm(W){let q=this,Y=null,Z=0,tt=!1,at=!1,Mt=new li,bt=new tn,Et={value:null,needsUpdate:!1};this.uniform=Et,this.numPlanes=0,this.numIntersection=0,this.init=function(It,Rt){let Lt=It.length!==0||Rt||Z!==0||tt;return tt=Rt,Z=It.length,Lt},this.beginShadows=function(){at=!0,Ct(null)},this.endShadows=function(){at=!1},this.setGlobalState=function(It,Rt){Y=Ct(It,Rt,0)},this.setState=function(It,Rt,Lt){let{clippingPlanes:Dt,clipIntersection:Bt,clipShadows:Pt}=It,wt=W.get(It);if(!tt||Dt===null||Dt.length===0||at&&!Pt)if(at)Ct(null);else At();else{let Gt=at?0:Z,Wt=Gt*4,zt=wt.clippingState||null;Et.value=zt,zt=Ct(Dt,Rt,Wt,Lt);for(let Ht=0;Ht!==Wt;++Ht)zt[Ht]=Y[Ht];wt.clippingState=zt,this.numIntersection=Bt?this.numPlanes:0,this.numPlanes+=Gt}};function At(){if(Et.value!==Y)Et.value=Y,Et.needsUpdate=Z>0;q.numPlanes=Z,q.numIntersection=0}function Ct(It,Rt,Lt,Dt){let Bt=It!==null?It.length:0,Pt=null;if(Bt!==0){if(Pt=Et.value,Dt!==!0||Pt===null){let wt=Lt+Bt*4,Gt=Rt.matrixWorldInverse;if(bt.getNormalMatrix(Gt),Pt===null||Pt.length<wt)Pt=new Float32Array(wt);for(let Wt=0,zt=Lt;Wt!==Bt;++Wt,zt+=4)Mt.copy(It[Wt]).applyMatrix4(Gt,bt),Mt.normal.toArray(Pt,zt),Pt[zt+3]=Mt.constant}Et.value=Pt,Et.needsUpdate=!0}return q.numPlanes=Bt,q.numIntersection=0,Pt}}class fa extends m{constructor(W=1,q={}){super(W,W,q);this.isWebGLCubeRenderTarget=!0;let Y={width:W,height:W,depth:1},Z=[Y,Y,Y,Y,Y,Y];this.texture=new jr(Z),this._setTextureOptions(q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(W,q){this.texture.type=q.type,this.texture.colorSpace=q.colorSpace,this.texture.generateMipmaps=q.generateMipmaps,this.texture.minFilter=q.minFilter,this.texture.magFilter=q.magFilter;let Y={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new S(5,5,5),tt=new d({name:"CubemapFromEquirect",uniforms:Yi(Y.uniforms),vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader,side:Wn,blending:B});tt.uniforms.tEquirect.value=q;let at=new i(Z,tt),Mt=q.minFilter;if(q.minFilter===Pi)q.minFilter=Kn;return new $s(1,10,this).update(W,at),q.minFilter=Mt,at.geometry.dispose(),at.material.dispose(),this}clear(W,q=!0,Y=!0,Z=!0){let tt=W.getRenderTarget();for(let at=0;at<6;at++)W.setRenderTarget(this,at),W.clear(q,Y,Z);W.setRenderTarget(tt)}}var wh=256,mm=3,gm=20,$h=256,Kh=16,_m=3,xm=new t,vm=new n;class Ss{constructor(W){this._renderer=W,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $s(1,10,null),this._boxMesh=new i(new S(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(W,q=0,Y=0.1,Z=100,tt={}){let{size:at=256,position:Mt=xm}=tt,bt=this._renderer;this._setSize(at);let Et=this._allocateTarget(),At=this._getSourceTarget(!0);if(q>0)At.texture.mipmapsAutoUpdate=!1;let{autoClear:Ct,autoClearColor:It,autoClearDepth:Rt,autoClearStencil:Lt}=bt,Dt=W.background;if(bt.autoClear=!0,bt.autoClearColor=!0,bt.autoClearDepth=!0,bt.autoClearStencil=!0,Dt===null)W.background=bt.getClearColor(vm);let Bt=new $s(Y,Z,At);if(Bt.position.copy(Mt),Bt.update(bt,W),bt.autoClear=Ct,bt.autoClearColor=It,bt.autoClearDepth=Rt,bt.autoClearStencil=Lt,W.background=Dt,q>0)At.texture.mipmapsAutoUpdate=!0,this._blur(Et,q);return this._applyPMREM(Et),Et}fromEquirectangular(W,q=null){return this._fromTexture(W,q)}fromCubemap(W,q=null){return this._fromTexture(W,q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(W,q){return q>0?1-Math.sqrt(1-W/q):0}_setSize(W){this._cubeSize=Math.max(wh,ph(W))}_fromTexture(W,q){if(W.mapping===Ws||W.mapping===_s)this._setSize(W.image.length===0?wh:W.image[0].width||W.image[0].image.width);else this._setSize(W.image.width/4);let Y=q||this._allocateTarget();return this._textureToCubemap(W),this._applyPMREM(Y),Y}_allocateTarget(){let W=this._cubeSize,q=Rh(W,!1,!1),Y=Math.log2(W)-mm;for(let Z=0;Z<=Y;Z++)q.texture.mipmaps.push({width:W>>Z,height:W>>Z});return q.texture.name="PMREM",q.texture.isPMREMTexture=!0,q}_getSourceTarget(W=!1){let q=this._cubeSize,Y=this._sourceTarget;if(Y===null||Y.width!==q||W&&Y.depthBuffer===!1){if(Y!==null)Y.dispose();this._sourceTarget=Rh(q,!0,W)}return this._sourceTarget}_compileMaterial(W){this._boxMesh.material=W,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(W,q,Y){let Z=this._boxMesh,tt=this._cubeCamera;Z.material=Y,tt.renderTarget=W,tt.activeMipmapLevel=q;let at=W.width>>q;W.viewport.set(0,0,at,at),tt.update(this._renderer,Z),W.viewport.set(0,0,W.width,W.height)}_textureToCubemap(W){let q;if(W.mapping===Ws||W.mapping===_s){if(this._cubemapMaterial===null)this._cubemapMaterial=Ih();q=this._cubemapMaterial,q.uniforms.flipEnvMap.value=W.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Ch();q=this._equirectMaterial}q.uniforms.envMap.value=W,this._renderCube(this._getSourceTarget(),0,q)}_applyPMREM(W){if(this._ggxMaterial===null)this._ggxMaterial=ym(),this._integrationMaterial=Sm();let q=this._cubeSize,Y=W.texture.mipmaps.length-1,Z=this._ggxMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture;let tt=this._integrationMaterial.uniforms;tt.envMap.value=this._sourceTarget.texture,tt.sourceLod.value=Math.log2(q/Kh);for(let at=0;at<=Y;at++){let Mt=Ss.lodToRoughness(at,Y);if(at>Y-_m)tt.roughness.value=Mt,this._renderCube(W,at,this._integrationMaterial);else{let bt=Mt>0?Math.log2(q)+0.5*Math.log2(6/($h*Math.pow(Mt,4)))+0.5:0;Z.roughness.value=Mt,Z.lodBias.value=bt,this._renderCube(W,at,this._ggxMaterial)}}}_blur(W,q){if(this._blurMaterial===null)this._blurMaterial=Mm();let Y=this._blurMaterial,Z=Y.uniforms,tt=this._sourceTarget;Z.sigma.value=Math.min(q,Math.PI)/Math.SQRT2,Z.envMap.value=tt.texture,this._renderCube(W,0,Y),Z.envMap.value=W.texture,this._renderCube(tt,0,Y)}}function Rh(W,q,Y){return new fa(W,{minFilter:Pi,generateMipmaps:q,type:x,colorSpace:Fo,depthBuffer:Y})}function tr(W,q,Y){return new d({name:W,uniforms:q,vertexShader:on.cube_vert,fragmentShader:Y,side:Wn,blending:B,depthTest:!1,depthWrite:!1})}function ym(){return tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$h}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sm(){return tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Mm(){return tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ch(){return tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ih(){return tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bm(W){let q=new WeakMap,Y=new WeakMap,Z=null;function tt(Rt,Lt=!1){if(Rt===null||Rt===void 0)return null;if(Lt)return Mt(Rt);return at(Rt)}function at(Rt){if(Rt&&Rt.isTexture){let Lt=Rt.mapping;if(Lt===Or||Lt===Br)if(q.has(Rt)){let Dt=q.get(Rt).texture;return bt(Dt,Rt.mapping)}else{let Dt=Rt.image;if(Dt&&Dt.height>0){let Bt=new fa(Dt.height);return Bt.fromEquirectangularTexture(W,Rt),q.set(Rt,Bt),Rt.addEventListener("dispose",At),bt(Bt.texture,Rt.mapping)}else return null}}return Rt}function Mt(Rt){if(Rt&&Rt.isTexture&&Rt.isPMREMTexture!==!0){let Lt=Rt.mapping,Dt=Lt===Or||Lt===Br,Bt=Lt===Ws||Lt===_s;if(Dt||Bt){let Pt=Y.get(Rt),wt=Pt!==void 0?Pt.texture.pmremVersion:0;if(Rt.isRenderTargetTexture&&Rt.pmremVersion!==wt){if(Z===null)Z=new Ss(W);return Pt=Dt?Z.fromEquirectangular(Rt,Pt):Z.fromCubemap(Rt,Pt),Pt.texture.pmremVersion=Rt.pmremVersion,Y.set(Rt,Pt),Pt.texture}else if(Pt!==void 0)return Pt.texture;else{let Gt=Rt.image;if(Dt&&Gt&&Gt.height>0||Bt&&Gt&&Et(Gt)){if(Z===null)Z=new Ss(W);return Pt=Dt?Z.fromEquirectangular(Rt):Z.fromCubemap(Rt),Pt.texture.pmremVersion=Rt.pmremVersion,Y.set(Rt,Pt),Rt.addEventListener("dispose",Ct),Pt.texture}else return null}}}return Rt}function bt(Rt,Lt){if(Lt===Or)Rt.mapping=Ws;else if(Lt===Br)Rt.mapping=_s;return Rt}function Et(Rt){let Lt=0,Dt=6;for(let Bt=0;Bt<Dt;Bt++)if(Rt[Bt]!==void 0)Lt++;return Lt===Dt}function At(Rt){let Lt=Rt.target;Lt.removeEventListener("dispose",At);let Dt=q.get(Lt);if(Dt!==void 0)q.delete(Lt),Dt.dispose()}function Ct(Rt){let Lt=Rt.target;Lt.removeEventListener("dispose",Ct);let Dt=Y.get(Lt);if(Dt!==void 0)Y.delete(Lt),Dt.dispose()}function It(){if(q=new WeakMap,Y=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:tt,dispose:It}}function Em(W){let q={};function Y(Z){if(q[Z]!==void 0)return q[Z];let tt=W.getExtension(Z);return q[Z]=tt,tt}return{has:function(Z){return Y(Z)!==null},init:function(){Y("EXT_color_buffer_float"),Y("WEBGL_clip_cull_distance"),Y("OES_texture_float_linear"),Y("EXT_color_buffer_half_float"),Y("WEBGL_multisampled_render_to_texture"),Y("WEBGL_render_shared_exponent")},get:function(Z){let tt=Y(Z);if(tt===null)Ds("WebGLRenderer: "+Z+" extension not supported.");return tt}}}function Am(W,q,Y,Z){let tt={},at=new WeakMap,Mt=new FinalizationRegistry((Dt)=>delete tt[Dt]);function bt(Dt){Et(Dt.target)}function Et(Dt){if(Dt.index!==null)q.remove(Dt.index);for(let Pt in Dt.attributes)q.remove(Dt.attributes[Pt]);Dt.removeEventListener("dispose",bt),delete tt[Dt.id],Mt.unregister(Dt);let Bt=at.get(Dt);if(Bt)q.remove(Bt),at.delete(Dt);if(Z.releaseStatesOfGeometry(Dt),Dt.isInstancedBufferGeometry===!0)delete Dt._maxInstanceCount;Y.memory.geometries--}function At(Dt,Bt){if(tt[Bt.id]!==void 0)return Bt;return Bt.addEventListener("dispose",bt),tt[Bt.id]=new WeakRef(Bt),Mt.register(Bt,Bt.id,Bt),Y.memory.geometries++,Bt}function Ct(Dt){let Bt=Dt.attributes;for(let Pt in Bt)q.update(Bt[Pt],W.ARRAY_BUFFER)}function It(Dt){let Bt=Dt.index,Pt=Dt.attributes.position,wt=0;if(Pt===void 0)return;let Gt=Bt!==null?Bt.array.length:Pt.array.length/3-1,zt=new(Pt.count>=65535?$r:Jr)(Math.ceil(Gt/3)*6,1),Ht=zt.array;if(Bt!==null){let Nt=Bt.array;wt=Bt.version;for(let Ot=0,Yt=0;Ot<Gt;Ot+=3){let ie=Nt[Ot+0],Zt=Nt[Ot+1],ee=Nt[Ot+2];Ht[Yt++]=ie,Ht[Yt++]=Zt,Ht[Yt++]=Zt,Ht[Yt++]=ee,Ht[Yt++]=ee,Ht[Yt++]=ie}}else{wt=Pt.version;for(let Nt=0,Ot=0;Nt<Gt;Nt+=3){let Yt=Nt+0,ie=Nt+1,Zt=Nt+2;Ht[Ot++]=Yt,Ht[Ot++]=ie,Ht[Ot++]=ie,Ht[Ot++]=Zt,Ht[Ot++]=Zt,Ht[Ot++]=Yt}}zt.version=wt;let qt=at.get(Dt);if(qt)q.remove(qt);at.set(Dt,zt)}function Rt(Dt){let Bt=at.get(Dt);if(Bt){let Pt=Dt.index;if(Pt!==null){if(Bt.version<Pt.version)It(Dt)}}else It(Dt);return at.get(Dt)}function Lt(){for(let Dt in tt){let Bt=tt[Dt].deref();if(Bt!==void 0)Et(Bt)}}return{get:At,update:Ct,getWireframeAttribute:Rt,dispose:Lt}}function Tm(W,q,Y){let Z;function tt(It){Z=It}let at,Mt;function bt(It){at=It.type,Mt=It.bytesPerElement}function Et(It,Rt){W.drawElements(Z,Rt,at,It*Mt),Y.update(Rt,Z,1)}function At(It,Rt,Lt){if(Lt===0)return;W.drawElementsInstanced(Z,Rt,at,It*Mt,Lt),Y.update(Rt,Z,Lt)}function Ct(It,Rt,Lt){if(Lt===0)return;q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,Rt,0,at,It,0,Lt);let Bt=0;for(let Pt=0;Pt<Lt;Pt++)Bt+=Rt[Pt];Y.update(Bt,Z,1)}this.setMode=tt,this.setIndex=bt,this.render=Et,this.renderInstances=At,this.renderMultiDraw=Ct}function wm(W){let q={geometries:0,textures:0},Y={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(at,Mt,bt){switch(Y.calls++,Mt){case W.TRIANGLES:Y.triangles+=bt*(at/3);break;case W.LINES:Y.lines+=bt*(at/2);break;case W.LINE_STRIP:Y.lines+=bt*(at-1);break;case W.LINE_LOOP:Y.lines+=bt*at;break;case W.POINTS:Y.points+=bt*at;break;default:Qe("WebGLInfo: Unknown draw mode:",Mt);break}}function tt(){Y.calls=0,Y.triangles=0,Y.points=0,Y.lines=0}return{memory:q,render:Y,programs:null,autoReset:!0,reset:tt,update:Z}}function Rm(W,q,Y){let Z=new WeakMap,tt=new Tn;function at(Mt,bt,Et){let At=Mt.morphTargetInfluences,Ct=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,It=Ct!==void 0?Ct.length:0,Rt=Z.get(bt);if(Rt===void 0||Rt.count!==It){let Yt=function(){Nt.dispose(),Z.delete(bt),bt.removeEventListener("dispose",Yt)};if(Rt!==void 0)Rt.texture.dispose();let Lt=bt.morphAttributes.position!==void 0,Dt=bt.morphAttributes.normal!==void 0,Bt=bt.morphAttributes.color!==void 0,Pt=bt.morphAttributes.position||[],wt=bt.morphAttributes.normal||[],Gt=bt.morphAttributes.color||[],Wt=0;if(Lt===!0)Wt=1;if(Dt===!0)Wt=2;if(Bt===!0)Wt=3;let zt=bt.attributes.position.count*Wt,Ht=1;if(zt>q.maxTextureSize)Ht=Math.ceil(zt/q.maxTextureSize),zt=q.maxTextureSize;let qt=new Float32Array(zt*Ht*4*It),Nt=new Yr(qt,zt,Ht,It);Nt.type=Si,Nt.needsUpdate=!0;let Ot=Wt*4;for(let ie=0;ie<It;ie++){let Zt=Pt[ie],ee=wt[ie],he=Gt[ie],Xt=zt*Ht*4*ie;for(let ae=0;ae<Zt.count;ae++){let le=ae*Ot;if(Lt===!0)tt.fromBufferAttribute(Zt,ae),qt[Xt+le+0]=tt.x,qt[Xt+le+1]=tt.y,qt[Xt+le+2]=tt.z,qt[Xt+le+3]=0;if(Dt===!0)tt.fromBufferAttribute(ee,ae),qt[Xt+le+4]=tt.x,qt[Xt+le+5]=tt.y,qt[Xt+le+6]=tt.z,qt[Xt+le+7]=0;if(Bt===!0)tt.fromBufferAttribute(he,ae),qt[Xt+le+8]=tt.x,qt[Xt+le+9]=tt.y,qt[Xt+le+10]=tt.z,qt[Xt+le+11]=he.itemSize===4?tt.w:1}}Rt={count:It,texture:Nt,size:new e(zt,Ht)},Z.set(bt,Rt),bt.addEventListener("dispose",Yt)}if(Mt.isInstancedMesh===!0&&Mt.morphTexture!==null)Et.getUniforms().setValue(W,"morphTexture",Mt.morphTexture,Y);else{let Lt=0;for(let Bt=0;Bt<At.length;Bt++)Lt+=At[Bt];let Dt=bt.morphTargetsRelative?1:1-Lt;Et.getUniforms().setValue(W,"morphTargetBaseInfluence",Dt),Et.getUniforms().setValue(W,"morphTargetInfluences",At)}Et.getUniforms().setValue(W,"morphTargetsTexture",Rt.texture,Y),Et.getUniforms().setValue(W,"morphTargetsTextureSize",Rt.size)}return{update:at}}function Cm(W,q,Y,Z,tt){let at=new WeakMap;function Mt(At){let Ct=tt.render.frame,It=At.geometry,Rt=q.get(At,It);if(at.get(Rt)!==Ct)q.update(Rt),at.set(Rt,Ct);if(At.isInstancedMesh){if(At.hasEventListener("dispose",Et)===!1)At.addEventListener("dispose",Et);if(at.get(At)!==Ct){if(Y.update(At.instanceMatrix,W.ARRAY_BUFFER),At.instanceColor!==null)Y.update(At.instanceColor,W.ARRAY_BUFFER);at.set(At,Ct)}}if(At.isSkinnedMesh){let Lt=At.skeleton;if(at.get(Lt)!==Ct)Lt.update(),at.set(Lt,Ct)}return Rt}function bt(){at=new WeakMap}function Et(At){let Ct=At.target;if(Ct.removeEventListener("dispose",Et),Z.releaseStatesOfObject(Ct),Y.remove(Ct.instanceMatrix),Ct.instanceColor!==null)Y.remove(Ct.instanceColor)}return{update:Mt,dispose:bt}}var Im={[lt]:"LINEAR_TONE_MAPPING",[ct]:"REINHARD_TONE_MAPPING",[ht]:"CINEON_TONE_MAPPING",[ut]:"ACES_FILMIC_TONE_MAPPING",[dt]:"AGX_TONE_MAPPING",[J]:"NEUTRAL_TONE_MAPPING",[ft]:"CUSTOM_TONE_MAPPING"};function Pm(W,q,Y,Z,tt,at){let Mt=new m(q,Y,{type:W,depthBuffer:tt,stencilBuffer:at,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),bt=null,Et=null,At=new l;At.setAttribute("position",new s([-1,3,0,-1,-1,0,3,-1,0],3)),At.setAttribute("uv",new s([0,2,0,0,2,0],2));let Ct=new xt({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),It=new i(At,Ct),Rt=new st(-1,1,1,-1,0,1),Lt=null,Dt=null,Bt=!1,Pt,wt=null,Gt=[],Wt=!1;this.setSize=function(zt,Ht){if(Mt.setSize(zt,Ht),bt!==null)bt.setSize(zt,Ht);if(Et!==null)Et.setSize(zt,Ht);for(let qt=0;qt<Gt.length;qt++){let Nt=Gt[qt];if(Nt.setSize)Nt.setSize(zt,Ht)}},this.setEffects=function(zt){Gt=zt,Wt=Gt.length>0&&Gt[0].isRenderPass===!0;let{width:Ht,height:qt}=Mt;if(Gt.length>0&&bt===null)bt=new m(Ht,qt,{type:x,depthBuffer:!1,stencilBuffer:!1}),Et=new m(Ht,qt,{type:x,depthBuffer:!1,stencilBuffer:!1});for(let Nt=0;Nt<Gt.length;Nt++){let Ot=Gt[Nt];if(Ot.setSize)Ot.setSize(Ht,qt)}},this.begin=function(zt,Ht){if(Bt)return!1;if(zt.toneMapping===hi&&Gt.length===0)return!1;if(wt=Ht,Ht!==null){let{width:qt,height:Nt}=Ht;if(Mt.width!==qt||Mt.height!==Nt)this.setSize(qt,Nt)}if(Wt===!1)zt.setRenderTarget(Mt);return Pt=zt.toneMapping,zt.toneMapping=hi,!0},this.hasRenderPass=function(){return Wt},this.end=function(zt,Ht){zt.toneMapping=Pt,Bt=!0;let qt=Mt,Nt=bt;for(let Ot=0;Ot<Gt.length;Ot++){let Yt=Gt[Ot];if(Yt.enabled===!1)continue;if(Yt.render(zt,Nt,qt,Ht),Yt.needsSwap!==!1)qt=Nt,Nt=Nt===bt?Et:bt}if(Lt!==zt.outputColorSpace||Dt!==zt.toneMapping){if(Lt=zt.outputColorSpace,Dt=zt.toneMapping,Ct.defines={},r.getTransfer(Lt)===a)Ct.defines.SRGB_TRANSFER="";let Ot=Im[Dt];if(Ot)Ct.defines[Ot]="";Ct.needsUpdate=!0}Ct.uniforms.tDiffuse.value=qt.texture,zt.setRenderTarget(wt),zt.render(It,Rt),wt=null,Bt=!1},this.isCompositing=function(){return Bt},this.dispose=function(){if(Mt.dispose(),bt!==null)bt.dispose();if(Et!==null)Et.dispose();At.dispose(),Ct.dispose()}}var Qh=new Bn,jh=new qi(1,1),tu=new ta(1),eu=new Yr,nu=new qo,iu=new jr,Ph=[],Lh=[],Nh=new Float32Array(16),Dh=new Float32Array(9),Uh=new Float32Array(4);function Ms(W,q,Y){let Z=W[0];if(Z<=0||Z>0)return W;let tt=q*Y,at=Ph[tt];if(at===void 0)at=new Float32Array(tt),Ph[tt]=at;if(q!==0){Z.toArray(at,0);for(let Mt=1,bt=0;Mt!==q;++Mt)bt+=Y,W[Mt].toArray(at,bt)}return at}function Nn(W,q){if(W.length!==q.length)return!1;for(let Y=0,Z=W.length;Y<Z;Y++)if(W[Y]!==q[Y])return!1;return!0}function Dn(W,q){for(let Y=0,Z=q.length;Y<Z;Y++)W[Y]=q[Y]}function pa(W,q){let Y=Lh[q];if(Y===void 0)Y=new Int32Array(q),Lh[q]=Y;for(let Z=0;Z!==q;++Z)Y[Z]=W.allocateTextureUnit();return Y}function Lm(W,q){let Y=this.cache;if(Y[0]===q)return;W.uniform1f(this.addr,q),Y[0]=q}function Nm(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y)W.uniform2f(this.addr,q.x,q.y),Y[0]=q.x,Y[1]=q.y}else{if(Nn(Y,q))return;W.uniform2fv(this.addr,q),Dn(Y,q)}}function Dm(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y||Y[2]!==q.z)W.uniform3f(this.addr,q.x,q.y,q.z),Y[0]=q.x,Y[1]=q.y,Y[2]=q.z}else if(q.r!==void 0){if(Y[0]!==q.r||Y[1]!==q.g||Y[2]!==q.b)W.uniform3f(this.addr,q.r,q.g,q.b),Y[0]=q.r,Y[1]=q.g,Y[2]=q.b}else{if(Nn(Y,q))return;W.uniform3fv(this.addr,q),Dn(Y,q)}}function Um(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y||Y[2]!==q.z||Y[3]!==q.w)W.uniform4f(this.addr,q.x,q.y,q.z,q.w),Y[0]=q.x,Y[1]=q.y,Y[2]=q.z,Y[3]=q.w}else{if(Nn(Y,q))return;W.uniform4fv(this.addr,q),Dn(Y,q)}}function Fm(W,q){let Y=this.cache,Z=q.elements;if(Z===void 0){if(Nn(Y,q))return;W.uniformMatrix2fv(this.addr,!1,q),Dn(Y,q)}else{if(Nn(Y,Z))return;Uh.set(Z),W.uniformMatrix2fv(this.addr,!1,Uh),Dn(Y,Z)}}function Om(W,q){let Y=this.cache,Z=q.elements;if(Z===void 0){if(Nn(Y,q))return;W.uniformMatrix3fv(this.addr,!1,q),Dn(Y,q)}else{if(Nn(Y,Z))return;Dh.set(Z),W.uniformMatrix3fv(this.addr,!1,Dh),Dn(Y,Z)}}function Bm(W,q){let Y=this.cache,Z=q.elements;if(Z===void 0){if(Nn(Y,q))return;W.uniformMatrix4fv(this.addr,!1,q),Dn(Y,q)}else{if(Nn(Y,Z))return;Nh.set(Z),W.uniformMatrix4fv(this.addr,!1,Nh),Dn(Y,Z)}}function zm(W,q){let Y=this.cache;if(Y[0]===q)return;W.uniform1i(this.addr,q),Y[0]=q}function Gm(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y)W.uniform2i(this.addr,q.x,q.y),Y[0]=q.x,Y[1]=q.y}else{if(Nn(Y,q))return;W.uniform2iv(this.addr,q),Dn(Y,q)}}function km(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y||Y[2]!==q.z)W.uniform3i(this.addr,q.x,q.y,q.z),Y[0]=q.x,Y[1]=q.y,Y[2]=q.z}else{if(Nn(Y,q))return;W.uniform3iv(this.addr,q),Dn(Y,q)}}function Hm(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y||Y[2]!==q.z||Y[3]!==q.w)W.uniform4i(this.addr,q.x,q.y,q.z,q.w),Y[0]=q.x,Y[1]=q.y,Y[2]=q.z,Y[3]=q.w}else{if(Nn(Y,q))return;W.uniform4iv(this.addr,q),Dn(Y,q)}}function Wm(W,q){let Y=this.cache;if(Y[0]===q)return;W.uniform1ui(this.addr,q),Y[0]=q}function Vm(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y)W.uniform2ui(this.addr,q.x,q.y),Y[0]=q.x,Y[1]=q.y}else{if(Nn(Y,q))return;W.uniform2uiv(this.addr,q),Dn(Y,q)}}function Xm(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y||Y[2]!==q.z)W.uniform3ui(this.addr,q.x,q.y,q.z),Y[0]=q.x,Y[1]=q.y,Y[2]=q.z}else{if(Nn(Y,q))return;W.uniform3uiv(this.addr,q),Dn(Y,q)}}function qm(W,q){let Y=this.cache;if(q.x!==void 0){if(Y[0]!==q.x||Y[1]!==q.y||Y[2]!==q.z||Y[3]!==q.w)W.uniform4ui(this.addr,q.x,q.y,q.z,q.w),Y[0]=q.x,Y[1]=q.y,Y[2]=q.z,Y[3]=q.w}else{if(Nn(Y,q))return;W.uniform4uiv(this.addr,q),Dn(Y,q)}}function ma(W){if(W.version===0)W.compareFunction=Go,W.needsUpdate=!0;return W}function Ym(W,q,Y){let Z=this.cache,tt=Y.allocateTextureUnit();if(Z[0]!==tt)W.uniform1i(this.addr,tt),Z[0]=tt;let at;if(this.type===W.SAMPLER_2D_SHADOW)at=ma(jh);else at=Qh;Y.setTexture2D(q||at,tt)}function Zm(W,q,Y){let Z=this.cache,tt=Y.allocateTextureUnit();if(Z[0]!==tt)W.uniform1i(this.addr,tt),Z[0]=tt;Y.setTexture3D(q||nu,tt)}function Jm(W,q,Y){let Z=this.cache,tt=Y.allocateTextureUnit();if(Z[0]!==tt)W.uniform1i(this.addr,tt),Z[0]=tt;let at;if(this.type===W.SAMPLER_CUBE_SHADOW)at=ma(tu);else at=iu;Y.setTextureCube(q||at,tt)}function $m(W,q,Y){let Z=this.cache,tt=Y.allocateTextureUnit();if(Z[0]!==tt)W.uniform1i(this.addr,tt),Z[0]=tt;Y.setTexture2DArray(q||eu,tt)}function Km(W){switch(W){case 5126:return Lm;case 35664:return Nm;case 35665:return Dm;case 35666:return Um;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Gm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Wm;case 36294:return Vm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return $m}}function Qm(W,q){W.uniform1fv(this.addr,q)}function jm(W,q){let Y=Ms(q,this.size,2);W.uniform2fv(this.addr,Y)}function tg(W,q){let Y=Ms(q,this.size,3);W.uniform3fv(this.addr,Y)}function eg(W,q){let Y=Ms(q,this.size,4);W.uniform4fv(this.addr,Y)}function ng(W,q){let Y=Ms(q,this.size,4);W.uniformMatrix2fv(this.addr,!1,Y)}function ig(W,q){let Y=Ms(q,this.size,9);W.uniformMatrix3fv(this.addr,!1,Y)}function sg(W,q){let Y=Ms(q,this.size,16);W.uniformMatrix4fv(this.addr,!1,Y)}function rg(W,q){W.uniform1iv(this.addr,q)}function ag(W,q){W.uniform2iv(this.addr,q)}function og(W,q){W.uniform3iv(this.addr,q)}function lg(W,q){W.uniform4iv(this.addr,q)}function cg(W,q){W.uniform1uiv(this.addr,q)}function hg(W,q){W.uniform2uiv(this.addr,q)}function ug(W,q){W.uniform3uiv(this.addr,q)}function dg(W,q){W.uniform4uiv(this.addr,q)}function fg(W,q,Y){let Z=this.cache,tt=q.length,at=pa(Y,tt);if(!Nn(Z,at))W.uniform1iv(this.addr,at),Dn(Z,at);let Mt;if(this.type===W.SAMPLER_2D_SHADOW)Mt=ma(jh);else Mt=Qh;for(let bt=0;bt!==tt;++bt)Y.setTexture2D(q[bt]||Mt,at[bt])}function pg(W,q,Y){let Z=this.cache,tt=q.length,at=pa(Y,tt);if(!Nn(Z,at))W.uniform1iv(this.addr,at),Dn(Z,at);for(let Mt=0;Mt!==tt;++Mt)Y.setTexture3D(q[Mt]||nu,at[Mt])}function mg(W,q,Y){let Z=this.cache,tt=q.length,at=pa(Y,tt);if(!Nn(Z,at))W.uniform1iv(this.addr,at),Dn(Z,at);let Mt;if(this.type===W.SAMPLER_CUBE_SHADOW)Mt=ma(tu);else Mt=iu;for(let bt=0;bt!==tt;++bt)Y.setTextureCube(q[bt]||Mt,at[bt])}function gg(W,q,Y){let Z=this.cache,tt=q.length,at=pa(Y,tt);if(!Nn(Z,at))W.uniform1iv(this.addr,at),Dn(Z,at);for(let Mt=0;Mt!==tt;++Mt)Y.setTexture2DArray(q[Mt]||eu,at[Mt])}function _g(W){switch(W){case 5126:return Qm;case 35664:return jm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}class su{constructor(W,q,Y){this.id=W,this.addr=Y,this.cache=[],this.type=q.type,this.setValue=Km(q.type)}}class ru{constructor(W,q,Y){this.id=W,this.addr=Y,this.cache=[],this.type=q.type,this.size=q.size,this.setValue=_g(q.type)}}class au{constructor(W){this.id=W,this.seq=[],this.map={}}setValue(W,q,Y){let Z=this.seq;for(let tt=0,at=Z.length;tt!==at;++tt){let Mt=Z[tt];Mt.setValue(W,q[Mt.id],Y)}}}var xl=/(\w+)(\])?(\[|\.)?/g;function Fh(W,q){W.seq.push(q),W.map[q.id]=q}function xg(W,q,Y){let Z=W.name,tt=Z.length;xl.lastIndex=0;while(!0){let at=xl.exec(Z),Mt=xl.lastIndex,bt=at[1],Et=at[2]==="]",At=at[3];if(Et)bt=bt|0;if(At===void 0||At==="["&&Mt+2===tt){Fh(Y,At===void 0?new su(bt,W,q):new ru(bt,W,q));break}else{let It=Y.map[bt];if(It===void 0)It=new au(bt),Fh(Y,It);Y=It}}}class js{constructor(W,q){this.seq=[],this.map={};let Y=W.getProgramParameter(q,W.ACTIVE_UNIFORMS);for(let at=0;at<Y;++at){let Mt=W.getActiveUniform(q,at),bt=W.getUniformLocation(q,Mt.name);xg(Mt,bt,this)}let Z=[],tt=[];for(let at of this.seq)if(at.type===W.SAMPLER_2D_SHADOW||at.type===W.SAMPLER_CUBE_SHADOW||at.type===W.SAMPLER_2D_ARRAY_SHADOW)Z.push(at);else tt.push(at);if(Z.length>0)this.seq=Z.concat(tt)}setValue(W,q,Y,Z){let tt=this.map[q];if(tt!==void 0)tt.setValue(W,Y,Z)}setOptional(W,q,Y){let Z=q[Y];if(Z!==void 0)this.setValue(W,Y,Z)}static upload(W,q,Y,Z){for(let tt=0,at=q.length;tt!==at;++tt){let Mt=q[tt],bt=Y[Mt.id];if(bt.needsUpdate!==!1)Mt.setValue(W,bt.value,Z)}}static seqWithValue(W,q){let Y=[];for(let Z=0,tt=W.length;Z!==tt;++Z){let at=W[Z];if(at.id in q)Y.push(at)}return Y}}function Oh(W,q,Y){let Z=W.createShader(q);return W.shaderSource(Z,Y),W.compileShader(Z),Z}var vg=37297,yg=0;function Sg(W,q){let Y=W.split(`
`),Z=[],tt=Math.max(q-6,0),at=Math.min(q+6,Y.length);for(let Mt=tt;Mt<at;Mt++){let bt=Mt+1;Z.push(`${bt===q?">":" "} ${bt}: ${Y[Mt]}`)}return Z.join(`
`)}var Bh=new tn;function Mg(W){r._getMatrix(Bh,r.workingColorSpace,W);let q=`mat3( ${Bh.elements.map((Y)=>Y.toFixed(4))} )`;switch(r.getTransfer(W)){case Oo:return[q,"LinearTransferOETF"];case a:return[q,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",W),[q,"LinearTransferOETF"]}}function zh(W,q,Y){let Z=W.getShaderParameter(q,W.COMPILE_STATUS),at=(W.getShaderInfoLog(q)||"").trim();if(Z&&at==="")return"";let Mt=/ERROR: 0:(\d+)/.exec(at);if(Mt){let bt=parseInt(Mt[1]);return Y.toUpperCase()+`

`+at+`

`+Sg(W.getShaderSource(q),bt)}else return at}function bg(W,q){let Y=Mg(q);return[`vec4 ${W}( vec4 value ) {`,`	return ${Y[1]}( vec4( value.rgb * ${Y[0]}, value.a ) );`,"}"].join(`
`)}var Eg={[lt]:"Linear",[ct]:"Reinhard",[ht]:"Cineon",[ut]:"ACESFilmic",[dt]:"AgX",[J]:"Neutral",[ft]:"Custom"};function Ag(W,q){let Y=Eg[q];if(Y===void 0)return Ke("WebGLProgram: Unsupported toneMapping:",q),"vec3 "+W+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+W+"( vec3 color ) { return "+Y+"ToneMapping( color ); }"}var da=new t;function Tg(){r.getLuminanceCoefficients(da);let W=da.x.toFixed(4),q=da.y.toFixed(4),Y=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${W}, ${q}, ${Y} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function wg(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Rg(W){let q=[];for(let Y in W){let Z=W[Y];if(Z===!1)continue;q.push("#define "+Y+" "+Z)}return q.join(`
`)}function Cg(W,q){let Y={},Z=W.getProgramParameter(q,W.ACTIVE_ATTRIBUTES);for(let tt=0;tt<Z;tt++){let at=W.getActiveAttrib(q,tt),Mt=at.name,bt=1;if(at.type===W.FLOAT_MAT2)bt=2;if(at.type===W.FLOAT_MAT3)bt=3;if(at.type===W.FLOAT_MAT4)bt=4;Y[Mt]={type:at.type,location:W.getAttribLocation(q,Mt),locationSize:bt}}return Y}function Qs(W){return W!==""}function Gh(W,q){let Y=q.numSpotLightShadows+q.numSpotLightMaps-q.numSpotLightShadowsWithMaps;return W.replace(/NUM_SUN_LIGHTS/g,q.numSunLights).replace(/NUM_DIR_LIGHTS/g,q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Y).replace(/NUM_RECT_AREA_LIGHTS/g,q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,q.numPointLightShadows)}function kh(W,q){return W.replace(/NUM_CLIPPING_PLANES/g,q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,q.numClippingPlanes-q.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(W){return W.replace(Ig,Pg)}function Pg(W,q){let Y=on[q];if(Y===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+q+">");return yl(Y)}var Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(W){return W.replace(Lg,Ng)}function Ng(W,q,Y,Z){let tt="";for(let at=parseInt(q);at<parseInt(Y);at++)tt+=Z.replace(/\[\s*i\s*\]/g,"[ "+at+" ]").replace(/UNROLLED_LOOP_INDEX/g,at);return tt}function Wh(W){let q=`precision ${W.precision} float;
	precision ${W.precision} int;
	precision ${W.precision} sampler2D;
	precision ${W.precision} samplerCube;
	precision ${W.precision} sampler3D;
	precision ${W.precision} sampler2DArray;
	precision ${W.precision} sampler2DShadow;
	precision ${W.precision} samplerCubeShadow;
	precision ${W.precision} sampler2DArrayShadow;
	precision ${W.precision} isampler2D;
	precision ${W.precision} isampler3D;
	precision ${W.precision} isamplerCube;
	precision ${W.precision} isampler2DArray;
	precision ${W.precision} usampler2D;
	precision ${W.precision} usampler3D;
	precision ${W.precision} usamplerCube;
	precision ${W.precision} usampler2DArray;
	`;if(W.precision==="highp")q+=`
#define HIGH_PRECISION`;else if(W.precision==="mediump")q+=`
#define MEDIUM_PRECISION`;else if(W.precision==="lowp")q+=`
#define LOW_PRECISION`;return q}var Dg={[ks]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function Ug(W){return Dg[W.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fg={[_s]:"ENVMAP_MODE_REFRACTION"};function Og(W){if(W.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Fg[W.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bg={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[qc]:"ENVMAP_BLENDING_MIX",[Yc]:"ENVMAP_BLENDING_ADD"};function zg(W){if(W.envMap===!1)return"ENVMAP_BLENDING_NONE";return Bg[W.combine]||"ENVMAP_BLENDING_NONE"}function Gg(W,q,Y,Z){let tt=W.getContext(),{defines:at,vertexShader:Mt,fragmentShader:bt}=Y,Et=Ug(Y),At=Y.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",Ct=Og(Y),It=zg(Y),Rt=wg(Y),Lt=Rg(at),Dt=tt.createProgram(),Bt,Pt,wt=Y.glslVersion?"#version "+Y.glslVersion+`
`:"";if(Y.isRawShaderMaterial){if(Bt=["#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,Lt].filter(Qs).join(`
`),Bt.length>0)Bt+=`
`;if(Pt=["#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,Lt].filter(Qs).join(`
`),Pt.length>0)Pt+=`
`}else Bt=[Wh(Y),"#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,Lt,Y.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Y.batching?"#define USE_BATCHING":"",Y.batchingColor?"#define USE_BATCHING_COLOR":"",Y.instancing?"#define USE_INSTANCING":"",Y.instancingColor?"#define USE_INSTANCING_COLOR":"",Y.instancingMorph?"#define USE_INSTANCING_MORPH":"",Y.useFog&&Y.fog?"#define USE_FOG":"",Y.useFog&&Y.fogExp2?"#define FOG_EXP2":"",Y.map?"#define USE_MAP":"",Y.envMap?"#define USE_ENVMAP":"",Y.envMap?"#define "+Ct:"",Y.lightMap?"#define USE_LIGHTMAP":"",Y.aoMap?"#define USE_AOMAP":"",Y.bumpMap?"#define USE_BUMPMAP":"",Y.normalMap?"#define USE_NORMALMAP":"",Y.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Y.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Y.displacementMap?"#define USE_DISPLACEMENTMAP":"",Y.emissiveMap?"#define USE_EMISSIVEMAP":"",Y.anisotropy?"#define USE_ANISOTROPY":"",Y.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Y.clearcoatMap?"#define USE_CLEARCOATMAP":"",Y.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Y.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Y.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Y.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Y.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Y.specularMap?"#define USE_SPECULARMAP":"",Y.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Y.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Y.roughnessMap?"#define USE_ROUGHNESSMAP":"",Y.metalnessMap?"#define USE_METALNESSMAP":"",Y.alphaMap?"#define USE_ALPHAMAP":"",Y.alphaHash?"#define USE_ALPHAHASH":"",Y.transmission?"#define USE_TRANSMISSION":"",Y.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Y.thicknessMap?"#define USE_THICKNESSMAP":"",Y.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Y.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Y.mapUv?"#define MAP_UV "+Y.mapUv:"",Y.alphaMapUv?"#define ALPHAMAP_UV "+Y.alphaMapUv:"",Y.lightMapUv?"#define LIGHTMAP_UV "+Y.lightMapUv:"",Y.aoMapUv?"#define AOMAP_UV "+Y.aoMapUv:"",Y.emissiveMapUv?"#define EMISSIVEMAP_UV "+Y.emissiveMapUv:"",Y.bumpMapUv?"#define BUMPMAP_UV "+Y.bumpMapUv:"",Y.normalMapUv?"#define NORMALMAP_UV "+Y.normalMapUv:"",Y.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Y.displacementMapUv:"",Y.metalnessMapUv?"#define METALNESSMAP_UV "+Y.metalnessMapUv:"",Y.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Y.roughnessMapUv:"",Y.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Y.anisotropyMapUv:"",Y.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Y.clearcoatMapUv:"",Y.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Y.clearcoatNormalMapUv:"",Y.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Y.clearcoatRoughnessMapUv:"",Y.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+Y.diffuseRoughnessMapUv:"",Y.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Y.iridescenceMapUv:"",Y.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Y.iridescenceThicknessMapUv:"",Y.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Y.sheenColorMapUv:"",Y.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Y.sheenRoughnessMapUv:"",Y.specularMapUv?"#define SPECULARMAP_UV "+Y.specularMapUv:"",Y.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Y.specularColorMapUv:"",Y.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Y.specularIntensityMapUv:"",Y.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Y.transmissionMapUv:"",Y.thicknessMapUv?"#define THICKNESSMAP_UV "+Y.thicknessMapUv:"",Y.vertexTangents&&Y.flatShading===!1?"#define USE_TANGENT":"",Y.vertexNormals?"#define HAS_NORMAL":"",Y.vertexColors?"#define USE_COLOR":"",Y.vertexAlphas?"#define USE_COLOR_ALPHA":"",Y.vertexUv1s?"#define USE_UV1":"",Y.vertexUv2s?"#define USE_UV2":"",Y.vertexUv3s?"#define USE_UV3":"",Y.pointsUvs?"#define USE_POINTS_UV":"",Y.flatShading?"#define FLAT_SHADED":"",Y.skinning?"#define USE_SKINNING":"",Y.morphTargets?"#define USE_MORPHTARGETS":"",Y.morphNormals&&Y.flatShading===!1?"#define USE_MORPHNORMALS":"",Y.morphColors?"#define USE_MORPHCOLORS":"",Y.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Y.morphTextureStride:"",Y.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Y.morphTargetsCount:"",Y.doubleSided?"#define DOUBLE_SIDED":"",Y.flipSided?"#define FLIP_SIDED":"",Y.shadowMapEnabled?"#define USE_SHADOWMAP":"",Y.shadowMapEnabled?"#define "+Et:"",Y.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Y.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Y.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Y.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),Pt=[Wh(Y),"#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,Lt,Y.useFog&&Y.fog?"#define USE_FOG":"",Y.useFog&&Y.fogExp2?"#define FOG_EXP2":"",Y.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Y.map?"#define USE_MAP":"",Y.matcap?"#define USE_MATCAP":"",Y.envMap?"#define USE_ENVMAP":"",Y.envMap?"#define "+At:"",Y.envMap?"#define "+Ct:"",Y.envMap?"#define "+It:"",Y.envMapPMREM?"#define ENVMAP_MAX_LOD "+Y.envMapMaxLod+".0":"",Y.envMapPMREM?"#define ENVMAP_SIZE "+Y.envMapSize+".0":"",Y.lightMap?"#define USE_LIGHTMAP":"",Y.aoMap?"#define USE_AOMAP":"",Y.bumpMap?"#define USE_BUMPMAP":"",Y.normalMap?"#define USE_NORMALMAP":"",Y.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Y.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Y.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Y.emissiveMap?"#define USE_EMISSIVEMAP":"",Y.anisotropy?"#define USE_ANISOTROPY":"",Y.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Y.clearcoat?"#define USE_CLEARCOAT":"",Y.clearcoatMap?"#define USE_CLEARCOATMAP":"",Y.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Y.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Y.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",Y.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Y.dispersion?"#define USE_DISPERSION":"",Y.retroreflection?"#define USE_RETROREFLECTION":"",Y.iridescence?"#define USE_IRIDESCENCE":"",Y.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Y.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Y.specularMap?"#define USE_SPECULARMAP":"",Y.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Y.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Y.roughnessMap?"#define USE_ROUGHNESSMAP":"",Y.metalnessMap?"#define USE_METALNESSMAP":"",Y.alphaMap?"#define USE_ALPHAMAP":"",Y.alphaTest?"#define USE_ALPHATEST":"",Y.alphaHash?"#define USE_ALPHAHASH":"",Y.sheen?"#define USE_SHEEN":"",Y.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Y.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Y.transmission?"#define USE_TRANSMISSION":"",Y.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Y.thicknessMap?"#define USE_THICKNESSMAP":"",Y.vertexTangents&&Y.flatShading===!1?"#define USE_TANGENT":"",Y.vertexColors||Y.instancingColor?"#define USE_COLOR":"",Y.vertexAlphas||Y.batchingColor?"#define USE_COLOR_ALPHA":"",Y.vertexUv1s?"#define USE_UV1":"",Y.vertexUv2s?"#define USE_UV2":"",Y.vertexUv3s?"#define USE_UV3":"",Y.pointsUvs?"#define USE_POINTS_UV":"",Y.gradientMap?"#define USE_GRADIENTMAP":"",Y.flatShading?"#define FLAT_SHADED":"",Y.doubleSided?"#define DOUBLE_SIDED":"",Y.flipSided?"#define FLIP_SIDED":"",Y.shadowMapEnabled?"#define USE_SHADOWMAP":"",Y.shadowMapEnabled?"#define "+Et:"",Y.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Y.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Y.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Y.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Y.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Y.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Y.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Y.toneMapping!==hi?"#define TONE_MAPPING":"",Y.toneMapping!==hi?on.tonemapping_pars_fragment:"",Y.toneMapping!==hi?Ag("toneMapping",Y.toneMapping):"",Y.dithering?"#define DITHERING":"",Y.opaque?"#define OPAQUE":"",on.colorspace_pars_fragment,bg("linearToOutputTexel",Y.outputColorSpace),Tg(),Y.useDepthPacking?"#define DEPTH_PACKING "+Y.depthPacking:"",`
`].filter(Qs).join(`
`);if(Mt=yl(Mt),Mt=Gh(Mt,Y),Mt=kh(Mt,Y),bt=yl(bt),bt=Gh(bt,Y),bt=kh(bt,Y),Mt=Hh(Mt),bt=Hh(bt),Y.isRawShaderMaterial!==!0)wt=`#version 300 es
`,Bt=[Rt,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+Bt,Pt=["#define varying in",Y.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",Y.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+Pt;let Gt=wt+Bt+Mt,Wt=wt+Pt+bt,zt=Oh(tt,tt.VERTEX_SHADER,Gt),Ht=Oh(tt,tt.FRAGMENT_SHADER,Wt);if(tt.attachShader(Dt,zt),tt.attachShader(Dt,Ht),Y.index0AttributeName!==void 0)tt.bindAttribLocation(Dt,0,Y.index0AttributeName);else if(Y.hasPositionAttribute===!0)tt.bindAttribLocation(Dt,0,"position");tt.linkProgram(Dt);function qt(ie){if(W.debug.checkShaderErrors){let Zt=tt.getProgramInfoLog(Dt)||"",ee=tt.getShaderInfoLog(zt)||"",he=tt.getShaderInfoLog(Ht)||"",Xt=Zt.trim(),ae=ee.trim(),le=he.trim(),te=!0,Me=!0;if(tt.getProgramParameter(Dt,tt.LINK_STATUS)===!1)if(te=!1,typeof W.debug.onShaderError==="function")W.debug.onShaderError(tt,Dt,zt,Ht);else{let se=zh(tt,zt,"vertex"),de=zh(tt,Ht,"fragment");Qe("WebGLProgram: Shader Error "+tt.getError()+" - VALIDATE_STATUS "+tt.getProgramParameter(Dt,tt.VALIDATE_STATUS)+`

Material Name: `+ie.name+`
Material Type: `+ie.type+`

Program Info Log: `+Xt+`
`+se+`
`+de)}else if(Xt!=="")Ke("WebGLProgram: Program Info Log:",Xt);else if(ae===""||le==="")Me=!1;if(Me)ie.diagnostics={runnable:te,programLog:Xt,vertexShader:{log:ae,prefix:Bt},fragmentShader:{log:le,prefix:Pt}}}tt.deleteShader(zt),tt.deleteShader(Ht),Nt=new js(tt,Dt),Ot=Cg(tt,Dt)}let Nt;this.getUniforms=function(){if(Nt===void 0)qt(this);return Nt};let Ot;this.getAttributes=function(){if(Ot===void 0)qt(this);return Ot};let Yt=Y.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(Yt===!1)Yt=tt.getProgramParameter(Dt,vg);return Yt},this.destroy=function(){Z.releaseStatesOfProgram(this),tt.deleteProgram(Dt),this.program=void 0},this.type=Y.shaderType,this.name=Y.shaderName,this.id=yg++,this.cacheKey=q,this.usedTimes=1,this.program=Dt,this.vertexShader=zt,this.fragmentShader=Ht,this}var kg=0;class ou{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(W,q,Y){let Z=this._getShaderCacheForMaterial(W);if(Z.has(q)===!1)Z.add(q),q.usedTimes++;if(Z.has(Y)===!1)Z.add(Y),Y.usedTimes++;return this}remove(W){let q=this.materialCache.get(W);for(let Y of q)if(Y.usedTimes--,Y.usedTimes===0)this.shaderCache.delete(Y.code);return this.materialCache.delete(W),this}getVertexShaderStage(W){return this._getShaderStage(W.vertexShader)}getFragmentShaderStage(W){return this._getShaderStage(W.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(W){let q=this.materialCache,Y=q.get(W);if(Y===void 0)Y=new Set,q.set(W,Y);return Y}_getShaderStage(W){let q=this.shaderCache,Y=q.get(W);if(Y===void 0)Y=new lu(W),q.set(W,Y);return Y}}class lu{constructor(W){this.id=kg++,this.code=W,this.usedTimes=0}}function Hg(W){return W===Vi||W===Xr||W===qr}function Wg(W,q,Y,Z,tt,at){let Mt=new Zr,bt=new ou,Et=new Set,At=[],Ct=new Map,It=Z.logarithmicDepthBuffer,Rt={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function Lt(Nt){if(Et.add(Nt),Nt===0)return"uv";return`uv${Nt}`}function Dt(Nt,Ot,Yt,ie,Zt,ee){let he=ie.fog,Xt=Zt.geometry,ae=Nt.isMeshStandardMaterial||Nt.isMeshLambertMaterial||Nt.isMeshPhongMaterial?ie.environment:null,le=Nt.isMeshStandardMaterial||Nt.isMeshLambertMaterial&&!Nt.envMap||Nt.isMeshPhongMaterial&&!Nt.envMap,te=q.get(Nt.envMap||ae,le),Me=Rt[Nt.type],se=Z.precision;if(Nt.precision!==null){if(se=Z.getMaxPrecision(Nt.precision),se!==Nt.precision)Ke("WebGLProgram.getParameters:",Nt.precision,"not supported, using",se,"instead.")}let de=Xt.morphAttributes.position||Xt.morphAttributes.normal||Xt.morphAttributes.color,ye=de!==void 0?de.length:0,Oe=0;if(Xt.morphAttributes.position!==void 0)Oe=1;if(Xt.morphAttributes.normal!==void 0)Oe=2;if(Xt.morphAttributes.color!==void 0)Oe=3;let fe,xe,ze,Ye;if(Me){let sn=fi[Me];fe=sn.vertexShader,xe=sn.fragmentShader}else{fe=Nt.vertexShader,xe=Nt.fragmentShader;let sn=bt.getVertexShaderStage(Nt),He=bt.getFragmentShaderStage(Nt);bt.update(Nt,sn,He),ze=sn.id,Ye=He.id}let Ze=W.getRenderTarget(),Ne=W.state.buffers.depth.getReversed(),fn=Zt.isInstancedMesh===!0,rn=Zt.isBatchedMesh===!0,$e=!!Nt.map,dn=!!Nt.matcap,pe=!!te,Ee=pe&&te.isPMREMTexture===!0,we=!!Nt.aoMap,Ue=!!Nt.lightMap,De=!!Nt.bumpMap&&Nt.wireframe===!1,Je=!!Nt.normalMap,qe=!!Nt.displacementMap,ln=!!Nt.emissiveMap,hn=!!Nt.metalnessMap,_n=!!Nt.roughnessMap,$t=Nt.anisotropy>0,In=Nt.clearcoat>0,en=Nt.diffuseRoughness>0,En=Nt.dispersion>0,Le=Nt.retroreflectivity>0,yn=Nt.iridescence>0,We=Nt.sheen>0,je=Nt.transmission>0,Fn=$t&&!!Nt.anisotropyMap,Pn=In&&!!Nt.clearcoatMap,kt=In&&!!Nt.clearcoatNormalMap,Ut=In&&!!Nt.clearcoatRoughnessMap,Kt=en&&!!Nt.diffuseRoughnessMap,_e=yn&&!!Nt.iridescenceMap,me=yn&&!!Nt.iridescenceThicknessMap,Te=We&&!!Nt.sheenColorMap,ve=We&&!!Nt.sheenRoughnessMap,re=!!Nt.specularMap,ce=!!Nt.specularColorMap,Vt=!!Nt.specularIntensityMap,ge=je&&!!Nt.transmissionMap,oe=je&&!!Nt.thicknessMap,ue=!!Nt.gradientMap,Se=!!Nt.alphaMap,Ae=Nt.alphaTest>0,Ve=!!Nt.alphaHash,Be=!!Nt.extensions,mn=hi;if(Nt.toneMapped){if(Ze===null||Ze.isXRRenderTarget===!0)mn=W.toneMapping}let be=Ee?te.isCompressedCubeTexture?te.image[0].mipmaps:te.mipmaps:null,an={shaderID:Me,shaderType:Nt.type,shaderName:Nt.name,vertexShader:fe,fragmentShader:xe,defines:Nt.defines,customVertexShaderID:ze,customFragmentShaderID:Ye,isRawShaderMaterial:Nt.isRawShaderMaterial===!0,glslVersion:Nt.glslVersion,precision:se,batching:rn,batchingColor:rn&&Zt._colorsTexture!==null,instancing:fn,instancingColor:fn&&Zt.instanceColor!==null,instancingMorph:fn&&Zt.morphTexture!==null,outputColorSpace:Ze===null?W.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:r.workingColorSpace,alphaToCoverage:!!Nt.alphaToCoverage,map:$e,matcap:dn,envMap:pe,envMapMode:pe&&te.mapping,envMapPMREM:Ee,envMapMaxLod:Ee?be.length-1:null,envMapSize:Ee?be[0].width:null,aoMap:we,lightMap:Ue,bumpMap:De,normalMap:Je,displacementMap:qe,emissiveMap:ln,normalMapObjectSpace:Je&&Nt.normalMapType===sh,normalMapTangentSpace:Je&&Nt.normalMapType===Uo,packedNormalMap:Je&&Nt.normalMapType===Uo&&Hg(Nt.normalMap.format),metalnessMap:hn,roughnessMap:_n,anisotropy:$t,anisotropyMap:Fn,clearcoat:In,clearcoatMap:Pn,clearcoatNormalMap:kt,clearcoatRoughnessMap:Ut,diffuseRoughness:en,diffuseRoughnessMap:Kt,dispersion:En,retroreflection:Le,iridescence:yn,iridescenceMap:_e,iridescenceThicknessMap:me,sheen:We,sheenColorMap:Te,sheenRoughnessMap:ve,specularMap:re,specularColorMap:ce,specularIntensityMap:Vt,transmission:je,transmissionMap:ge,thicknessMap:oe,gradientMap:ue,opaque:Nt.transparent===!1&&Nt.blending===Hs&&Nt.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ae,alphaHash:Ve,combine:Nt.combine,mapUv:$e&&Lt(Nt.map.channel),aoMapUv:we&&Lt(Nt.aoMap.channel),lightMapUv:Ue&&Lt(Nt.lightMap.channel),bumpMapUv:De&&Lt(Nt.bumpMap.channel),normalMapUv:Je&&Lt(Nt.normalMap.channel),displacementMapUv:qe&&Lt(Nt.displacementMap.channel),emissiveMapUv:ln&&Lt(Nt.emissiveMap.channel),metalnessMapUv:hn&&Lt(Nt.metalnessMap.channel),roughnessMapUv:_n&&Lt(Nt.roughnessMap.channel),anisotropyMapUv:Fn&&Lt(Nt.anisotropyMap.channel),clearcoatMapUv:Pn&&Lt(Nt.clearcoatMap.channel),clearcoatNormalMapUv:kt&&Lt(Nt.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&Lt(Nt.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Kt&&Lt(Nt.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&Lt(Nt.iridescenceMap.channel),iridescenceThicknessMapUv:me&&Lt(Nt.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&Lt(Nt.sheenColorMap.channel),sheenRoughnessMapUv:ve&&Lt(Nt.sheenRoughnessMap.channel),specularMapUv:re&&Lt(Nt.specularMap.channel),specularColorMapUv:ce&&Lt(Nt.specularColorMap.channel),specularIntensityMapUv:Vt&&Lt(Nt.specularIntensityMap.channel),transmissionMapUv:ge&&Lt(Nt.transmissionMap.channel),thicknessMapUv:oe&&Lt(Nt.thicknessMap.channel),alphaMapUv:Se&&Lt(Nt.alphaMap.channel),vertexTangents:!!Xt.attributes.tangent&&(Je||$t),vertexNormals:!!Xt.attributes.normal,vertexColors:Nt.vertexColors,vertexAlphas:Nt.vertexColors===!0&&!!Xt.attributes.color&&Xt.attributes.color.itemSize===4,pointsUvs:Zt.isPoints===!0&&!!Xt.attributes.uv&&($e||Se),fog:!!he,useFog:Nt.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:Nt.wireframe===!1&&(Nt.flatShading===!0||Xt.attributes.normal===void 0&&Je===!1&&(Nt.isMeshLambertMaterial||Nt.isMeshPhongMaterial||Nt.isMeshStandardMaterial||Nt.isMeshPhysicalMaterial)),sizeAttenuation:Nt.sizeAttenuation===!0,logarithmicDepthBuffer:It,reversedDepthBuffer:Ne,skinning:Zt.isSkinnedMesh===!0,hasPositionAttribute:Xt.attributes.position!==void 0,morphTargets:Xt.morphAttributes.position!==void 0,morphNormals:Xt.morphAttributes.normal!==void 0,morphColors:Xt.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Oe,numSunLights:Ot.sun.length,numDirLights:Ot.directional.length,numPointLights:Ot.point.length,numSpotLights:Ot.spot.length,numSpotLightMaps:Ot.spotLightMap.length,numRectAreaLights:Ot.rectArea.length,numHemiLights:Ot.hemi.length,numSunLightShadows:Ot.sunShadowMap.length,numDirLightShadows:Ot.directionalShadowMap.length,numPointLightShadows:Ot.pointShadowMap.length,numSpotLightShadows:Ot.spotShadowMap.length,numSpotLightShadowsWithMaps:Ot.numSpotLightShadowsWithMaps,numLightProbes:Ot.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:at.numPlanes,numClipIntersection:at.numIntersection,dithering:Nt.dithering,shadowMapEnabled:W.shadowMap.enabled&&Yt.length>0,shadowMapType:W.shadowMap.type,toneMapping:mn,decodeVideoTexture:$e&&Nt.map.isVideoTexture===!0&&r.getTransfer(Nt.map.colorSpace)===a,decodeVideoTextureEmissive:ln&&Nt.emissiveMap.isVideoTexture===!0&&r.getTransfer(Nt.emissiveMap.colorSpace)===a,premultipliedAlpha:Nt.premultipliedAlpha,doubleSided:Nt.side===p,flipSided:Nt.side===Wn,useDepthPacking:Nt.depthPacking>=0,depthPacking:Nt.depthPacking||0,index0AttributeName:Nt.index0AttributeName,extensionClipCullDistance:Be&&Nt.extensions.clipCullDistance===!0&&Y.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&Nt.extensions.multiDraw===!0||rn)&&Y.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Y.has("KHR_parallel_shader_compile"),customProgramCacheKey:Nt.customProgramCacheKey()};return an.vertexUv1s=Et.has(1),an.vertexUv2s=Et.has(2),an.vertexUv3s=Et.has(3),Et.clear(),an}function Bt(Nt){let Ot=[];if(Nt.shaderID)Ot.push(Nt.shaderID);else Ot.push(Nt.customVertexShaderID),Ot.push(Nt.customFragmentShaderID);if(Nt.defines!==void 0)for(let Yt in Nt.defines)Ot.push(Yt),Ot.push(Nt.defines[Yt]);if(Nt.isRawShaderMaterial===!1)Pt(Ot,Nt),wt(Ot,Nt),Ot.push(W.outputColorSpace);return Ot.push(Nt.customProgramCacheKey),Ot.join()}function Pt(Nt,Ot){Nt.push(Ot.precision),Nt.push(Ot.outputColorSpace),Nt.push(Ot.envMapMode),Nt.push(Ot.envMapPMREM),Nt.push(Ot.envMapMaxLod),Nt.push(Ot.envMapSize),Nt.push(Ot.mapUv),Nt.push(Ot.alphaMapUv),Nt.push(Ot.lightMapUv),Nt.push(Ot.aoMapUv),Nt.push(Ot.bumpMapUv),Nt.push(Ot.normalMapUv),Nt.push(Ot.displacementMapUv),Nt.push(Ot.emissiveMapUv),Nt.push(Ot.metalnessMapUv),Nt.push(Ot.roughnessMapUv),Nt.push(Ot.anisotropyMapUv),Nt.push(Ot.clearcoatMapUv),Nt.push(Ot.clearcoatNormalMapUv),Nt.push(Ot.clearcoatRoughnessMapUv),Nt.push(Ot.diffuseRoughnessMapUv),Nt.push(Ot.iridescenceMapUv),Nt.push(Ot.iridescenceThicknessMapUv),Nt.push(Ot.sheenColorMapUv),Nt.push(Ot.sheenRoughnessMapUv),Nt.push(Ot.specularMapUv),Nt.push(Ot.specularColorMapUv),Nt.push(Ot.specularIntensityMapUv),Nt.push(Ot.transmissionMapUv),Nt.push(Ot.thicknessMapUv),Nt.push(Ot.combine),Nt.push(Ot.fogExp2),Nt.push(Ot.sizeAttenuation),Nt.push(Ot.morphTargetsCount),Nt.push(Ot.numSunLights),Nt.push(Ot.numDirLights),Nt.push(Ot.numPointLights),Nt.push(Ot.numSpotLights),Nt.push(Ot.numSpotLightMaps),Nt.push(Ot.numHemiLights),Nt.push(Ot.numRectAreaLights),Nt.push(Ot.numSunLightShadows),Nt.push(Ot.numDirLightShadows),Nt.push(Ot.numPointLightShadows),Nt.push(Ot.numSpotLightShadows),Nt.push(Ot.numSpotLightShadowsWithMaps),Nt.push(Ot.numLightProbes),Nt.push(Ot.shadowMapType),Nt.push(Ot.toneMapping),Nt.push(Ot.numClippingPlanes),Nt.push(Ot.numClipIntersection),Nt.push(Ot.depthPacking)}function wt(Nt,Ot){if(Mt.disableAll(),Ot.instancing)Mt.enable(0);if(Ot.instancingColor)Mt.enable(1);if(Ot.instancingMorph)Mt.enable(2);if(Ot.matcap)Mt.enable(3);if(Ot.envMap)Mt.enable(4);if(Ot.normalMapObjectSpace)Mt.enable(5);if(Ot.normalMapTangentSpace)Mt.enable(6);if(Ot.clearcoat)Mt.enable(7);if(Ot.iridescence)Mt.enable(8);if(Ot.alphaTest)Mt.enable(9);if(Ot.vertexColors)Mt.enable(10);if(Ot.vertexAlphas)Mt.enable(11);if(Ot.vertexUv1s)Mt.enable(12);if(Ot.vertexUv2s)Mt.enable(13);if(Ot.vertexUv3s)Mt.enable(14);if(Ot.vertexTangents)Mt.enable(15);if(Ot.anisotropy)Mt.enable(16);if(Ot.alphaHash)Mt.enable(17);if(Ot.batching)Mt.enable(18);if(Ot.dispersion)Mt.enable(19);if(Ot.retroreflection)Mt.enable(24);if(Ot.diffuseRoughness)Mt.enable(25);if(Ot.batchingColor)Mt.enable(20);if(Ot.gradientMap)Mt.enable(21);if(Ot.packedNormalMap)Mt.enable(22);if(Ot.vertexNormals)Mt.enable(23);if(Nt.push(Mt.mask),Mt.disableAll(),Ot.fog)Mt.enable(0);if(Ot.useFog)Mt.enable(1);if(Ot.flatShading)Mt.enable(2);if(Ot.logarithmicDepthBuffer)Mt.enable(3);if(Ot.reversedDepthBuffer)Mt.enable(4);if(Ot.skinning)Mt.enable(5);if(Ot.morphTargets)Mt.enable(6);if(Ot.morphNormals)Mt.enable(7);if(Ot.morphColors)Mt.enable(8);if(Ot.premultipliedAlpha)Mt.enable(9);if(Ot.shadowMapEnabled)Mt.enable(10);if(Ot.doubleSided)Mt.enable(11);if(Ot.flipSided)Mt.enable(12);if(Ot.useDepthPacking)Mt.enable(13);if(Ot.dithering)Mt.enable(14);if(Ot.transmission)Mt.enable(15);if(Ot.sheen)Mt.enable(16);if(Ot.opaque)Mt.enable(17);if(Ot.pointsUvs)Mt.enable(18);if(Ot.decodeVideoTexture)Mt.enable(19);if(Ot.decodeVideoTextureEmissive)Mt.enable(20);if(Ot.alphaToCoverage)Mt.enable(21);if(Ot.numLightProbeGrids>0)Mt.enable(22);if(Ot.hasPositionAttribute)Mt.enable(23);Nt.push(Mt.mask)}function Gt(Nt){let Ot=Rt[Nt.type],Yt;if(Ot){let ie=fi[Ot];Yt=H.clone(ie.uniforms)}else Yt=Nt.uniforms;return Yt}function Wt(Nt,Ot){let Yt=Ct.get(Ot);if(Yt!==void 0)++Yt.usedTimes;else Yt=new Gg(W,Ot,Nt,tt),At.push(Yt),Ct.set(Ot,Yt);return Yt}function zt(Nt){if(--Nt.usedTimes===0){let Ot=At.indexOf(Nt);At[Ot]=At[At.length-1],At.pop(),Ct.delete(Nt.cacheKey),Nt.destroy()}}function Ht(Nt){bt.remove(Nt)}function qt(){bt.dispose()}return{getParameters:Dt,getProgramCacheKey:Bt,getUniforms:Gt,acquireProgram:Wt,releaseProgram:zt,releaseShaderCache:Ht,programs:At,dispose:qt}}function Vg(){let W=new WeakMap;function q(Mt){return W.has(Mt)}function Y(Mt){let bt=W.get(Mt);if(bt===void 0)bt={},W.set(Mt,bt);return bt}function Z(Mt){W.delete(Mt)}function tt(Mt,bt,Et){W.get(Mt)[bt]=Et}function at(){W=new WeakMap}return{has:q,get:Y,remove:Z,update:tt,dispose:at}}function Xg(W,q){if(W.groupOrder!==q.groupOrder)return W.groupOrder-q.groupOrder;else if(W.renderOrder!==q.renderOrder)return W.renderOrder-q.renderOrder;else if(W.material.id!==q.material.id)return W.material.id-q.material.id;else if(W.materialVariant!==q.materialVariant)return W.materialVariant-q.materialVariant;else if(W.z!==q.z)return W.z-q.z;else return W.id-q.id}function Vh(W,q){if(W.groupOrder!==q.groupOrder)return W.groupOrder-q.groupOrder;else if(W.renderOrder!==q.renderOrder)return W.renderOrder-q.renderOrder;else if(W.z!==q.z)return q.z-W.z;else return W.id-q.id}function Xh(){let W=[],q=0,Y=[],Z=[],tt=[];function at(){q=0,Y.length=0,Z.length=0,tt.length=0}function Mt(Rt){let Lt=0;if(Rt.isInstancedMesh)Lt+=2;if(Rt.isSkinnedMesh)Lt+=1;return Lt}function bt(Rt,Lt,Dt,Bt,Pt,wt){let Gt=W[q];if(Gt===void 0)Gt={id:Rt.id,object:Rt,geometry:Lt,material:Dt,materialVariant:Mt(Rt),groupOrder:Bt,renderOrder:Rt.renderOrder,z:Pt,group:wt},W[q]=Gt;else Gt.id=Rt.id,Gt.object=Rt,Gt.geometry=Lt,Gt.material=Dt,Gt.materialVariant=Mt(Rt),Gt.groupOrder=Bt,Gt.renderOrder=Rt.renderOrder,Gt.z=Pt,Gt.group=wt;return q++,Gt}function Et(Rt,Lt,Dt,Bt,Pt,wt,Gt){if(Gt.reversedDepth===!0)Pt=-Pt;let Wt=bt(Rt,Lt,Dt,Bt,Pt,wt);if(Dt.transmission>0)Z.push(Wt);else if(Dt.transparent===!0)tt.push(Wt);else Y.push(Wt)}function At(Rt,Lt,Dt,Bt,Pt,wt){let Gt=bt(Rt,Lt,Dt,Bt,Pt,wt);if(Dt.transmission>0)Z.unshift(Gt);else if(Dt.transparent===!0)tt.unshift(Gt);else Y.unshift(Gt)}function Ct(Rt,Lt){if(Y.length>1)Y.sort(Rt||Xg);if(Z.length>1)Z.sort(Lt||Vh);if(tt.length>1)tt.sort(Lt||Vh)}function It(){for(let Rt=q,Lt=W.length;Rt<Lt;Rt++){let Dt=W[Rt];if(Dt.id===null)break;Dt.id=null,Dt.object=null,Dt.geometry=null,Dt.material=null,Dt.group=null}}return{opaque:Y,transmissive:Z,transparent:tt,init:at,push:Et,unshift:At,finish:It,sort:Ct}}function qg(){let W=new WeakMap;function q(Z,tt){let at=W.get(Z),Mt;if(at===void 0)Mt=new Xh,W.set(Z,[Mt]);else if(tt>=at.length)Mt=new Xh,at.push(Mt);else Mt=at[tt];return Mt}function Y(){W=new WeakMap}return{get:q,dispose:Y}}function Yg(){let W={};return{get:function(q){if(W[q.id]!==void 0)return W[q.id];let Y;switch(q.type){case"SunLight":case"DirectionalLight":Y={direction:new t,color:new n};break;case"SpotLight":Y={position:new t,direction:new t,color:new n,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Y={position:new t,color:new n,distance:0,decay:0};break;case"HemisphereLight":Y={direction:new t,skyColor:new n,groundColor:new n};break;case"RectAreaLight":Y={color:new n,position:new t,halfWidth:new t,halfHeight:new t};break}return W[q.id]=Y,Y}}}function Zg(){let W={};return{get:function(q){if(W[q.id]!==void 0)return W[q.id];let Y;switch(q.type){case"SunLight":case"DirectionalLight":Y={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e};break;case"SpotLight":Y={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e};break;case"PointLight":Y={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e,shadowCameraNear:1,shadowCameraFar:1000};break}return W[q.id]=Y,Y}}}var Jg=0;function $g(W,q){return(q.castShadow?2:0)-(W.castShadow?2:0)+(q.map?1:0)-(W.map?1:0)}function Kg(W){let q=new Yg,Y=Zg(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let At=0;At<9;At++)Z.probe.push(new t);let tt=new t,at=new o,Mt=new o;function bt(At){let Ct=0,It=0,Rt=0;for(let ee=0;ee<9;ee++)Z.probe[ee].set(0,0,0);let Lt=0,Dt=0,Bt=0,Pt=0,wt=0,Gt=0,Wt=0,zt=0,Ht=0,qt=0,Nt=0,Ot=0,Yt=0,ie=0;At.sort($g);for(let ee=0,he=At.length;ee<he;ee++){let Xt=At[ee],{color:ae,intensity:le,distance:te}=Xt,Me=null;if(Xt.shadow&&Xt.shadow.map)if(Xt.shadow.map.texture.format===Vi)Me=Xt.shadow.map.texture;else Me=Xt.shadow.map.depthTexture||Xt.shadow.map.texture;if(Xt.isAmbientLight)Ct+=ae.r*le,It+=ae.g*le,Rt+=ae.b*le;else if(Xt.isLightProbe){for(let se=0;se<9;se++)Z.probe[se].addScaledVector(Xt.sh.coefficients[se],le);ie++}else if(Xt.isSunLight){let se=q.get(Xt);if(se.color.copy(Xt.color).multiplyScalar(Xt.intensity),Xt.castShadow){let de=Xt.shadow,ye=Y.get(Xt);ye.shadowIntensity=de.intensity,ye.shadowBias=de.bias,ye.shadowNormalBias=de.normalBias,ye.shadowRadius=de.radius,ye.shadowMapSize.copy(de.mapSize).multiply(de.getFrameExtents()),Z.sunShadow[Dt]=ye,Z.sunShadowMap[Dt]=Me;let Oe=de.getViewportCount();for(let fe=0;fe<Oe;fe++)Z.sunShadowMatrix[Bt+fe]=de.getMatrix(fe),Z.sunShadowCascade[Bt+fe]=de._cascadeData[fe];Bt+=Oe,Dt++}Z.sun[Lt]=se,Lt++}else if(Xt.isDirectionalLight){let se=q.get(Xt);if(se.color.copy(Xt.color).multiplyScalar(Xt.intensity),Xt.castShadow){let de=Xt.shadow,ye=Y.get(Xt);ye.shadowIntensity=de.intensity,ye.shadowBias=de.bias,ye.shadowNormalBias=de.normalBias,ye.shadowRadius=de.radius,ye.shadowMapSize=de.mapSize,Z.directionalShadow[Pt]=ye,Z.directionalShadowMap[Pt]=Me,Z.directionalShadowMatrix[Pt]=Xt.shadow.matrix,Ht++}Z.directional[Pt]=se,Pt++}else if(Xt.isSpotLight){let se=q.get(Xt);se.position.setFromMatrixPosition(Xt.matrixWorld),se.color.copy(ae).multiplyScalar(le),se.distance=te,se.coneCos=Math.cos(Xt.angle),se.penumbraCos=Math.cos(Xt.angle*(1-Xt.penumbra)),se.decay=Xt.decay,Z.spot[Gt]=se;let de=Xt.shadow;if(Xt.map){if(Z.spotLightMap[Ot]=Xt.map,Ot++,de.updateMatrices(Xt),Xt.castShadow)Yt++}if(Z.spotLightMatrix[Gt]=de.matrix,Xt.castShadow){let ye=Y.get(Xt);ye.shadowIntensity=de.intensity,ye.shadowBias=de.bias,ye.shadowNormalBias=de.normalBias,ye.shadowRadius=de.radius,ye.shadowMapSize=de.mapSize,Z.spotShadow[Gt]=ye,Z.spotShadowMap[Gt]=Me,Nt++}Gt++}else if(Xt.isRectAreaLight){let se=q.get(Xt);se.color.copy(ae).multiplyScalar(le),se.halfWidth.set(Xt.width*0.5,0,0),se.halfHeight.set(0,Xt.height*0.5,0),Z.rectArea[Wt]=se,Wt++}else if(Xt.isPointLight){let se=q.get(Xt);if(se.color.copy(Xt.color).multiplyScalar(Xt.intensity),se.distance=Xt.distance,se.decay=Xt.decay,Xt.castShadow){let de=Xt.shadow,ye=Y.get(Xt);ye.shadowIntensity=de.intensity,ye.shadowBias=de.bias,ye.shadowNormalBias=de.normalBias,ye.shadowRadius=de.radius,ye.shadowMapSize=de.mapSize,ye.shadowCameraNear=de.camera.near,ye.shadowCameraFar=de.camera.far,Z.pointShadow[wt]=ye,Z.pointShadowMap[wt]=Me,Z.pointShadowMatrix[wt]=Xt.shadow.matrix,qt++}Z.point[wt]=se,wt++}else if(Xt.isHemisphereLight){let se=q.get(Xt);se.skyColor.copy(Xt.color).multiplyScalar(le),se.groundColor.copy(Xt.groundColor).multiplyScalar(le),Z.hemi[zt]=se,zt++}}if(Wt>0)if(W.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=Ie.LTC_FLOAT_1,Z.rectAreaLTC2=Ie.LTC_FLOAT_2;else Z.rectAreaLTC1=Ie.LTC_HALF_1,Z.rectAreaLTC2=Ie.LTC_HALF_2;Z.ambient[0]=Ct,Z.ambient[1]=It,Z.ambient[2]=Rt;let Zt=Z.hash;if(Zt.sunLength!==Lt||Zt.directionalLength!==Pt||Zt.pointLength!==wt||Zt.spotLength!==Gt||Zt.rectAreaLength!==Wt||Zt.hemiLength!==zt||Zt.numSunShadows!==Dt||Zt.numDirectionalShadows!==Ht||Zt.numPointShadows!==qt||Zt.numSpotShadows!==Nt||Zt.numSpotMaps!==Ot||Zt.numLightProbes!==ie)Z.sun.length=Lt,Z.directional.length=Pt,Z.spot.length=Gt,Z.rectArea.length=Wt,Z.point.length=wt,Z.hemi.length=zt,Z.sunShadow.length=Dt,Z.sunShadowMap.length=Dt,Z.sunShadowMatrix.length=Bt,Z.sunShadowCascade.length=Bt,Z.directionalShadow.length=Ht,Z.directionalShadowMap.length=Ht,Z.directionalShadowMatrix.length=Ht,Z.pointShadow.length=qt,Z.pointShadowMap.length=qt,Z.pointShadowMatrix.length=qt,Z.spotShadow.length=Nt,Z.spotShadowMap.length=Nt,Z.spotLightMatrix.length=Nt+Ot-Yt,Z.spotLightMap.length=Ot,Z.numSpotLightShadowsWithMaps=Yt,Z.numLightProbes=ie,Zt.sunLength=Lt,Zt.directionalLength=Pt,Zt.pointLength=wt,Zt.spotLength=Gt,Zt.rectAreaLength=Wt,Zt.hemiLength=zt,Zt.numSunShadows=Dt,Zt.numDirectionalShadows=Ht,Zt.numPointShadows=qt,Zt.numSpotShadows=Nt,Zt.numSpotMaps=Ot,Zt.numLightProbes=ie,Z.version=Jg++}function Et(At,Ct){let It=0,Rt=0,Lt=0,Dt=0,Bt=0,Pt=0,wt=Ct.matrixWorldInverse;for(let Gt=0,Wt=At.length;Gt<Wt;Gt++){let zt=At[Gt];if(zt.isSunLight){let Ht=Z.sun[It];Ht.direction.setFromMatrixPosition(zt.matrixWorld),Ht.direction.transformDirection(wt),It++}else if(zt.isDirectionalLight){let Ht=Z.directional[Rt];Ht.direction.setFromMatrixPosition(zt.matrixWorld),tt.setFromMatrixPosition(zt.target.matrixWorld),Ht.direction.sub(tt),Ht.direction.transformDirection(wt),Rt++}else if(zt.isSpotLight){let Ht=Z.spot[Dt];Ht.position.setFromMatrixPosition(zt.matrixWorld),Ht.position.applyMatrix4(wt),Ht.direction.setFromMatrixPosition(zt.matrixWorld),tt.setFromMatrixPosition(zt.target.matrixWorld),Ht.direction.sub(tt),Ht.direction.transformDirection(wt),Dt++}else if(zt.isRectAreaLight){let Ht=Z.rectArea[Bt];Ht.position.setFromMatrixPosition(zt.matrixWorld),Ht.position.applyMatrix4(wt),Mt.identity(),at.copy(zt.matrixWorld),at.premultiply(wt),Mt.extractRotation(at),Ht.halfWidth.set(zt.width*0.5,0,0),Ht.halfHeight.set(0,zt.height*0.5,0),Ht.halfWidth.applyMatrix4(Mt),Ht.halfHeight.applyMatrix4(Mt),Bt++}else if(zt.isPointLight){let Ht=Z.point[Lt];Ht.position.setFromMatrixPosition(zt.matrixWorld),Ht.position.applyMatrix4(wt),Lt++}else if(zt.isHemisphereLight){let Ht=Z.hemi[Pt];Ht.direction.setFromMatrixPosition(zt.matrixWorld),Ht.direction.transformDirection(wt),Pt++}}}return{setup:bt,setupView:Et,state:Z}}function qh(W){let q=new Kg(W),Y=[],Z=[],tt=[];function at(It){Ct.camera=It,Y.length=0,Z.length=0,tt.length=0}function Mt(It){if(It.isLightProbeGrid)tt.push(It);else Y.push(It)}function bt(It){Z.push(It)}function Et(){q.setup(Y)}function At(It){q.setupView(Y,It)}let Ct={lightsArray:Y,shadowsArray:Z,lightProbeGridArray:tt,camera:null,lights:q,transmissionRenderTarget:{},textureUnits:0};return{init:at,state:Ct,setupLights:Et,setupLightsView:At,pushLight:Mt,pushShadow:bt}}function Qg(W){let q=new WeakMap;function Y(tt,at=0){let Mt=q.get(tt),bt;if(Mt===void 0)bt=new qh(W),q.set(tt,[bt]);else if(at>=Mt.length)bt=new qh(W),Mt.push(bt);else bt=Mt[at];return bt}function Z(){q=new WeakMap}return{get:Y,dispose:Z}}var jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e_=[new t(1,0,0),new t(-1,0,0),new t(0,1,0),new t(0,-1,0),new t(0,0,1),new t(0,0,-1)],n_=[new t(0,-1,0),new t(0,-1,0),new t(0,0,1),new t(0,0,-1),new t(0,-1,0),new t(0,-1,0)],Yh=new o,Ks=new t,vl=new t;function i_(W,q,Y){let Z=new ki,tt=new e,at=new e,Mt=new Tn,bt=new nl,Et=new il,At={},Ct=Y.maxTextureSize,It={[ms]:Wn,[Wn]:ms,[p]:p},Rt=new d({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new e},radius:{value:4}},vertexShader:jg,fragmentShader:t_}),Lt=Rt.clone();Lt.defines.HORIZONTAL_PASS=1;let Dt=new l;Dt.setAttribute("position",new E(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let Bt=new i(Dt,Rt),Pt=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let wt=this.type;this.render=function(qt,Nt,Ot){if(Pt.enabled===!1)return;if(Pt.autoUpdate===!1&&Pt.needsUpdate===!1)return;if(qt.length===0)return;if(this.type===_c)Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks;let Yt=W.getRenderTarget(),ie=W.getActiveCubeFace(),Zt=W.getActiveMipmapLevel(),ee=W.state;if(ee.setBlending(B),ee.buffers.depth.getReversed()===!0)ee.buffers.color.setClear(0,0,0,0);else ee.buffers.color.setClear(1,1,1,1);ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);let he=wt!==this.type;if(he)Nt.traverse(function(Xt){if(Xt.material)if(Array.isArray(Xt.material))Xt.material.forEach((ae)=>ae.needsUpdate=!0);else Xt.material.needsUpdate=!0});for(let Xt=0,ae=qt.length;Xt<ae;Xt++){let le=qt[Xt],te=le.shadow;if(te===void 0){Ke("WebGLShadowMap:",le,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;tt.copy(te.mapSize);let Me=te.getFrameExtents();if(tt.multiply(Me),at.copy(te.mapSize),tt.x>Ct||tt.y>Ct){if(tt.x>Ct)at.x=Math.floor(Ct/Me.x),tt.x=at.x*Me.x,te.mapSize.x=at.x;if(tt.y>Ct)at.y=Math.floor(Ct/Me.y),tt.y=at.y*Me.y,te.mapSize.y=at.y}let se=W.state.buffers.depth.getReversed();if(te.camera._reversedDepth=se,te.map===null||he===!0){if(te.map!==null){if(te.map.depthTexture!==null)te.map.depthTexture.dispose(),te.map.depthTexture=null;te.map.dispose()}if(this.type===ps){if(le.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new m(tt.x,tt.y,{format:Vi,type:x,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),te.map.texture.name=le.name+".shadowMap",te.map.depthTexture=new qi(tt.x,tt.y,Si),te.map.depthTexture.name=le.name+".shadowMapDepth",te.map.depthTexture.format=vs,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Ii,te.map.depthTexture.magFilter=Ii}else{if(le.isPointLight)te.map=new fa(tt.x),te.map.depthTexture=new ta(tt.x,Li);else te.map=new m(tt.x,tt.y),te.map.depthTexture=new qi(tt.x,tt.y,Li);if(te.map.depthTexture.name=le.name+".shadowMap",te.map.depthTexture.format=vs,this.type===ks)te.map.depthTexture.compareFunction=se?zo:Bo,te.map.depthTexture.minFilter=Kn,te.map.depthTexture.magFilter=Kn;else te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Ii,te.map.depthTexture.magFilter=Ii}te.camera.updateProjectionMatrix()}if(te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==tt.x||te.map.height!==tt.y))te.map.setSize(tt.x,tt.y);let de=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();if(le.isPointLight!==!0)te.updateMatrices(le,Ot);let ye=(te.camera.layers.mask&4294967294)!==0?te.camera.layers:Ot.layers;for(let Oe=0;Oe<de;Oe++){let fe=te.getCamera(Oe);if(le.isPointLight){let{camera:xe,matrix:ze}=te,Ye=le.distance||xe.far;if(Ye!==xe.far)xe.far=Ye,xe.updateProjectionMatrix();Ks.setFromMatrixPosition(le.matrixWorld),xe.position.copy(Ks),vl.copy(xe.position),vl.add(e_[Oe]),xe.up.copy(n_[Oe]),xe.lookAt(vl),xe.updateMatrixWorld(),ze.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Yh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),te._frustum.setFromProjectionMatrix(Yh,xe.coordinateSystem,xe.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)W.setRenderTarget(te.map,Oe),W.clear();else{if(Oe===0)W.setRenderTarget(te.map),W.clear();let xe=te.getViewport(Oe);Mt.set(at.x*xe.x,at.y*xe.y,at.x*xe.z,at.y*xe.w),ee.viewport(Mt)}Z=te.getFrustum(Oe),zt(Nt,Ot,fe,le,ye,this.type)}if(te.isPointLightShadow!==!0&&this.type===ps)Gt(te,Ot);te.needsUpdate=!1}wt=this.type,Pt.needsUpdate=!1,W.setRenderTarget(Yt,ie,Zt)};function Gt(qt,Nt){let Ot=q.update(Bt);if(Rt.defines.VSM_SAMPLES!==qt.blurSamples)Rt.defines.VSM_SAMPLES=qt.blurSamples,Lt.defines.VSM_SAMPLES=qt.blurSamples,Rt.needsUpdate=!0,Lt.needsUpdate=!0;if(qt.mapPass===null)qt.mapPass=new m(tt.x,tt.y,{format:Vi,type:x});else if(qt.mapPass.width!==qt.map.width||qt.mapPass.height!==qt.map.height)qt.mapPass.setSize(qt.map.width,qt.map.height);Rt.uniforms.shadow_pass.value=qt.map.depthTexture,Rt.uniforms.resolution.value.set(qt.map.width,qt.map.height),Rt.uniforms.radius.value=qt.radius,W.setRenderTarget(qt.mapPass),W.clear(),W.renderBufferDirect(Nt,null,Ot,Rt,Bt,null),Lt.uniforms.shadow_pass.value=qt.mapPass.texture,Lt.uniforms.resolution.value.set(qt.map.width,qt.map.height),Lt.uniforms.radius.value=qt.radius,W.setRenderTarget(qt.map),W.clear(),W.renderBufferDirect(Nt,null,Ot,Lt,Bt,null)}function Wt(qt,Nt,Ot,Yt){let ie=null,Zt=Ot.isPointLight===!0?qt.customDistanceMaterial:qt.customDepthMaterial;if(Zt!==void 0)ie=Zt;else if(ie=Ot.isPointLight===!0?Et:bt,W.localClippingEnabled&&Nt.clipShadows===!0&&Array.isArray(Nt.clippingPlanes)&&Nt.clippingPlanes.length!==0||Nt.displacementMap&&Nt.displacementScale!==0||Nt.alphaMap&&Nt.alphaTest>0||Nt.map&&Nt.alphaTest>0||Nt.alphaToCoverage===!0){let ee=ie.uuid,he=Nt.uuid,Xt=At[ee];if(Xt===void 0)Xt={},At[ee]=Xt;let ae=Xt[he];if(ae===void 0)ae=ie.clone(),Xt[he]=ae,Nt.addEventListener("dispose",Ht);ie=ae}if(ie.visible=Nt.visible,ie.wireframe=Nt.wireframe,Yt===ps)ie.side=Nt.shadowSide!==null?Nt.shadowSide:Nt.side;else ie.side=Nt.shadowSide!==null?Nt.shadowSide:It[Nt.side];if(ie.alphaMap=Nt.alphaMap,ie.alphaTest=Nt.alphaToCoverage===!0?0.5:Nt.alphaTest,ie.map=Nt.map,ie.clipShadows=Nt.clipShadows,ie.clippingPlanes=Nt.clippingPlanes,ie.clipIntersection=Nt.clipIntersection,ie.displacementMap=Nt.displacementMap,ie.displacementScale=Nt.displacementScale,ie.displacementBias=Nt.displacementBias,ie.wireframeLinewidth=Nt.wireframeLinewidth,ie.linewidth=Nt.linewidth,Ot.isPointLight===!0&&ie.isMeshDistanceMaterial===!0){let ee=W.properties.get(ie);ee.light=Ot}return ie}function zt(qt,Nt,Ot,Yt,ie,Zt){if(qt.visible===!1)return;if(qt.layers.test(ie)&&(qt.isMesh||qt.isLine||qt.isPoints)){if((qt.castShadow||qt.receiveShadow&&Zt===ps)&&(!qt.frustumCulled||qt.intersectsFrustum(Z))){qt.modelViewMatrix.multiplyMatrices(Ot.matrixWorldInverse,qt.matrixWorld);let Xt=q.update(qt),ae=qt.material;if(Array.isArray(ae)){let le=Xt.groups;for(let te=0,Me=le.length;te<Me;te++){let se=le[te],de=ae[se.materialIndex];if(de&&de.visible){let ye=Wt(qt,de,Yt,Zt);qt.onBeforeShadow(W,qt,Nt,Ot,Xt,ye,se),W.renderBufferDirect(Ot,null,Xt,ye,qt,se),qt.onAfterShadow(W,qt,Nt,Ot,Xt,ye,se)}}}else if(ae.visible){let le=Wt(qt,ae,Yt,Zt);qt.onBeforeShadow(W,qt,Nt,Ot,Xt,le,null),W.renderBufferDirect(Ot,null,Xt,le,qt,null),qt.onAfterShadow(W,qt,Nt,Ot,Xt,le,null)}}}let he=qt.children;for(let Xt=0,ae=he.length;Xt<ae;Xt++)zt(he[Xt],Nt,Ot,Yt,ie,Zt)}function Ht(qt){qt.target.removeEventListener("dispose",Ht);for(let Ot in At){let Yt=At[Ot],ie=qt.target.uuid;if(ie in Yt)Yt[ie].dispose(),delete Yt[ie]}}}function s_(W,q){function Y(){let Vt=!1,ge=new Tn,oe=null,ue=new Tn(0,0,0,0);return{setMask:function(Se){if(oe!==Se&&!Vt)W.colorMask(Se,Se,Se,Se),oe=Se},setLocked:function(Se){Vt=Se},setClear:function(Se,Ae,Ve,Be,mn){if(mn===!0)Se*=Be,Ae*=Be,Ve*=Be;if(ge.set(Se,Ae,Ve,Be),ue.equals(ge)===!1)W.clearColor(Se,Ae,Ve,Be),ue.copy(ge)},reset:function(){Vt=!1,oe=null,ue.set(-1,0,0,0)}}}function Z(){let Vt=!1,ge=!1,oe=null,ue=null,Se=null;return{setReversed:function(Ae){if(ge!==Ae){let Ve=q.get("EXT_clip_control");if(Ae)Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT);else Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);ge=Ae;let Be=Se;Se=null,this.setClear(Be)}},getReversed:function(){return ge},setTest:function(Ae){if(Ae)Ne(W.DEPTH_TEST);else fn(W.DEPTH_TEST)},setMask:function(Ae){if(oe!==Ae&&!Vt)W.depthMask(Ae),oe=Ae},setFunc:function(Ae){if(ge)Ae=fh[Ae];if(ue!==Ae){switch(Ae){case Bc:W.depthFunc(W.NEVER);break;case zc:W.depthFunc(W.ALWAYS);break;case Gc:W.depthFunc(W.LESS);break;case Ka:W.depthFunc(W.LEQUAL);break;case kc:W.depthFunc(W.EQUAL);break;case Hc:W.depthFunc(W.GEQUAL);break;case Wc:W.depthFunc(W.GREATER);break;case Vc:W.depthFunc(W.NOTEQUAL);break;default:W.depthFunc(W.LEQUAL)}ue=Ae}},setLocked:function(Ae){Vt=Ae},setClear:function(Ae){if(Se!==Ae){if(Se=Ae,ge)Ae=1-Ae;W.clearDepth(Ae)}},reset:function(){Vt=!1,oe=null,ue=null,Se=null,ge=!1}}}function tt(){let Vt=!1,ge=null,oe=null,ue=null,Se=null,Ae=null,Ve=null,Be=null,mn=null;return{setTest:function(be){if(!Vt)if(be)Ne(W.STENCIL_TEST);else fn(W.STENCIL_TEST)},setMask:function(be){if(ge!==be&&!Vt)W.stencilMask(be),ge=be},setFunc:function(be,an,sn){if(oe!==be||ue!==an||Se!==sn)W.stencilFunc(be,an,sn),oe=be,ue=an,Se=sn},setOp:function(be,an,sn){if(Ae!==be||Ve!==an||Be!==sn)W.stencilOp(be,an,sn),Ae=be,Ve=an,Be=sn},setLocked:function(be){Vt=be},setClear:function(be){if(mn!==be)W.clearStencil(be),mn=be},reset:function(){Vt=!1,ge=null,oe=null,ue=null,Se=null,Ae=null,Ve=null,Be=null,mn=null}}}let at=new Y,Mt=new Z,bt=new tt,Et={},At=new WeakMap,Ct={},It={},Rt={},Lt=new WeakMap,Dt=[],Bt=null,Pt=!1,wt=null,Gt=null,Wt=null,zt=null,Ht=null,qt=null,Nt=null,Ot=new n(0,0,0),Yt=0,ie=!1,Zt=null,ee=null,he=null,Xt=null,ae=null,le=W.getParameter(W.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,Me=0,se=W.getParameter(W.VERSION);if(se.indexOf("WebGL")!==-1)Me=parseFloat(/^WebGL (\d)/.exec(se)[1]),te=Me>=1;else if(se.indexOf("OpenGL ES")!==-1)Me=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),te=Me>=2;let de=null,ye={},Oe=W.getParameter(W.SCISSOR_BOX),fe=W.getParameter(W.VIEWPORT),xe=new Tn().fromArray(Oe),ze=new Tn().fromArray(fe);function Ye(Vt,ge,oe,ue){let Se=new Uint8Array(4),Ae=W.createTexture();W.bindTexture(Vt,Ae),W.texParameteri(Vt,W.TEXTURE_MIN_FILTER,W.NEAREST),W.texParameteri(Vt,W.TEXTURE_MAG_FILTER,W.NEAREST);for(let Ve=0;Ve<oe;Ve++)if(Vt===W.TEXTURE_3D||Vt===W.TEXTURE_2D_ARRAY)W.texImage3D(ge,0,W.RGBA,1,1,ue,0,W.RGBA,W.UNSIGNED_BYTE,Se);else W.texImage2D(ge+Ve,0,W.RGBA,1,1,0,W.RGBA,W.UNSIGNED_BYTE,Se);return Ae}let Ze={};Ze[W.TEXTURE_2D]=Ye(W.TEXTURE_2D,W.TEXTURE_2D,1),Ze[W.TEXTURE_CUBE_MAP]=Ye(W.TEXTURE_CUBE_MAP,W.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ze[W.TEXTURE_2D_ARRAY]=Ye(W.TEXTURE_2D_ARRAY,W.TEXTURE_2D_ARRAY,1,1),Ze[W.TEXTURE_3D]=Ye(W.TEXTURE_3D,W.TEXTURE_3D,1,1),at.setClear(0,0,0,1),Mt.setClear(1),bt.setClear(0),Ne(W.DEPTH_TEST),Mt.setFunc(Ka),De(!1),Je(Za),Ne(W.CULL_FACE),we(B);function Ne(Vt){if(Ct[Vt]!==!0)W.enable(Vt),Ct[Vt]=!0}function fn(Vt){if(Ct[Vt]!==!1)W.disable(Vt),Ct[Vt]=!1}function rn(Vt,ge){if(Rt[Vt]!==ge){if(W.bindFramebuffer(Vt,ge),Rt[Vt]=ge,Vt===W.DRAW_FRAMEBUFFER)Rt[W.FRAMEBUFFER]=ge;if(Vt===W.FRAMEBUFFER)Rt[W.DRAW_FRAMEBUFFER]=ge;return!0}return!1}function $e(Vt,ge){let oe=Dt,ue=!1;if(Vt){if(oe=Lt.get(ge),oe===void 0)oe=[],Lt.set(ge,oe);let Se=Vt.textures;if(oe.length!==Se.length||oe[0]!==W.COLOR_ATTACHMENT0){for(let Ae=0,Ve=Se.length;Ae<Ve;Ae++)oe[Ae]=W.COLOR_ATTACHMENT0+Ae;oe.length=Se.length,ue=!0}}else if(oe[0]!==W.BACK)oe[0]=W.BACK,ue=!0;if(ue)W.drawBuffers(oe)}function dn(Vt){if(Bt!==Vt)return W.useProgram(Vt),Bt=Vt,!0;return!1}let pe={[gs]:W.FUNC_ADD,[vc]:W.FUNC_SUBTRACT,[yc]:W.FUNC_REVERSE_SUBTRACT};pe[Sc]=W.MIN,pe[Mc]=W.MAX;let Ee={[bc]:W.ZERO,[Ec]:W.ONE,[Ac]:W.SRC_COLOR,[wc]:W.SRC_ALPHA,[Nc]:W.SRC_ALPHA_SATURATE,[Pc]:W.DST_COLOR,[Cc]:W.DST_ALPHA,[Tc]:W.ONE_MINUS_SRC_COLOR,[Rc]:W.ONE_MINUS_SRC_ALPHA,[Lc]:W.ONE_MINUS_DST_COLOR,[Ic]:W.ONE_MINUS_DST_ALPHA,[Dc]:W.CONSTANT_COLOR,[Uc]:W.ONE_MINUS_CONSTANT_COLOR,[Fc]:W.CONSTANT_ALPHA,[Oc]:W.ONE_MINUS_CONSTANT_ALPHA};function we(Vt,ge,oe,ue,Se,Ae,Ve,Be,mn,be){if(Vt===B){if(Pt===!0)fn(W.BLEND),Pt=!1;return}if(Pt===!1)Ne(W.BLEND),Pt=!0;if(Vt!==xc){if(Vt!==wt||be!==ie){if(Gt!==gs||Ht!==gs)W.blendEquation(W.FUNC_ADD),Gt=gs,Ht=gs;if(be)switch(Vt){case Hs:W.blendFuncSeparate(W.ONE,W.ONE_MINUS_SRC_ALPHA,W.ONE,W.ONE_MINUS_SRC_ALPHA);break;case _:W.blendFunc(W.ONE,W.ONE);break;case Ja:W.blendFuncSeparate(W.ZERO,W.ONE_MINUS_SRC_COLOR,W.ZERO,W.ONE);break;case $a:W.blendFuncSeparate(W.DST_COLOR,W.ONE_MINUS_SRC_ALPHA,W.ZERO,W.ONE);break;default:Qe("WebGLState: Invalid blending: ",Vt);break}else switch(Vt){case Hs:W.blendFuncSeparate(W.SRC_ALPHA,W.ONE_MINUS_SRC_ALPHA,W.ONE,W.ONE_MINUS_SRC_ALPHA);break;case _:W.blendFuncSeparate(W.SRC_ALPHA,W.ONE,W.ONE,W.ONE);break;case Ja:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $a:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",Vt);break}Wt=null,zt=null,qt=null,Nt=null,Ot.set(0,0,0),Yt=0,wt=Vt,ie=be}return}if(Se=Se||ge,Ae=Ae||oe,Ve=Ve||ue,ge!==Gt||Se!==Ht)W.blendEquationSeparate(pe[ge],pe[Se]),Gt=ge,Ht=Se;if(oe!==Wt||ue!==zt||Ae!==qt||Ve!==Nt)W.blendFuncSeparate(Ee[oe],Ee[ue],Ee[Ae],Ee[Ve]),Wt=oe,zt=ue,qt=Ae,Nt=Ve;if(Be.equals(Ot)===!1||mn!==Yt)W.blendColor(Be.r,Be.g,Be.b,mn),Ot.copy(Be),Yt=mn;wt=Vt,ie=!1}function Ue(Vt,ge){Vt.side===p?fn(W.CULL_FACE):Ne(W.CULL_FACE);let oe=Vt.side===Wn;if(ge)oe=!oe;De(oe),Vt.blending===Hs&&Vt.transparent===!1?we(B):we(Vt.blending,Vt.blendEquation,Vt.blendSrc,Vt.blendDst,Vt.blendEquationAlpha,Vt.blendSrcAlpha,Vt.blendDstAlpha,Vt.blendColor,Vt.blendAlpha,Vt.premultipliedAlpha),Mt.setFunc(Vt.depthFunc),Mt.setTest(Vt.depthTest),Mt.setMask(Vt.depthWrite),at.setMask(Vt.colorWrite);let ue=Vt.stencilWrite;if(bt.setTest(ue),ue)bt.setMask(Vt.stencilWriteMask),bt.setFunc(Vt.stencilFunc,Vt.stencilRef,Vt.stencilFuncMask),bt.setOp(Vt.stencilFail,Vt.stencilZFail,Vt.stencilZPass);ln(Vt.polygonOffset,Vt.polygonOffsetFactor,Vt.polygonOffsetUnits),Vt.alphaToCoverage===!0?Ne(W.SAMPLE_ALPHA_TO_COVERAGE):fn(W.SAMPLE_ALPHA_TO_COVERAGE)}function De(Vt){if(Zt!==Vt){if(Vt)W.frontFace(W.CW);else W.frontFace(W.CCW);Zt=Vt}}function Je(Vt){if(Vt!==mc){if(Ne(W.CULL_FACE),Vt!==ee)if(Vt===Za)W.cullFace(W.BACK);else if(Vt===gc)W.cullFace(W.FRONT);else W.cullFace(W.FRONT_AND_BACK)}else fn(W.CULL_FACE);ee=Vt}function qe(Vt){if(Vt!==he){if(te)W.lineWidth(Vt);he=Vt}}function ln(Vt,ge,oe){if(Vt){if(Ne(W.POLYGON_OFFSET_FILL),Xt!==ge||ae!==oe){if(Xt=ge,ae=oe,Mt.getReversed())ge=-ge,oe=-oe;W.polygonOffset(ge,oe)}}else fn(W.POLYGON_OFFSET_FILL)}function hn(Vt){if(Vt)Ne(W.SCISSOR_TEST);else fn(W.SCISSOR_TEST)}function _n(Vt){if(Vt===void 0)Vt=W.TEXTURE0+le-1;if(de!==Vt)W.activeTexture(Vt),de=Vt}function $t(Vt,ge,oe){if(oe===void 0)if(de===null)oe=W.TEXTURE0+le-1;else oe=de;let ue=ye[oe];if(ue===void 0)ue={type:void 0,texture:void 0},ye[oe]=ue;if(ue.type!==Vt||ue.texture!==ge){if(de!==oe)W.activeTexture(oe),de=oe;W.bindTexture(Vt,ge||Ze[Vt]),ue.type=Vt,ue.texture=ge}}function In(){let Vt=ye[de];if(Vt!==void 0&&Vt.type!==void 0)W.bindTexture(Vt.type,null),Vt.type=void 0,Vt.texture=void 0}function en(){try{W.compressedTexImage2D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function En(){try{W.compressedTexImage3D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function Le(){try{W.texSubImage2D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function yn(){try{W.texSubImage3D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function We(){try{W.compressedTexSubImage2D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function je(){try{W.compressedTexSubImage3D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function Fn(){try{W.texStorage2D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function Pn(){try{W.texStorage3D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function kt(){try{W.texImage2D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function Ut(){try{W.texImage3D(...arguments)}catch(Vt){Qe("WebGLState:",Vt)}}function Kt(Vt){if(It[Vt]!==void 0)return It[Vt];else return W.getParameter(Vt)}function _e(Vt,ge){if(It[Vt]!==ge)W.pixelStorei(Vt,ge),It[Vt]=ge}function me(Vt){if(xe.equals(Vt)===!1)W.scissor(Vt.x,Vt.y,Vt.z,Vt.w),xe.copy(Vt)}function Te(Vt){if(ze.equals(Vt)===!1)W.viewport(Vt.x,Vt.y,Vt.z,Vt.w),ze.copy(Vt)}function ve(Vt,ge){let oe=At.get(ge);if(oe===void 0)oe=new WeakMap,At.set(ge,oe);let ue=oe.get(Vt);if(ue===void 0)ue=W.getUniformBlockIndex(ge,Vt.name),W.uniformBlockBinding(ge,ue,ue),oe.set(Vt,ue)}function re(Vt,ge,oe){let Se=At.get(ge).get(Vt);if(Et[Se]!==oe)W.bindBufferBase(W.UNIFORM_BUFFER,Se,oe),Et[Se]=oe}function ce(){W.disable(W.BLEND),W.disable(W.CULL_FACE),W.disable(W.DEPTH_TEST),W.disable(W.POLYGON_OFFSET_FILL),W.disable(W.SCISSOR_TEST),W.disable(W.STENCIL_TEST),W.disable(W.SAMPLE_ALPHA_TO_COVERAGE),W.blendEquation(W.FUNC_ADD),W.blendFunc(W.ONE,W.ZERO),W.blendFuncSeparate(W.ONE,W.ZERO,W.ONE,W.ZERO),W.blendColor(0,0,0,0),W.colorMask(!0,!0,!0,!0),W.clearColor(0,0,0,0),W.depthMask(!0),W.depthFunc(W.LESS),Mt.setReversed(!1),W.clearDepth(1),W.stencilMask(4294967295),W.stencilFunc(W.ALWAYS,0,4294967295),W.stencilOp(W.KEEP,W.KEEP,W.KEEP),W.clearStencil(0),W.cullFace(W.BACK),W.frontFace(W.CCW),W.polygonOffset(0,0),W.activeTexture(W.TEXTURE0),W.bindFramebuffer(W.FRAMEBUFFER,null),W.bindFramebuffer(W.DRAW_FRAMEBUFFER,null),W.bindFramebuffer(W.READ_FRAMEBUFFER,null),W.useProgram(null),W.lineWidth(1),W.scissor(0,0,W.canvas.width,W.canvas.height),W.viewport(0,0,W.canvas.width,W.canvas.height),W.pixelStorei(W.PACK_ALIGNMENT,4),W.pixelStorei(W.UNPACK_ALIGNMENT,4),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,!1),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),W.pixelStorei(W.UNPACK_COLORSPACE_CONVERSION_WEBGL,W.BROWSER_DEFAULT_WEBGL),W.pixelStorei(W.PACK_ROW_LENGTH,0),W.pixelStorei(W.PACK_SKIP_PIXELS,0),W.pixelStorei(W.PACK_SKIP_ROWS,0),W.pixelStorei(W.UNPACK_ROW_LENGTH,0),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,0),W.pixelStorei(W.UNPACK_SKIP_PIXELS,0),W.pixelStorei(W.UNPACK_SKIP_ROWS,0),W.pixelStorei(W.UNPACK_SKIP_IMAGES,0),Ct={},It={},de=null,ye={},Rt={},Et={},Lt=new WeakMap,Dt=[],Bt=null,Pt=!1,wt=null,Gt=null,Wt=null,zt=null,Ht=null,qt=null,Nt=null,Ot=new n(0,0,0),Yt=0,ie=!1,Zt=null,ee=null,he=null,Xt=null,ae=null,xe.set(0,0,W.canvas.width,W.canvas.height),ze.set(0,0,W.canvas.width,W.canvas.height),at.reset(),Mt.reset(),bt.reset()}return{buffers:{color:at,depth:Mt,stencil:bt},enable:Ne,disable:fn,bindFramebuffer:rn,drawBuffers:$e,useProgram:dn,setBlending:we,setMaterial:Ue,setFlipSided:De,setCullFace:Je,setLineWidth:qe,setPolygonOffset:ln,setScissorTest:hn,activeTexture:_n,bindTexture:$t,unbindTexture:In,compressedTexImage2D:en,compressedTexImage3D:En,texImage2D:kt,texImage3D:Ut,pixelStorei:_e,getParameter:Kt,updateUBOMapping:ve,uniformBlockBinding:re,texStorage2D:Fn,texStorage3D:Pn,texSubImage2D:Le,texSubImage3D:yn,compressedTexSubImage2D:We,compressedTexSubImage3D:je,scissor:me,viewport:Te,reset:ce}}function r_(W,q,Y,Z,tt,at,Mt){let bt=q.has("WEBGL_multisampled_render_to_texture")?q.get("WEBGL_multisampled_render_to_texture"):null,Et=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),At=new e,Ct=new WeakMap,It=new Set,Rt,Lt=new WeakMap,Dt=new Set,Bt=new FinalizationRegistry((kt)=>Dt.delete(kt)),Pt=!1;try{Pt=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(kt){}function wt(kt,Ut){return Pt?new OffscreenCanvas(kt,Ut):Os("canvas")}function Gt(kt,Ut,Kt){let _e=1,me=Pn(kt);if(me.width>Kt||me.height>Kt)_e=Kt/Math.max(me.width,me.height);if(_e<1)if(typeof HTMLImageElement<"u"&&kt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&kt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&kt instanceof ImageBitmap||typeof VideoFrame<"u"&&kt instanceof VideoFrame){let Te=Math.floor(_e*me.width),ve=Math.floor(_e*me.height);if(Rt===void 0)Rt=wt(Te,ve);let re=Ut?wt(Te,ve):Rt;return re.width=Te,re.height=ve,re.getContext("2d").drawImage(kt,0,0,Te,ve),Ke("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Te+"x"+ve+")."),re}else{if("data"in kt)Ke("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+").");return kt}return kt}function Wt(kt){return kt.generateMipmaps}function zt(kt){W.generateMipmap(kt)}function Ht(kt){if(kt.isWebGLCubeRenderTarget)return W.TEXTURE_CUBE_MAP;if(kt.isWebGL3DRenderTarget)return W.TEXTURE_3D;if(kt.isWebGLArrayRenderTarget||kt.isCompressedArrayTexture)return W.TEXTURE_2D_ARRAY;return W.TEXTURE_2D}function qt(kt,Ut,Kt,_e,me,Te=!1){if(kt!==null){if(W[kt]!==void 0)return W[kt];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+kt+"'")}let ve;if(_e){if(ve=q.get("EXT_texture_norm16"),!ve)Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let re=Ut;if(Ut===W.RED){if(Kt===W.FLOAT)re=W.R32F;if(Kt===W.HALF_FLOAT)re=W.R16F;if(Kt===W.UNSIGNED_BYTE)re=W.R8;if(Kt===W.UNSIGNED_SHORT&&ve)re=ve.R16_EXT;if(Kt===W.SHORT&&ve)re=ve.R16_SNORM_EXT}if(Ut===W.RED_INTEGER){if(Kt===W.UNSIGNED_BYTE)re=W.R8UI;if(Kt===W.UNSIGNED_SHORT)re=W.R16UI;if(Kt===W.UNSIGNED_INT)re=W.R32UI;if(Kt===W.BYTE)re=W.R8I;if(Kt===W.SHORT)re=W.R16I;if(Kt===W.INT)re=W.R32I}if(Ut===W.RG){if(Kt===W.FLOAT)re=W.RG32F;if(Kt===W.HALF_FLOAT)re=W.RG16F;if(Kt===W.UNSIGNED_BYTE)re=W.RG8;if(Kt===W.UNSIGNED_SHORT&&ve)re=ve.RG16_EXT;if(Kt===W.SHORT&&ve)re=ve.RG16_SNORM_EXT}if(Ut===W.RG_INTEGER){if(Kt===W.UNSIGNED_BYTE)re=W.RG8UI;if(Kt===W.UNSIGNED_SHORT)re=W.RG16UI;if(Kt===W.UNSIGNED_INT)re=W.RG32UI;if(Kt===W.BYTE)re=W.RG8I;if(Kt===W.SHORT)re=W.RG16I;if(Kt===W.INT)re=W.RG32I}if(Ut===W.RGB_INTEGER){if(Kt===W.UNSIGNED_BYTE)re=W.RGB8UI;if(Kt===W.UNSIGNED_SHORT)re=W.RGB16UI;if(Kt===W.UNSIGNED_INT)re=W.RGB32UI;if(Kt===W.BYTE)re=W.RGB8I;if(Kt===W.SHORT)re=W.RGB16I;if(Kt===W.INT)re=W.RGB32I}if(Ut===W.RGBA_INTEGER){if(Kt===W.UNSIGNED_BYTE)re=W.RGBA8UI;if(Kt===W.UNSIGNED_SHORT)re=W.RGBA16UI;if(Kt===W.UNSIGNED_INT)re=W.RGBA32UI;if(Kt===W.BYTE)re=W.RGBA8I;if(Kt===W.SHORT)re=W.RGBA16I;if(Kt===W.INT)re=W.RGBA32I}if(Ut===W.RGB){if(Kt===W.UNSIGNED_SHORT&&ve)re=ve.RGB16_EXT;if(Kt===W.SHORT&&ve)re=ve.RGB16_SNORM_EXT;if(Kt===W.UNSIGNED_INT_5_9_9_9_REV)re=W.RGB9_E5;if(Kt===W.UNSIGNED_INT_10F_11F_11F_REV)re=W.R11F_G11F_B10F}if(Ut===W.RGBA){let ce=Te?Oo:r.getTransfer(me);if(Kt===W.FLOAT)re=W.RGBA32F;if(Kt===W.HALF_FLOAT)re=W.RGBA16F;if(Kt===W.UNSIGNED_BYTE)re=ce===a?W.SRGB8_ALPHA8:W.RGBA8;if(Kt===W.UNSIGNED_SHORT&&ve)re=ve.RGBA16_EXT;if(Kt===W.SHORT&&ve)re=ve.RGBA16_SNORM_EXT;if(Kt===W.UNSIGNED_SHORT_4_4_4_4)re=W.RGBA4;if(Kt===W.UNSIGNED_SHORT_5_5_5_1)re=W.RGB5_A1}if(re===W.R16F||re===W.R32F||re===W.RG16F||re===W.RG32F||re===W.RGBA16F||re===W.RGBA32F)q.get("EXT_color_buffer_float");return re}function Nt(kt,Ut){let Kt;if(kt){if(Ut===null||Ut===Li||Ut===xs)Kt=W.DEPTH24_STENCIL8;else if(Ut===Si)Kt=W.DEPTH32F_STENCIL8;else if(Ut===Xs)Kt=W.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(Ut===null||Ut===Li||Ut===xs)Kt=W.DEPTH_COMPONENT24;else if(Ut===Si)Kt=W.DEPTH_COMPONENT32F;else if(Ut===Xs)Kt=W.DEPTH_COMPONENT16;return Kt}function Ot(kt,Ut){if(Wt(kt)===!0||kt.isFramebufferTexture&&kt.minFilter!==Ii&&kt.minFilter!==Kn)return Math.log2(Math.max(Ut.width,Ut.height))+1;else if(kt.mipmaps!==void 0&&kt.mipmaps.length>0)return kt.mipmaps.length;else if(kt.isCompressedTexture&&Array.isArray(kt.image))return Ut.mipmaps.length;else return 1}function Yt(kt){let Ut=new WeakRef(kt);Z.get(kt).__ref=Ut,Dt.add(Ut),Bt.register(kt,Ut,Ut)}function ie(kt){let Ut=Z.get(kt).__ref;if(Ut===void 0)return;Dt.delete(Ut),Bt.unregister(Ut)}function Zt(kt){he(kt.target)}function ee(kt){Xt(kt.target)}function he(kt){if(kt.removeEventListener("dispose",Zt),ie(kt),le(kt),kt.isVideoTexture)Ct.delete(kt);if(kt.isHTMLTexture)It.delete(kt)}function Xt(kt){kt.removeEventListener("dispose",ee),ie(kt),Me(kt)}function ae(){for(let kt of Dt){let Ut=kt.deref();if(Ut===void 0)continue;if(Ut.isRenderTarget===!0)Xt(Ut);else he(Ut)}Dt.clear(),It.clear()}function le(kt){let Ut=Z.get(kt);if(Ut.__webglInit===void 0)return;let Kt=kt.source,_e=Lt.get(Kt);if(_e){let me=_e[Ut.__cacheKey];if(me.usedTimes--,me.usedTimes===0)te(kt);if(Object.keys(_e).length===0)Lt.delete(Kt)}Z.remove(kt)}function te(kt){let Ut=Z.get(kt);W.deleteTexture(Ut.__webglTexture);let Kt=kt.source,_e=Lt.get(Kt);delete _e[Ut.__cacheKey],Mt.memory.textures--}function Me(kt){let Ut=Z.get(kt);if(Ut.__depthDisposeCallback)Ut.__depthDisposeCallback();let Kt=kt.depthTexture;if(Kt&&Kt.renderTarget===kt)he(Kt);if(kt.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(Ut.__webglFramebuffer[me]))for(let Te=0;Te<Ut.__webglFramebuffer[me].length;Te++)W.deleteFramebuffer(Ut.__webglFramebuffer[me][Te]);else W.deleteFramebuffer(Ut.__webglFramebuffer[me]);if(Ut.__webglDepthbuffer)W.deleteRenderbuffer(Ut.__webglDepthbuffer[me])}else{if(Array.isArray(Ut.__webglFramebuffer))for(let me=0;me<Ut.__webglFramebuffer.length;me++)W.deleteFramebuffer(Ut.__webglFramebuffer[me]);else W.deleteFramebuffer(Ut.__webglFramebuffer);if(Ut.__webglDepthbuffer)W.deleteRenderbuffer(Ut.__webglDepthbuffer);if(Ut.__webglMultisampledFramebuffer)W.deleteFramebuffer(Ut.__webglMultisampledFramebuffer);if(Ut.__webglColorRenderbuffer){for(let me=0;me<Ut.__webglColorRenderbuffer.length;me++)if(Ut.__webglColorRenderbuffer[me])W.deleteRenderbuffer(Ut.__webglColorRenderbuffer[me])}if(Ut.__webglDepthRenderbuffer)W.deleteRenderbuffer(Ut.__webglDepthRenderbuffer)}let _e=kt.textures;for(let me=0,Te=_e.length;me<Te;me++){let ve=Z.get(_e[me]);if(ve.__webglTexture)W.deleteTexture(ve.__webglTexture),Mt.memory.textures--;Z.remove(_e[me])}Z.remove(kt)}let se=0;function de(){se=0}function ye(){return se}function Oe(kt){se=kt}function fe(){let kt=se;if(kt>=tt.maxTextures)Ke("WebGLTextures: Trying to use "+(kt+1)+" texture units while this GPU supports only "+tt.maxTextures);return se+=1,kt}function xe(kt){let Ut=[];return Ut.push(kt.wrapS),Ut.push(kt.wrapT),Ut.push(kt.wrapR||0),Ut.push(kt.magFilter),Ut.push(kt.minFilter),Ut.push(kt.anisotropy),Ut.push(kt.internalFormat),Ut.push(kt.format),Ut.push(kt.type),Ut.push(kt.generateMipmaps),Ut.push(kt.mipmapsAutoUpdate),Ut.push(kt.premultiplyAlpha),Ut.push(kt.flipY),Ut.push(kt.unpackAlignment),Ut.push(kt.colorSpace),Ut.join()}function ze(kt,Ut){let Kt=Z.get(kt);if(kt.isVideoTexture)je(kt);if(kt.isRenderTargetTexture===!1&&kt.isExternalTexture!==!0&&kt.version>0&&Kt.__version!==kt.version){let _e=kt.image;if(_e===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Kt,kt,Ut);return}}else if(kt.isExternalTexture)Kt.__webglTexture=kt.sourceTexture?kt.sourceTexture:null;Y.bindTexture(W.TEXTURE_2D,Kt.__webglTexture,W.TEXTURE0+Ut)}function Ye(kt,Ut){let Kt=Z.get(kt);if(kt.isRenderTargetTexture===!1&&kt.version>0&&Kt.__version!==kt.version){Ue(Kt,kt,Ut);return}else if(kt.isExternalTexture)Kt.__webglTexture=kt.sourceTexture?kt.sourceTexture:null;Y.bindTexture(W.TEXTURE_2D_ARRAY,Kt.__webglTexture,W.TEXTURE0+Ut)}function Ze(kt,Ut){let Kt=Z.get(kt);if(kt.isRenderTargetTexture===!1&&kt.version>0&&Kt.__version!==kt.version){Ue(Kt,kt,Ut);return}Y.bindTexture(W.TEXTURE_3D,Kt.__webglTexture,W.TEXTURE0+Ut)}function Ne(kt,Ut){let Kt=Z.get(kt);if(kt.version>0&&Kt.__version!==kt.version){De(Kt,kt,Ut);return}Y.bindTexture(W.TEXTURE_CUBE_MAP,Kt.__webglTexture,W.TEXTURE0+Ut)}let fn={[Zc]:W.REPEAT,[zr]:W.CLAMP_TO_EDGE,[Jc]:W.MIRRORED_REPEAT},rn={[Ii]:W.NEAREST,[$c]:W.NEAREST_MIPMAP_NEAREST,[Vs]:W.NEAREST_MIPMAP_LINEAR,[Kn]:W.LINEAR,[Gr]:W.LINEAR_MIPMAP_NEAREST,[Pi]:W.LINEAR_MIPMAP_LINEAR},$e={[rh]:W.NEVER,[Go]:W.ALWAYS,[ah]:W.LESS,[Bo]:W.LEQUAL,[oh]:W.EQUAL,[zo]:W.GEQUAL,[lh]:W.GREATER,[ch]:W.NOTEQUAL};function dn(kt,Ut){if(Ut.type===Si&&q.has("OES_texture_float_linear")===!1&&(Ut.magFilter===Kn||Ut.magFilter===Gr||Ut.magFilter===Vs||Ut.magFilter===Pi||Ut.minFilter===Kn||Ut.minFilter===Gr||Ut.minFilter===Vs||Ut.minFilter===Pi))Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(W.texParameteri(kt,W.TEXTURE_WRAP_S,fn[Ut.wrapS]),W.texParameteri(kt,W.TEXTURE_WRAP_T,fn[Ut.wrapT]),kt===W.TEXTURE_3D||kt===W.TEXTURE_2D_ARRAY)W.texParameteri(kt,W.TEXTURE_WRAP_R,fn[Ut.wrapR]);if(W.texParameteri(kt,W.TEXTURE_MAG_FILTER,rn[Ut.magFilter]),W.texParameteri(kt,W.TEXTURE_MIN_FILTER,rn[Ut.minFilter]),Ut.compareFunction)W.texParameteri(kt,W.TEXTURE_COMPARE_MODE,W.COMPARE_REF_TO_TEXTURE),W.texParameteri(kt,W.TEXTURE_COMPARE_FUNC,$e[Ut.compareFunction]);if(q.has("EXT_texture_filter_anisotropic")===!0){if(Ut.magFilter===Ii)return;if(Ut.minFilter!==Vs&&Ut.minFilter!==Pi)return;if(Ut.type===Si&&q.has("OES_texture_float_linear")===!1)return;if(Ut.anisotropy>1||Z.get(Ut).__currentAnisotropy){let Kt=q.get("EXT_texture_filter_anisotropic");W.texParameterf(kt,Kt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(Ut.anisotropy,tt.getMaxAnisotropy())),Z.get(Ut).__currentAnisotropy=Ut.anisotropy}}}function pe(kt,Ut){let Kt=!1;if(kt.__webglInit===void 0)kt.__webglInit=!0,Ut.addEventListener("dispose",Zt),Yt(Ut);let _e=Ut.source,me=Lt.get(_e);if(me===void 0)me={},Lt.set(_e,me);let Te=xe(Ut);if(Te!==kt.__cacheKey){if(me[Te]===void 0)me[Te]={texture:W.createTexture(),usedTimes:0},Mt.memory.textures++,Kt=!0;me[Te].usedTimes++;let ve=me[kt.__cacheKey];if(ve!==void 0){if(me[kt.__cacheKey].usedTimes--,ve.usedTimes===0)te(Ut)}kt.__cacheKey=Te,kt.__webglTexture=me[Te].texture}return Kt}function Ee(kt,Ut,Kt){return Math.floor(Math.floor(kt/Kt)/Ut)}function we(kt,Ut,Kt,_e){let Te=kt.updateRanges;if(Te.length===0)Y.texSubImage2D(W.TEXTURE_2D,0,0,0,Ut.width,Ut.height,Kt,_e,Ut.data);else{Te.sort((ge,oe)=>ge.start-oe.start);let ve=0;for(let ge=1;ge<Te.length;ge++){let oe=Te[ve],ue=Te[ge],Se=oe.start+oe.count,Ae=Ee(ue.start,Ut.width,4),Ve=Ee(oe.start,Ut.width,4);if(ue.start<=Se+1&&Ae===Ve&&Ee(ue.start+ue.count-1,Ut.width,4)===Ae)oe.count=Math.max(oe.count,ue.start+ue.count-oe.start);else++ve,Te[ve]=ue}Te.length=ve+1;let re=Y.getParameter(W.UNPACK_ROW_LENGTH),ce=Y.getParameter(W.UNPACK_SKIP_PIXELS),Vt=Y.getParameter(W.UNPACK_SKIP_ROWS);Y.pixelStorei(W.UNPACK_ROW_LENGTH,Ut.width);for(let ge=0,oe=Te.length;ge<oe;ge++){let ue=Te[ge],Se=Math.floor(ue.start/4),Ae=Math.ceil(ue.count/4),Ve=Se%Ut.width,Be=Math.floor(Se/Ut.width),mn=Ae,be=1;Y.pixelStorei(W.UNPACK_SKIP_PIXELS,Ve),Y.pixelStorei(W.UNPACK_SKIP_ROWS,Be),Y.texSubImage2D(W.TEXTURE_2D,0,Ve,Be,mn,1,Kt,_e,Ut.data)}kt.clearUpdateRanges(),Y.pixelStorei(W.UNPACK_ROW_LENGTH,re),Y.pixelStorei(W.UNPACK_SKIP_PIXELS,ce),Y.pixelStorei(W.UNPACK_SKIP_ROWS,Vt)}}function Ue(kt,Ut,Kt){let _e=W.TEXTURE_2D;if(Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)_e=W.TEXTURE_2D_ARRAY;if(Ut.isData3DTexture)_e=W.TEXTURE_3D;let me=pe(kt,Ut),Te=Ut.source;Y.bindTexture(_e,kt.__webglTexture,W.TEXTURE0+Kt);let ve=Z.get(Te);if(Te.version!==ve.__version||me===!0){if(Y.activeTexture(W.TEXTURE0+Kt),(typeof ImageBitmap<"u"&&Ut.image instanceof ImageBitmap)===!1){let be=r.getPrimaries(r.workingColorSpace),an=Ut.colorSpace===Xi?null:r.getPrimaries(Ut.colorSpace),sn=Ut.colorSpace===Xi||be===an?W.NONE:W.BROWSER_DEFAULT_WEBGL;Y.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Ut.flipY),Y.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ut.premultiplyAlpha),Y.pixelStorei(W.UNPACK_COLORSPACE_CONVERSION_WEBGL,sn)}Y.pixelStorei(W.UNPACK_ALIGNMENT,Ut.unpackAlignment);let ce=Gt(Ut.image,!1,tt.maxTextureSize);ce=Fn(Ut,ce);let Vt=at.convert(Ut.format,Ut.colorSpace),ge=at.convert(Ut.type),oe=qt(Ut.internalFormat,Vt,ge,Ut.normalized,Ut.colorSpace,Ut.isVideoTexture);dn(_e,Ut);let ue,Se=Ut.mipmaps,Ae=Ut.isVideoTexture!==!0,Ve=ve.__version===void 0||me===!0,Be=Te.dataReady,mn=Ot(Ut,ce);if(Ut.isDepthTexture){if(oe=Nt(Ut.format===Wi,Ut.type),Ve)if(Ae)Y.texStorage2D(W.TEXTURE_2D,1,oe,ce.width,ce.height);else Y.texImage2D(W.TEXTURE_2D,0,oe,ce.width,ce.height,0,Vt,ge,null)}else if(Ut.isDataTexture)if(Se.length>0){if(Ae&&Ve)Y.texStorage2D(W.TEXTURE_2D,mn,oe,Se[0].width,Se[0].height);for(let be=0,an=Se.length;be<an;be++)if(ue=Se[be],Ae){if(Be)Y.texSubImage2D(W.TEXTURE_2D,be,0,0,ue.width,ue.height,Vt,ge,ue.data)}else Y.texImage2D(W.TEXTURE_2D,be,oe,ue.width,ue.height,0,Vt,ge,ue.data);Ut.generateMipmaps=!1}else if(Ae){if(Ve)Y.texStorage2D(W.TEXTURE_2D,mn,oe,ce.width,ce.height);if(Be)we(Ut,ce,Vt,ge)}else Y.texImage2D(W.TEXTURE_2D,0,oe,ce.width,ce.height,0,Vt,ge,ce.data);else if(Ut.isCompressedTexture)if(Ut.isCompressedArrayTexture){if(Ae&&Ve)Y.texStorage3D(W.TEXTURE_2D_ARRAY,mn,oe,Se[0].width,Se[0].height,ce.depth);for(let be=0,an=Se.length;be<an;be++)if(ue=Se[be],Ut.format!==Mi)if(Vt!==null)if(Ae){if(Be)if(Ut.layerUpdates.size>0){let sn=_l(ue.width,ue.height,Ut.format,Ut.type);for(let He of Ut.layerUpdates){let bn=ue.data.subarray(He*sn/ue.data.BYTES_PER_ELEMENT,(He+1)*sn/ue.data.BYTES_PER_ELEMENT);Y.compressedTexSubImage3D(W.TEXTURE_2D_ARRAY,be,0,0,He,ue.width,ue.height,1,Vt,bn)}}else Y.compressedTexSubImage3D(W.TEXTURE_2D_ARRAY,be,0,0,0,ue.width,ue.height,ce.depth,Vt,ue.data)}else Y.compressedTexImage3D(W.TEXTURE_2D_ARRAY,be,oe,ue.width,ue.height,ce.depth,0,ue.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ae){if(Be)Y.texSubImage3D(W.TEXTURE_2D_ARRAY,be,0,0,0,ue.width,ue.height,ce.depth,Vt,ge,ue.data)}else Y.texImage3D(W.TEXTURE_2D_ARRAY,be,oe,ue.width,ue.height,ce.depth,0,Vt,ge,ue.data);if(Ut.layerUpdates.size>0)Ut.clearLayerUpdates()}else{if(Ae&&Ve)Y.texStorage2D(W.TEXTURE_2D,mn,oe,Se[0].width,Se[0].height);for(let be=0,an=Se.length;be<an;be++)if(ue=Se[be],Ut.format!==Mi)if(Vt!==null)if(Ae){if(Be)Y.compressedTexSubImage2D(W.TEXTURE_2D,be,0,0,ue.width,ue.height,Vt,ue.data)}else Y.compressedTexImage2D(W.TEXTURE_2D,be,oe,ue.width,ue.height,0,ue.data);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ae){if(Be)Y.texSubImage2D(W.TEXTURE_2D,be,0,0,ue.width,ue.height,Vt,ge,ue.data)}else Y.texImage2D(W.TEXTURE_2D,be,oe,ue.width,ue.height,0,Vt,ge,ue.data)}else if(Ut.isDataArrayTexture)if(Ae){if(Ve)Y.texStorage3D(W.TEXTURE_2D_ARRAY,mn,oe,ce.width,ce.height,ce.depth);if(Be)if(Ut.layerUpdates.size>0){let be=_l(ce.width,ce.height,Ut.format,Ut.type);for(let an of Ut.layerUpdates){let sn=ce.data.subarray(an*be/ce.data.BYTES_PER_ELEMENT,(an+1)*be/ce.data.BYTES_PER_ELEMENT);Y.texSubImage3D(W.TEXTURE_2D_ARRAY,0,0,0,an,ce.width,ce.height,1,Vt,ge,sn)}Ut.clearLayerUpdates()}else Y.texSubImage3D(W.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Vt,ge,ce.data)}else Y.texImage3D(W.TEXTURE_2D_ARRAY,0,oe,ce.width,ce.height,ce.depth,0,Vt,ge,ce.data);else if(Ut.isData3DTexture)if(Ae){if(Ve)Y.texStorage3D(W.TEXTURE_3D,mn,oe,ce.width,ce.height,ce.depth);if(Be)Y.texSubImage3D(W.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Vt,ge,ce.data)}else Y.texImage3D(W.TEXTURE_3D,0,oe,ce.width,ce.height,ce.depth,0,Vt,ge,ce.data);else if(Ut.isFramebufferTexture){if(Ve)if(Ae)Y.texStorage2D(W.TEXTURE_2D,mn,oe,ce.width,ce.height);else{let be=ce.width,an=ce.height;for(let sn=0;sn<mn;sn++)Y.texImage2D(W.TEXTURE_2D,sn,oe,be,an,0,Vt,ge,null),be>>=1,an>>=1}}else if(Ut.isHTMLTexture){if("texElementImage2D"in W){let be=W.canvas;if(!be.hasAttribute("layoutsubtree"))be.setAttribute("layoutsubtree","true");if(ce.parentNode!==be){be.appendChild(ce),It.add(Ut),be.onpaint=(an)=>{let sn=an.changedElements;for(let He of It)if(sn.includes(He.image))He.needsUpdate=!0},be.requestPaint();return}if(W.texElementImage2D.length===3)W.texElementImage2D(W.TEXTURE_2D,W.RGBA8,ce);else{let{RGBA:sn,RGBA:He,UNSIGNED_BYTE:bn}=W;W.texElementImage2D(W.TEXTURE_2D,0,sn,He,bn,ce)}W.texParameteri(W.TEXTURE_2D,W.TEXTURE_MIN_FILTER,W.LINEAR),W.texParameteri(W.TEXTURE_2D,W.TEXTURE_WRAP_S,W.CLAMP_TO_EDGE),W.texParameteri(W.TEXTURE_2D,W.TEXTURE_WRAP_T,W.CLAMP_TO_EDGE)}}else if(Se.length>0){if(Ae&&Ve){let be=Pn(Se[0]);Y.texStorage2D(W.TEXTURE_2D,mn,oe,be.width,be.height)}for(let be=0,an=Se.length;be<an;be++)if(ue=Se[be],Ae){if(Be)Y.texSubImage2D(W.TEXTURE_2D,be,0,0,Vt,ge,ue)}else Y.texImage2D(W.TEXTURE_2D,be,oe,Vt,ge,ue);Ut.generateMipmaps=!1}else if(Ae){if(Ve){let be=Pn(ce);Y.texStorage2D(W.TEXTURE_2D,mn,oe,be.width,be.height)}if(Be)Y.texSubImage2D(W.TEXTURE_2D,0,0,0,Vt,ge,ce)}else Y.texImage2D(W.TEXTURE_2D,0,oe,Vt,ge,ce);if(Wt(Ut)&&Ut.mipmapsAutoUpdate===!0)zt(_e);if(ve.__version=Te.version,Ut.onUpdate)Ut.onUpdate(Ut)}kt.__version=Ut.version}function De(kt,Ut,Kt){if(Ut.image.length!==6)return;let _e=pe(kt,Ut),me=Ut.source;Y.bindTexture(W.TEXTURE_CUBE_MAP,kt.__webglTexture,W.TEXTURE0+Kt);let Te=Z.get(me);if(me.version!==Te.__version||_e===!0){Y.activeTexture(W.TEXTURE0+Kt);let ve=r.getPrimaries(r.workingColorSpace),re=Ut.colorSpace===Xi?null:r.getPrimaries(Ut.colorSpace),ce=Ut.colorSpace===Xi||ve===re?W.NONE:W.BROWSER_DEFAULT_WEBGL;Y.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Ut.flipY),Y.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ut.premultiplyAlpha),Y.pixelStorei(W.UNPACK_ALIGNMENT,Ut.unpackAlignment),Y.pixelStorei(W.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Vt=Ut.isCompressedTexture||Ut.image[0].isCompressedTexture,ge=Ut.image[0]&&Ut.image[0].isDataTexture,oe=[];for(let He=0;He<6;He++){if(!Vt&&!ge)oe[He]=Gt(Ut.image[He],!0,tt.maxCubemapSize);else oe[He]=ge?Ut.image[He].image:Ut.image[He];oe[He]=Fn(Ut,oe[He])}let ue=oe[0],Se=at.convert(Ut.format,Ut.colorSpace),Ae=at.convert(Ut.type),Ve=qt(Ut.internalFormat,Se,Ae,Ut.normalized,Ut.colorSpace),Be=Ut.isVideoTexture!==!0,mn=Te.__version===void 0||_e===!0,be=me.dataReady,an=Ot(Ut,ue);dn(W.TEXTURE_CUBE_MAP,Ut);let sn;if(Ut.isDepthTexture){if(Ve=Nt(Ut.format===Wi,Ut.type),mn)if(Be)Y.texStorage2D(W.TEXTURE_CUBE_MAP,1,Ve,ue.width,ue.height);else for(let He=0;He<6;He++)Y.texImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ve,ue.width,ue.height,0,Se,Ae,null)}else if(Vt){if(Be&&mn)Y.texStorage2D(W.TEXTURE_CUBE_MAP,an,Ve,ue.width,ue.height);for(let He=0;He<6;He++){sn=oe[He].mipmaps;for(let bn=0;bn<sn.length;bn++){let Ln=sn[bn];if(Ut.format!==Mi)if(Se!==null)if(Be){if(be)Y.compressedTexSubImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn,0,0,Ln.width,Ln.height,Se,Ln.data)}else Y.compressedTexImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn,Ve,Ln.width,Ln.height,0,Ln.data);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Be){if(be)Y.texSubImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn,0,0,Ln.width,Ln.height,Se,Ae,Ln.data)}else Y.texImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn,Ve,Ln.width,Ln.height,0,Se,Ae,Ln.data)}}}else{if(sn=Ut.mipmaps,Be&&mn){if(sn.length>0)an++;let He=Pn(oe[0]);Y.texStorage2D(W.TEXTURE_CUBE_MAP,an,Ve,He.width,He.height)}for(let He=0;He<6;He++)if(ge){if(Be){if(be)Y.texSubImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,oe[He].width,oe[He].height,Se,Ae,oe[He].data)}else Y.texImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ve,oe[He].width,oe[He].height,0,Se,Ae,oe[He].data);for(let bn=0;bn<sn.length;bn++){let ai=sn[bn].image[He].image;if(Be){if(be)Y.texSubImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn+1,0,0,ai.width,ai.height,Se,Ae,ai.data)}else Y.texImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn+1,Ve,ai.width,ai.height,0,Se,Ae,ai.data)}}else{if(Be){if(be)Y.texSubImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Se,Ae,oe[He])}else Y.texImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ve,Se,Ae,oe[He]);for(let bn=0;bn<sn.length;bn++){let Ln=sn[bn];if(Be){if(be)Y.texSubImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn+1,0,0,Se,Ae,Ln.image[He])}else Y.texImage2D(W.TEXTURE_CUBE_MAP_POSITIVE_X+He,bn+1,Ve,Se,Ae,Ln.image[He])}}}if(Wt(Ut)&&Ut.mipmapsAutoUpdate===!0)zt(W.TEXTURE_CUBE_MAP);if(Te.__version=me.version,Ut.onUpdate)Ut.onUpdate(Ut)}kt.__version=Ut.version}function Je(kt,Ut,Kt,_e,me,Te){let ve=at.convert(Kt.format,Kt.colorSpace),re=at.convert(Kt.type),ce=qt(Kt.internalFormat,ve,re,Kt.normalized,Kt.colorSpace),Vt=Z.get(Ut),ge=Z.get(Kt);if(ge.__renderTarget=Ut,!Vt.__hasExternalTextures){let oe=Math.max(1,Ut.width>>Te),ue=Math.max(1,Ut.height>>Te);if(me===W.TEXTURE_3D||me===W.TEXTURE_2D_ARRAY)Y.texImage3D(me,Te,ce,oe,ue,Ut.depth,0,ve,re,null);else Y.texImage2D(me,Te,ce,oe,ue,0,ve,re,null)}if(Y.bindFramebuffer(W.FRAMEBUFFER,kt),We(Ut))bt.framebufferTexture2DMultisampleEXT(W.FRAMEBUFFER,_e,me,ge.__webglTexture,0,yn(Ut));else if(me===W.TEXTURE_2D||me>=W.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=W.TEXTURE_CUBE_MAP_NEGATIVE_Z)W.framebufferTexture2D(W.FRAMEBUFFER,_e,me,ge.__webglTexture,Te);Y.bindFramebuffer(W.FRAMEBUFFER,null)}function qe(kt,Ut,Kt){if(W.bindRenderbuffer(W.RENDERBUFFER,kt),Ut.depthBuffer){let _e=Ut.depthTexture,me=_e&&_e.isDepthTexture?_e.type:null,Te=Nt(Ut.stencilBuffer,me),ve=Ut.stencilBuffer?W.DEPTH_STENCIL_ATTACHMENT:W.DEPTH_ATTACHMENT;if(We(Ut))bt.renderbufferStorageMultisampleEXT(W.RENDERBUFFER,yn(Ut),Te,Ut.width,Ut.height);else if(Kt)W.renderbufferStorageMultisample(W.RENDERBUFFER,yn(Ut),Te,Ut.width,Ut.height);else W.renderbufferStorage(W.RENDERBUFFER,Te,Ut.width,Ut.height);W.framebufferRenderbuffer(W.FRAMEBUFFER,ve,W.RENDERBUFFER,kt)}else{let _e=Ut.textures;for(let me=0;me<_e.length;me++){let Te=_e[me],ve=at.convert(Te.format,Te.colorSpace),re=at.convert(Te.type),ce=qt(Te.internalFormat,ve,re,Te.normalized,Te.colorSpace);if(We(Ut))bt.renderbufferStorageMultisampleEXT(W.RENDERBUFFER,yn(Ut),ce,Ut.width,Ut.height);else if(Kt)W.renderbufferStorageMultisample(W.RENDERBUFFER,yn(Ut),ce,Ut.width,Ut.height);else W.renderbufferStorage(W.RENDERBUFFER,ce,Ut.width,Ut.height)}}W.bindRenderbuffer(W.RENDERBUFFER,null)}function ln(kt,Ut,Kt){let _e=Ut.isWebGLCubeRenderTarget===!0;if(Y.bindFramebuffer(W.FRAMEBUFFER,kt),!(Ut.depthTexture&&Ut.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let me=Z.get(Ut.depthTexture);me.__renderTarget=Ut;let Te=_e?Ut.depthTexture.image[0]:Ut.depthTexture.image;if(!me.__webglTexture||Te.width!==Ut.width||Te.height!==Ut.height)Te.width=Ut.width,Te.height=Ut.height,Ut.depthTexture.needsUpdate=!0;if(_e)Ne(Ut.depthTexture,0);else ze(Ut.depthTexture,0);let ve=me.__webglTexture,re=yn(Ut),ce=_e?W.TEXTURE_CUBE_MAP_POSITIVE_X+Kt:W.TEXTURE_2D,Vt=Ut.depthTexture.format===Wi?W.DEPTH_STENCIL_ATTACHMENT:W.DEPTH_ATTACHMENT;if(Ut.depthTexture.format===vs)if(We(Ut))bt.framebufferTexture2DMultisampleEXT(W.FRAMEBUFFER,Vt,ce,ve,0,re);else W.framebufferTexture2D(W.FRAMEBUFFER,Vt,ce,ve,0);else if(Ut.depthTexture.format===Wi)if(We(Ut))bt.framebufferTexture2DMultisampleEXT(W.FRAMEBUFFER,Vt,ce,ve,0,re);else W.framebufferTexture2D(W.FRAMEBUFFER,Vt,ce,ve,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(kt){let Ut=Z.get(kt),Kt=kt.isWebGLCubeRenderTarget===!0;if(Ut.__boundDepthTexture!==kt.depthTexture){let _e=kt.depthTexture;if(Ut.__depthDisposeCallback)Ut.__depthDisposeCallback();if(_e){let me=()=>{delete Ut.__boundDepthTexture,delete Ut.__depthDisposeCallback,_e.removeEventListener("dispose",me)};_e.addEventListener("dispose",me),Ut.__depthDisposeCallback=me}Ut.__boundDepthTexture=_e}if(kt.depthTexture&&!Ut.__autoAllocateDepthBuffer)if(Kt)for(let _e=0;_e<6;_e++)ln(Ut.__webglFramebuffer[_e],kt,_e);else{let _e=kt.texture.mipmaps;if(_e&&_e.length>0)ln(Ut.__webglFramebuffer[0],kt,0);else ln(Ut.__webglFramebuffer,kt,0)}else if(Kt){Ut.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(Y.bindFramebuffer(W.FRAMEBUFFER,Ut.__webglFramebuffer[_e]),Ut.__webglDepthbuffer[_e]===void 0)Ut.__webglDepthbuffer[_e]=W.createRenderbuffer(),qe(Ut.__webglDepthbuffer[_e],kt,!1);else{let me=kt.stencilBuffer?W.DEPTH_STENCIL_ATTACHMENT:W.DEPTH_ATTACHMENT,Te=Ut.__webglDepthbuffer[_e];W.bindRenderbuffer(W.RENDERBUFFER,Te),W.framebufferRenderbuffer(W.FRAMEBUFFER,me,W.RENDERBUFFER,Te)}}else{let _e=kt.texture.mipmaps;if(_e&&_e.length>0)Y.bindFramebuffer(W.FRAMEBUFFER,Ut.__webglFramebuffer[0]);else Y.bindFramebuffer(W.FRAMEBUFFER,Ut.__webglFramebuffer);if(Ut.__webglDepthbuffer===void 0)Ut.__webglDepthbuffer=W.createRenderbuffer(),qe(Ut.__webglDepthbuffer,kt,!1);else{let me=kt.stencilBuffer?W.DEPTH_STENCIL_ATTACHMENT:W.DEPTH_ATTACHMENT,Te=Ut.__webglDepthbuffer;W.bindRenderbuffer(W.RENDERBUFFER,Te),W.framebufferRenderbuffer(W.FRAMEBUFFER,me,W.RENDERBUFFER,Te)}}Y.bindFramebuffer(W.FRAMEBUFFER,null)}function _n(kt,Ut,Kt){let _e=Z.get(kt);if(Ut!==void 0)Je(_e.__webglFramebuffer,kt,kt.texture,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,0);if(Kt!==void 0)hn(kt)}function $t(kt){let Ut=kt.texture,Kt=Z.get(kt),_e=Z.get(Ut);kt.addEventListener("dispose",ee),Yt(kt);let me=kt.textures,Te=kt.isWebGLCubeRenderTarget===!0,ve=me.length>1;if(!ve){if(_e.__webglTexture===void 0)_e.__webglTexture=W.createTexture();_e.__version=Ut.version,Mt.memory.textures++}if(Te){Kt.__webglFramebuffer=[];for(let re=0;re<6;re++)if(Ut.mipmaps&&Ut.mipmaps.length>0){Kt.__webglFramebuffer[re]=[];for(let ce=0;ce<Ut.mipmaps.length;ce++)Kt.__webglFramebuffer[re][ce]=W.createFramebuffer()}else Kt.__webglFramebuffer[re]=W.createFramebuffer()}else{if(Ut.mipmaps&&Ut.mipmaps.length>0){Kt.__webglFramebuffer=[];for(let re=0;re<Ut.mipmaps.length;re++)Kt.__webglFramebuffer[re]=W.createFramebuffer()}else Kt.__webglFramebuffer=W.createFramebuffer();if(ve)for(let re=0,ce=me.length;re<ce;re++){let Vt=Z.get(me[re]);if(Vt.__webglTexture===void 0)Vt.__webglTexture=W.createTexture(),Mt.memory.textures++}if(kt.samples>0&&We(kt)===!1){Kt.__webglMultisampledFramebuffer=W.createFramebuffer(),Kt.__webglColorRenderbuffer=[],Y.bindFramebuffer(W.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);for(let re=0;re<me.length;re++){let ce=me[re];Kt.__webglColorRenderbuffer[re]=W.createRenderbuffer(),W.bindRenderbuffer(W.RENDERBUFFER,Kt.__webglColorRenderbuffer[re]);let Vt=at.convert(ce.format,ce.colorSpace),ge=at.convert(ce.type),oe=qt(ce.internalFormat,Vt,ge,ce.normalized,ce.colorSpace,kt.isXRRenderTarget===!0),ue=yn(kt);W.renderbufferStorageMultisample(W.RENDERBUFFER,ue,oe,kt.width,kt.height),W.framebufferRenderbuffer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+re,W.RENDERBUFFER,Kt.__webglColorRenderbuffer[re])}if(W.bindRenderbuffer(W.RENDERBUFFER,null),kt.depthBuffer)Kt.__webglDepthRenderbuffer=W.createRenderbuffer(),qe(Kt.__webglDepthRenderbuffer,kt,!0);Y.bindFramebuffer(W.FRAMEBUFFER,null)}}if(Te){Y.bindTexture(W.TEXTURE_CUBE_MAP,_e.__webglTexture),dn(W.TEXTURE_CUBE_MAP,Ut);for(let re=0;re<6;re++)if(Ut.mipmaps&&Ut.mipmaps.length>0)for(let ce=0;ce<Ut.mipmaps.length;ce++)Je(Kt.__webglFramebuffer[re][ce],kt,Ut,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else Je(Kt.__webglFramebuffer[re],kt,Ut,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);if(Wt(Ut))zt(W.TEXTURE_CUBE_MAP);else if(Ut.mipmaps.length>0)W.texParameteri(W.TEXTURE_CUBE_MAP,W.TEXTURE_MAX_LEVEL,Ut.mipmaps.length-1);Y.unbindTexture()}else if(ve){for(let re=0,ce=me.length;re<ce;re++){let Vt=me[re],ge=Z.get(Vt),oe=W.TEXTURE_2D;if(kt.isWebGL3DRenderTarget||kt.isWebGLArrayRenderTarget)oe=kt.isWebGL3DRenderTarget?W.TEXTURE_3D:W.TEXTURE_2D_ARRAY;if(Y.bindTexture(oe,ge.__webglTexture),dn(oe,Vt),Je(Kt.__webglFramebuffer,kt,Vt,W.COLOR_ATTACHMENT0+re,oe,0),Wt(Vt))zt(oe)}Y.unbindTexture()}else{let re=W.TEXTURE_2D;if(kt.isWebGL3DRenderTarget||kt.isWebGLArrayRenderTarget)re=kt.isWebGL3DRenderTarget?W.TEXTURE_3D:W.TEXTURE_2D_ARRAY;if(Y.bindTexture(re,_e.__webglTexture),dn(re,Ut),Ut.mipmaps&&Ut.mipmaps.length>0)for(let ce=0;ce<Ut.mipmaps.length;ce++)Je(Kt.__webglFramebuffer[ce],kt,Ut,W.COLOR_ATTACHMENT0,re,ce);else Je(Kt.__webglFramebuffer,kt,Ut,W.COLOR_ATTACHMENT0,re,0);if(Wt(Ut))zt(re);else if(Ut.mipmaps.length>0)W.texParameteri(re,W.TEXTURE_MAX_LEVEL,Ut.mipmaps.length-1);Y.unbindTexture()}if(kt.depthBuffer)hn(kt)}function In(kt){let Ut=kt.textures;for(let Kt=0,_e=Ut.length;Kt<_e;Kt++){let me=Ut[Kt];if(Wt(me)&&me.mipmapsAutoUpdate===!0){let Te=Ht(kt),ve=Z.get(me).__webglTexture;Y.bindTexture(Te,ve),zt(Te),Y.unbindTexture()}}}let en=[],En=[];function Le(kt){if(kt.samples>0){if(We(kt)===!1){let{textures:Ut,width:Kt,height:_e}=kt,me=W.COLOR_BUFFER_BIT,Te=kt.stencilBuffer?W.DEPTH_STENCIL_ATTACHMENT:W.DEPTH_ATTACHMENT,ve=Z.get(kt),re=Ut.length>1;if(re)for(let Vt=0;Vt<Ut.length;Vt++)Y.bindFramebuffer(W.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),W.framebufferRenderbuffer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Vt,W.RENDERBUFFER,null),Y.bindFramebuffer(W.FRAMEBUFFER,ve.__webglFramebuffer),W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0+Vt,W.TEXTURE_2D,null,0);Y.bindFramebuffer(W.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let ce=kt.texture.mipmaps;if(ce&&ce.length>0)Y.bindFramebuffer(W.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]);else Y.bindFramebuffer(W.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Vt=0;Vt<Ut.length;Vt++){if(kt.resolveDepthBuffer){if(kt.depthBuffer)me|=W.DEPTH_BUFFER_BIT;if(kt.stencilBuffer&&kt.resolveStencilBuffer)me|=W.STENCIL_BUFFER_BIT}if(re){W.framebufferRenderbuffer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.RENDERBUFFER,ve.__webglColorRenderbuffer[Vt]);let ge=Z.get(Ut[Vt]).__webglTexture;W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ge,0)}if(W.blitFramebuffer(0,0,Kt,_e,0,0,Kt,_e,me,W.NEAREST),Et===!0){if(en.length=0,En.length=0,en.push(W.COLOR_ATTACHMENT0+Vt),kt.depthBuffer&&kt.storeMultisampledDepthBuffer===!1)en.push(Te),En.push(Te),W.invalidateFramebuffer(W.DRAW_FRAMEBUFFER,En);W.invalidateFramebuffer(W.READ_FRAMEBUFFER,en)}}if(Y.bindFramebuffer(W.READ_FRAMEBUFFER,null),Y.bindFramebuffer(W.DRAW_FRAMEBUFFER,null),re)for(let Vt=0;Vt<Ut.length;Vt++){Y.bindFramebuffer(W.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),W.framebufferRenderbuffer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Vt,W.RENDERBUFFER,ve.__webglColorRenderbuffer[Vt]);let ge=Z.get(Ut[Vt]).__webglTexture;Y.bindFramebuffer(W.FRAMEBUFFER,ve.__webglFramebuffer),W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0+Vt,W.TEXTURE_2D,ge,0)}Y.bindFramebuffer(W.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(kt.depthBuffer&&kt.storeMultisampledDepthBuffer===!1&&Et){let Ut=kt.stencilBuffer?W.DEPTH_STENCIL_ATTACHMENT:W.DEPTH_ATTACHMENT;W.invalidateFramebuffer(W.DRAW_FRAMEBUFFER,[Ut])}}}function yn(kt){return Math.min(tt.maxSamples,kt.samples)}function We(kt){let Ut=Z.get(kt);return kt.samples>0&&q.has("WEBGL_multisampled_render_to_texture")===!0&&Ut.__useRenderToTexture!==!1}function je(kt){let Ut=Mt.render.frame;if(Ct.get(kt)!==Ut)Ct.set(kt,Ut),kt.update()}function Fn(kt,Ut){let{colorSpace:Kt,format:_e,type:me}=kt;if(kt.isCompressedTexture===!0||kt.isVideoTexture===!0)return Ut;if(Kt!==Fo&&Kt!==Xi)if(r.getTransfer(Kt)===a){if(_e!==Mi||me!==ri)Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Qe("WebGLTextures: Unsupported texture color space:",Kt);return Ut}function Pn(kt){if(typeof HTMLImageElement<"u"&&kt instanceof HTMLImageElement)At.width=kt.naturalWidth||kt.width,At.height=kt.naturalHeight||kt.height;else if(typeof VideoFrame<"u"&&kt instanceof VideoFrame)At.width=kt.displayWidth,At.height=kt.displayHeight;else At.width=kt.width,At.height=kt.height;return At}this.allocateTextureUnit=fe,this.resetTextureUnits=de,this.getTextureUnits=ye,this.setTextureUnits=Oe,this.setTexture2D=ze,this.setTexture2DArray=Ye,this.setTexture3D=Ze,this.setTextureCube=Ne,this.rebindTextures=_n,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=In,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=We,this.dispose=ae}function a_(W,q){function Y(Z,tt=Xi){let at,Mt=r.getTransfer(tt);if(Z===ri)return W.UNSIGNED_BYTE;if(Z===ja)return W.UNSIGNED_SHORT_4_4_4_4;if(Z===to)return W.UNSIGNED_SHORT_5_5_5_1;if(Z===jc)return W.UNSIGNED_INT_5_9_9_9_REV;if(Z===th)return W.UNSIGNED_INT_10F_11F_11F_REV;if(Z===Kc)return W.BYTE;if(Z===Qc)return W.SHORT;if(Z===Xs)return W.UNSIGNED_SHORT;if(Z===Qa)return W.INT;if(Z===Li)return W.UNSIGNED_INT;if(Z===Si)return W.FLOAT;if(Z===x)return W.HALF_FLOAT;if(Z===eh)return W.ALPHA;if(Z===nh)return W.RGB;if(Z===Mi)return W.RGBA;if(Z===vs)return W.DEPTH_COMPONENT;if(Z===Wi)return W.DEPTH_STENCIL;if(Z===ih)return W.RED;if(Z===eo)return W.RED_INTEGER;if(Z===Vi)return W.RG;if(Z===no)return W.RG_INTEGER;if(Z===io)return W.RGBA_INTEGER;if(Z===kr||Z===Hr||Z===Wr||Z===Vr)if(Mt===a)if(at=q.get("WEBGL_compressed_texture_s3tc_srgb"),at!==null){if(Z===kr)return at.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===Hr)return at.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===Wr)return at.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===Vr)return at.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(at=q.get("WEBGL_compressed_texture_s3tc"),at!==null){if(Z===kr)return at.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===Hr)return at.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===Wr)return at.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===Vr)return at.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===so||Z===ro||Z===ao||Z===oo)if(at=q.get("WEBGL_compressed_texture_pvrtc"),at!==null){if(Z===so)return at.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===ro)return at.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===ao)return at.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===oo)return at.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===lo||Z===co||Z===ho||Z===uo||Z===fo||Z===Xr||Z===po)if(at=q.get("WEBGL_compressed_texture_etc"),at!==null){if(Z===lo||Z===co)return Mt===a?at.COMPRESSED_SRGB8_ETC2:at.COMPRESSED_RGB8_ETC2;if(Z===ho)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:at.COMPRESSED_RGBA8_ETC2_EAC;if(Z===uo)return at.COMPRESSED_R11_EAC;if(Z===fo)return at.COMPRESSED_SIGNED_R11_EAC;if(Z===Xr)return at.COMPRESSED_RG11_EAC;if(Z===po)return at.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===mo||Z===go||Z===_o||Z===xo||Z===vo||Z===yo||Z===So||Z===Mo||Z===bo||Z===Eo||Z===Ao||Z===To||Z===wo||Z===Ro)if(at=q.get("WEBGL_compressed_texture_astc"),at!==null){if(Z===mo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:at.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===go)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:at.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===_o)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:at.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===xo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:at.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===vo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:at.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===yo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:at.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===So)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:at.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===Mo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:at.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===bo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:at.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===Eo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:at.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===Ao)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:at.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===To)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:at.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===wo)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:at.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===Ro)return Mt===a?at.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:at.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===Co||Z===Io||Z===Po)if(at=q.get("EXT_texture_compression_bptc"),at!==null){if(Z===Co)return Mt===a?at.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:at.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===Io)return at.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===Po)return at.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===Lo||Z===No||Z===qr||Z===Do)if(at=q.get("EXT_texture_compression_rgtc"),at!==null){if(Z===Lo)return at.COMPRESSED_RED_RGTC1_EXT;if(Z===No)return at.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===qr)return at.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===Do)return at.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===xs)return W.UNSIGNED_INT_24_8;return W[Z]!==void 0?W[Z]:null}return{convert:Y}}var o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(W,q){if(this.texture===null){let Y=new ea(W.texture);if(W.depthNear!==q.depthNear||W.depthFar!==q.depthFar)this.depthNear=W.depthNear,this.depthFar=W.depthFar;this.texture=Y}}getMesh(W){if(this.texture!==null){if(this.mesh===null){let q=W.cameras[0].viewport,Y=new d({vertexShader:o_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:q.z},depthHeight:{value:q.w}}});this.mesh=new i(new b(20,20),Y)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hu extends bi{constructor(W,q){super();let Y=this,Z=null,tt=1,at=null,Mt="local-floor",bt=1,Et=null,At=null,Ct=null,It=null,Rt=null,Lt=null,Dt=typeof XRWebGLBinding<"u",Bt=new cu,Pt={},wt=q.getContextAttributes(),Gt=null,Wt=null,zt=[],Ht=[],qt=new e,Nt=null,Ot=null,Yt=new g;Yt.viewport=new Tn;let ie=new g;ie.viewport=new Tn;let Zt=[Yt,ie],ee=new pl,he=null,Xt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let xe=zt[fe];if(xe===void 0)xe=new Ys,zt[fe]=xe;return xe.getTargetRaySpace()},this.getControllerGrip=function(fe){let xe=zt[fe];if(xe===void 0)xe=new Ys,zt[fe]=xe;return xe.getGripSpace()},this.getHand=function(fe){let xe=zt[fe];if(xe===void 0)xe=new Ys,zt[fe]=xe;return xe.getHandSpace()};function ae(fe){let xe=Ht.indexOf(fe.inputSource);if(xe===-1)return;let ze=zt[xe];if(ze!==void 0)ze.update(fe.inputSource,fe.frame,Et||at),ze.dispatchEvent({type:fe.type,data:fe.inputSource})}function le(){Z.removeEventListener("select",ae),Z.removeEventListener("selectstart",ae),Z.removeEventListener("selectend",ae),Z.removeEventListener("squeeze",ae),Z.removeEventListener("squeezestart",ae),Z.removeEventListener("squeezeend",ae),Z.removeEventListener("end",le),Z.removeEventListener("inputsourceschange",te);for(let fe=0;fe<zt.length;fe++){let xe=Ht[fe];if(xe===null)continue;Ht[fe]=null,zt[fe].disconnect(xe)}he=null,Xt=null,Bt.reset();for(let fe in Pt)delete Pt[fe];if(W.setRenderTarget(Gt),Rt=null,It=null,Ct=null,Z=null,Wt=null,Oe.stop(),Y.isPresenting=!1,W.setPixelRatio(Nt),W.setSize(qt.width,qt.height,!1),Ot!==null){let fe=Ot.camera;fe.fov=Ot.fov,fe.zoom=Ot.zoom,fe.updateProjectionMatrix(),Ot=null}Y.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){if(tt=fe,Y.isPresenting===!0)Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){if(Mt=fe,Y.isPresenting===!0)Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Et||at},this.setReferenceSpace=function(fe){Et=fe},this.getBaseLayer=function(){return It!==null?It:Rt},this.getBinding=function(){if(Ct===null&&Dt)Ct=new XRWebGLBinding(Z,q);return Ct},this.getFrame=function(){return Lt},this.getSession=function(){return Z},this.setSession=async function(fe){if(Z=fe,Z!==null){if(Gt=W.getRenderTarget(),Z.addEventListener("select",ae),Z.addEventListener("selectstart",ae),Z.addEventListener("selectend",ae),Z.addEventListener("squeeze",ae),Z.addEventListener("squeezestart",ae),Z.addEventListener("squeezeend",ae),Z.addEventListener("end",le),Z.addEventListener("inputsourceschange",te),wt.xrCompatible!==!0)await q.makeXRCompatible();if(Nt=W.getPixelRatio(),W.getSize(qt),!(Dt&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ze={antialias:wt.antialias,alpha:!0,depth:wt.depth,stencil:wt.stencil,framebufferScaleFactor:tt};Rt=new XRWebGLLayer(Z,q,ze),Z.updateRenderState({baseLayer:Rt}),W.setPixelRatio(1),W.setSize(Rt.framebufferWidth,Rt.framebufferHeight,!1),Wt=new m(Rt.framebufferWidth,Rt.framebufferHeight,{format:Mi,type:ri,colorSpace:W.outputColorSpace,stencilBuffer:wt.stencil,resolveDepthBuffer:Rt.ignoreDepthValues===!1,resolveStencilBuffer:Rt.ignoreDepthValues===!1,storeMultisampledDepthBuffer:Rt.ignoreDepthValues===!1,storeMultisampledStencilBuffer:Rt.ignoreDepthValues===!1})}else{let ze=null,Ye=null,Ze=null;if(wt.depth)Ze=wt.stencil?q.DEPTH24_STENCIL8:q.DEPTH_COMPONENT24,ze=wt.stencil?Wi:vs,Ye=wt.stencil?xs:Li;let Ne={colorFormat:q.RGBA8,depthFormat:Ze,scaleFactor:tt};Ct=this.getBinding(),It=Ct.createProjectionLayer(Ne),Z.updateRenderState({layers:[It]}),W.setPixelRatio(1),W.setSize(It.textureWidth,It.textureHeight,!1),Wt=new m(It.textureWidth,It.textureHeight,{format:Mi,type:ri,depthTexture:new qi(It.textureWidth,It.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,ze),stencilBuffer:wt.stencil,colorSpace:W.outputColorSpace,samples:wt.antialias?4:0,resolveDepthBuffer:It.ignoreDepthValues===!1,resolveStencilBuffer:It.ignoreDepthValues===!1,storeMultisampledDepthBuffer:It.ignoreDepthValues===!1,storeMultisampledStencilBuffer:It.ignoreDepthValues===!1})}Wt.isXRRenderTarget=!0,this.setFoveation(bt),Et=null,at=await Z.requestReferenceSpace(Mt),Oe.setContext(Z),Oe.start(),Y.isPresenting=!0,Y.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return Bt.getDepthTexture()};function te(fe){for(let xe=0;xe<fe.removed.length;xe++){let ze=fe.removed[xe],Ye=Ht.indexOf(ze);if(Ye>=0)Ht[Ye]=null,zt[Ye].disconnect(ze)}for(let xe=0;xe<fe.added.length;xe++){let ze=fe.added[xe],Ye=Ht.indexOf(ze);if(Ye===-1){for(let Ne=0;Ne<zt.length;Ne++)if(Ne>=Ht.length){Ht.push(ze),Ye=Ne;break}else if(Ht[Ne]===null){Ht[Ne]=ze,Ye=Ne;break}if(Ye===-1)break}let Ze=zt[Ye];if(Ze)Ze.connect(ze)}}function Me(fe,xe){if(xe===null)fe.matrixWorld.copy(fe.matrix);else fe.matrixWorld.multiplyMatrices(xe.matrixWorld,fe.matrix);fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(Z===null)return;let{near:xe,far:ze}=fe;if(Bt.texture!==null){if(Bt.depthNear>0)xe=Bt.depthNear;if(Bt.depthFar>0)ze=Bt.depthFar}if(ee.near=ie.near=Yt.near=xe,ee.far=ie.far=Yt.far=ze,he!==ee.near||Xt!==ee.far)Z.updateRenderState({depthNear:ee.near,depthFar:ee.far}),he=ee.near,Xt=ee.far;ee.layers.mask=fe.layers.mask|6,Yt.layers.mask=ee.layers.mask&-5,ie.layers.mask=ee.layers.mask&-3;let Ye=fe.parent,Ze=ee.cameras;Me(ee,Ye);for(let Ne=0;Ne<Ze.length;Ne++)Me(Ze[Ne],Ye);if(ee.projectionMatrix.copy(Yt.projectionMatrix),ee.projectionMatrixInverse.copy(Yt.projectionMatrixInverse),Ot===null&&fe.isPerspectiveCamera)Ot={camera:fe,fov:fe.fov,zoom:fe.zoom};se(fe,ee,Ye)};function se(fe,xe,ze){if(ze===null)fe.matrix.copy(xe.matrixWorld);else fe.matrix.copy(ze.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(xe.matrixWorld);if(fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(xe.projectionMatrix),fe.projectionMatrixInverse.copy(xe.projectionMatrixInverse),fe.isPerspectiveCamera)fe.fov=Nr*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1}this.getCamera=function(){return ee},this.getFoveation=function(){if(It===null&&Rt===null)return;return bt},this.setFoveation=function(fe){if(bt=fe,It!==null)It.fixedFoveation=fe;if(Rt!==null&&Rt.fixedFoveation!==void 0)Rt.fixedFoveation=fe},this.hasDepthSensing=function(){return Bt.texture!==null},this.getDepthSensingMesh=function(){return Bt.getMesh(ee)},this.getCameraTexture=function(fe){return Pt[fe]};let de=null;function ye(fe,xe){if(At=xe.getViewerPose(Et||at),Lt=xe,At!==null){let ze=At.views;if(Rt!==null)W.setRenderTargetFramebuffer(Wt,Rt.framebuffer),W.setRenderTarget(Wt);let Ye=!1;if(ze.length!==ee.cameras.length)ee.cameras.length=0,Ye=!0;for(let rn=0;rn<ze.length;rn++){let $e=ze[rn],dn=null;if(Rt!==null)dn=Rt.getViewport($e);else{let Ee=Ct.getViewSubImage(It,$e);if(dn=Ee.viewport,rn===0)W.setRenderTargetTextures(Wt,Ee.colorTexture,Ee.depthStencilTexture),W.setRenderTarget(Wt)}let pe=Zt[rn];if(pe===void 0)pe=new g,pe.layers.enable(rn),pe.viewport=new Tn,Zt[rn]=pe;if(pe.matrix.fromArray($e.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray($e.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(dn.x,dn.y,dn.width,dn.height),rn===0)ee.matrix.copy(pe.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale);if(Ye===!0)ee.cameras.push(pe)}let Ze=Z.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&Dt){Ct=Y.getBinding();let rn=Ct.getDepthInformation(ze[0]);if(rn&&rn.isValid&&rn.texture)Bt.init(rn,Z.renderState)}if(Ze&&Ze.includes("camera-access")&&Dt){W.state.unbindTexture(),Ct=Y.getBinding();for(let rn=0;rn<ze.length;rn++){let $e=ze[rn].camera;if($e){let dn=Pt[$e];if(!dn)dn=new ea,Pt[$e]=dn;let pe=Ct.getCameraImage($e);dn.sourceTexture=pe}}}}for(let ze=0;ze<zt.length;ze++){let Ye=Ht[ze],Ze=zt[ze];if(Ye!==null&&Ze!==void 0)Ze.update(Ye,xe,Et||at)}if(de)de(fe,xe);if(xe.detectedPlanes)Y.dispatchEvent({type:"planesdetected",data:xe});Lt=null}let Oe=new Zh;Oe.setAnimationLoop(ye),this.setAnimationLoop=function(fe){de=fe},this.dispose=function(){}}}var c_=new o,uu=new tn;uu.set(-1,0,0,0,1,0,0,0,1);function h_(W,q){function Y(Pt,wt){if(Pt.matrixAutoUpdate===!0)Pt.updateMatrix();wt.value.copy(Pt.matrix)}function Z(Pt,wt){if(wt.color.getRGB(Pt.fogColor.value,el(W)),wt.isFog)Pt.fogNear.value=wt.near,Pt.fogFar.value=wt.far;else if(wt.isFogExp2)Pt.fogDensity.value=wt.density}function tt(Pt,wt,Gt,Wt,zt){if(wt.isNodeMaterial)wt.uniformsNeedUpdate=!1;else if(wt.isMeshBasicMaterial)at(Pt,wt);else if(wt.isMeshLambertMaterial){if(at(Pt,wt),wt.envMap)Pt.envMapIntensity.value=wt.envMapIntensity}else if(wt.isMeshToonMaterial)at(Pt,wt),It(Pt,wt);else if(wt.isMeshPhongMaterial){if(at(Pt,wt),Ct(Pt,wt),wt.envMap)Pt.envMapIntensity.value=wt.envMapIntensity}else if(wt.isMeshStandardMaterial){if(at(Pt,wt),Rt(Pt,wt),wt.isMeshPhysicalMaterial)Lt(Pt,wt,zt)}else if(wt.isMeshMatcapMaterial)at(Pt,wt),Dt(Pt,wt);else if(wt.isMeshDepthMaterial)at(Pt,wt);else if(wt.isMeshDistanceMaterial)at(Pt,wt),Bt(Pt,wt);else if(wt.isMeshNormalMaterial)at(Pt,wt);else if(wt.isLineBasicMaterial){if(Mt(Pt,wt),wt.isLineDashedMaterial)bt(Pt,wt)}else if(wt.isPointsMaterial)Et(Pt,wt,Gt,Wt);else if(wt.isSpriteMaterial)At(Pt,wt);else if(wt.isShadowMaterial)Pt.color.value.copy(wt.color),Pt.opacity.value=wt.opacity;else if(wt.isShaderMaterial)wt.uniformsNeedUpdate=!1}function at(Pt,wt){if(Pt.opacity.value=wt.opacity,wt.color)Pt.diffuse.value.copy(wt.color);if(wt.emissive)Pt.emissive.value.copy(wt.emissive).multiplyScalar(wt.emissiveIntensity);if(wt.map)Pt.map.value=wt.map,Y(wt.map,Pt.mapTransform);if(wt.alphaMap)Pt.alphaMap.value=wt.alphaMap,Y(wt.alphaMap,Pt.alphaMapTransform);if(wt.bumpMap){if(Pt.bumpMap.value=wt.bumpMap,Y(wt.bumpMap,Pt.bumpMapTransform),Pt.bumpScale.value=wt.bumpScale,wt.side===Wn)Pt.bumpScale.value*=-1}if(wt.normalMap){if(Pt.normalMap.value=wt.normalMap,Y(wt.normalMap,Pt.normalMapTransform),Pt.normalScale.value.copy(wt.normalScale),wt.side===Wn)Pt.normalScale.value.negate()}if(wt.displacementMap)Pt.displacementMap.value=wt.displacementMap,Y(wt.displacementMap,Pt.displacementMapTransform),Pt.displacementScale.value=wt.displacementScale,Pt.displacementBias.value=wt.displacementBias;if(wt.emissiveMap)Pt.emissiveMap.value=wt.emissiveMap,Y(wt.emissiveMap,Pt.emissiveMapTransform);if(wt.specularMap)Pt.specularMap.value=wt.specularMap,Y(wt.specularMap,Pt.specularMapTransform);if(wt.alphaTest>0)Pt.alphaTest.value=wt.alphaTest;let Gt=q.get(wt),{envMap:Wt,envMapRotation:zt}=Gt;if(Wt){if(Pt.envMap.value=Wt,Pt.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(zt)).transpose(),Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1)Pt.envMapRotation.value.premultiply(uu);Pt.reflectivity.value=wt.reflectivity,Pt.ior.value=wt.ior,Pt.refractionRatio.value=wt.refractionRatio}if(wt.lightMap)Pt.lightMap.value=wt.lightMap,Pt.lightMapIntensity.value=wt.lightMapIntensity,Y(wt.lightMap,Pt.lightMapTransform);if(wt.aoMap)Pt.aoMap.value=wt.aoMap,Pt.aoMapIntensity.value=wt.aoMapIntensity,Y(wt.aoMap,Pt.aoMapTransform)}function Mt(Pt,wt){if(Pt.diffuse.value.copy(wt.color),Pt.opacity.value=wt.opacity,wt.map)Pt.map.value=wt.map,Y(wt.map,Pt.mapTransform)}function bt(Pt,wt){Pt.dashSize.value=wt.dashSize,Pt.totalSize.value=wt.dashSize+wt.gapSize,Pt.scale.value=wt.scale}function Et(Pt,wt,Gt,Wt){if(Pt.diffuse.value.copy(wt.color),Pt.opacity.value=wt.opacity,Pt.size.value=wt.size*Gt,Pt.scale.value=Wt*0.5,wt.map)Pt.map.value=wt.map,Y(wt.map,Pt.uvTransform);if(wt.alphaMap)Pt.alphaMap.value=wt.alphaMap,Y(wt.alphaMap,Pt.alphaMapTransform);if(wt.alphaTest>0)Pt.alphaTest.value=wt.alphaTest}function At(Pt,wt){if(Pt.diffuse.value.copy(wt.color),Pt.opacity.value=wt.opacity,Pt.rotation.value=wt.rotation,wt.map)Pt.map.value=wt.map,Y(wt.map,Pt.mapTransform);if(wt.alphaMap)Pt.alphaMap.value=wt.alphaMap,Y(wt.alphaMap,Pt.alphaMapTransform);if(wt.alphaTest>0)Pt.alphaTest.value=wt.alphaTest}function Ct(Pt,wt){Pt.specular.value.copy(wt.specular),Pt.shininess.value=Math.max(wt.shininess,0.0001)}function It(Pt,wt){if(wt.gradientMap)Pt.gradientMap.value=wt.gradientMap}function Rt(Pt,wt){if(Pt.metalness.value=wt.metalness,wt.metalnessMap)Pt.metalnessMap.value=wt.metalnessMap,Y(wt.metalnessMap,Pt.metalnessMapTransform);if(Pt.roughness.value=wt.roughness,wt.roughnessMap)Pt.roughnessMap.value=wt.roughnessMap,Y(wt.roughnessMap,Pt.roughnessMapTransform);if(wt.envMap)Pt.envMapIntensity.value=wt.envMapIntensity}function Lt(Pt,wt,Gt){if(Pt.ior.value=wt.ior,wt.diffuseRoughness>0){if(Pt.diffuseRoughness.value=wt.diffuseRoughness,wt.diffuseRoughnessMap)Pt.diffuseRoughnessMap.value=wt.diffuseRoughnessMap,Y(wt.diffuseRoughnessMap,Pt.diffuseRoughnessMapTransform)}if(wt.sheen>0){if(Pt.sheenColor.value.copy(wt.sheenColor).multiplyScalar(wt.sheen),Pt.sheenRoughness.value=wt.sheenRoughness,wt.sheenColorMap)Pt.sheenColorMap.value=wt.sheenColorMap,Y(wt.sheenColorMap,Pt.sheenColorMapTransform);if(wt.sheenRoughnessMap)Pt.sheenRoughnessMap.value=wt.sheenRoughnessMap,Y(wt.sheenRoughnessMap,Pt.sheenRoughnessMapTransform)}if(wt.clearcoat>0){if(Pt.clearcoat.value=wt.clearcoat,Pt.clearcoatRoughness.value=wt.clearcoatRoughness,wt.clearcoatMap)Pt.clearcoatMap.value=wt.clearcoatMap,Y(wt.clearcoatMap,Pt.clearcoatMapTransform);if(wt.clearcoatRoughnessMap)Pt.clearcoatRoughnessMap.value=wt.clearcoatRoughnessMap,Y(wt.clearcoatRoughnessMap,Pt.clearcoatRoughnessMapTransform);if(wt.clearcoatNormalMap){if(Pt.clearcoatNormalMap.value=wt.clearcoatNormalMap,Y(wt.clearcoatNormalMap,Pt.clearcoatNormalMapTransform),Pt.clearcoatNormalScale.value.copy(wt.clearcoatNormalScale),wt.side===Wn)Pt.clearcoatNormalScale.value.negate()}}if(wt.dispersion>0)Pt.dispersion.value=wt.dispersion;if(wt.retroreflectivity>0)Pt.retroreflectivity.value=wt.retroreflectivity;if(wt.iridescence>0){if(Pt.iridescence.value=wt.iridescence,Pt.iridescenceIOR.value=wt.iridescenceIOR,Pt.iridescenceThicknessMinimum.value=wt.iridescenceThicknessRange[0],Pt.iridescenceThicknessMaximum.value=wt.iridescenceThicknessRange[1],wt.iridescenceMap)Pt.iridescenceMap.value=wt.iridescenceMap,Y(wt.iridescenceMap,Pt.iridescenceMapTransform);if(wt.iridescenceThicknessMap)Pt.iridescenceThicknessMap.value=wt.iridescenceThicknessMap,Y(wt.iridescenceThicknessMap,Pt.iridescenceThicknessMapTransform)}if(wt.transmission>0){if(Pt.transmission.value=wt.transmission,Pt.transmissionSamplerMap.value=Gt.texture,Pt.transmissionSamplerSize.value.set(Gt.width,Gt.height),wt.transmissionMap)Pt.transmissionMap.value=wt.transmissionMap,Y(wt.transmissionMap,Pt.transmissionMapTransform);if(Pt.thickness.value=wt.thickness,wt.thicknessMap)Pt.thicknessMap.value=wt.thicknessMap,Y(wt.thicknessMap,Pt.thicknessMapTransform);Pt.attenuationDistance.value=wt.attenuationDistance,Pt.attenuationColor.value.copy(wt.attenuationColor)}if(wt.anisotropy>0){if(Pt.anisotropyVector.value.set(wt.anisotropy*Math.cos(wt.anisotropyRotation),wt.anisotropy*Math.sin(wt.anisotropyRotation)),wt.anisotropyMap)Pt.anisotropyMap.value=wt.anisotropyMap,Y(wt.anisotropyMap,Pt.anisotropyMapTransform)}if(Pt.specularIntensity.value=wt.specularIntensity,Pt.specularColor.value.copy(wt.specularColor),wt.specularColorMap)Pt.specularColorMap.value=wt.specularColorMap,Y(wt.specularColorMap,Pt.specularColorMapTransform);if(wt.specularIntensityMap)Pt.specularIntensityMap.value=wt.specularIntensityMap,Y(wt.specularIntensityMap,Pt.specularIntensityMapTransform)}function Dt(Pt,wt){if(wt.matcap)Pt.matcap.value=wt.matcap}function Bt(Pt,wt){let Gt=q.get(wt).light;Pt.referencePosition.value.setFromMatrixPosition(Gt.matrixWorld),Pt.nearDistance.value=Gt.shadow.camera.near,Pt.farDistance.value=Gt.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:tt}}function u_(W,q,Y,Z){let tt={},at={};function Mt(wt,Gt){let Wt=Gt.program;Z.uniformBlockBinding(wt,Wt,tt[wt.id])}function bt(wt,Gt){let Wt=tt[wt.id];if(Wt===void 0)Lt(wt),Wt=Et(wt),tt[wt.id]=Wt,wt.addEventListener("dispose",Bt);let zt=Gt.program;Z.updateUBOMapping(wt,zt);let Ht=q.render.frame;if(at[wt.id]!==Ht)At(wt),at[wt.id]=Ht}function Et(wt){let Gt=W.createBuffer(),{__size:Wt,usage:zt}=wt;return W.bindBuffer(W.UNIFORM_BUFFER,Gt),W.bufferData(W.UNIFORM_BUFFER,Wt,zt),W.bindBuffer(W.UNIFORM_BUFFER,null),Gt}function At(wt){let Gt=tt[wt.id],{uniforms:Wt,__cache:zt}=wt;W.bindBuffer(W.UNIFORM_BUFFER,Gt);for(let Ht=0,qt=Wt.length;Ht<qt;Ht++){let Nt=Wt[Ht];if(Array.isArray(Nt))for(let Ot=0,Yt=Nt.length;Ot<Yt;Ot++)Ct(Nt[Ot],Ht,Ot,zt);else Ct(Nt,Ht,0,zt)}W.bindBuffer(W.UNIFORM_BUFFER,null)}function Ct(wt,Gt,Wt,zt){if(Rt(wt,Gt,Wt,zt)===!0){let{__offset:Ht,value:qt}=wt;if(Array.isArray(qt)){let Nt=0;for(let Ot=0;Ot<qt.length;Ot++){let Yt=qt[Ot],ie=Dt(Yt);if(It(Yt,wt.__data,Nt),typeof Yt!=="number"&&typeof Yt!=="boolean"&&!Yt.isMatrix3&&!ArrayBuffer.isView(Yt))Nt+=ie.storage/Float32Array.BYTES_PER_ELEMENT}}else It(qt,wt.__data,0);W.bufferSubData(W.UNIFORM_BUFFER,Ht,wt.__data)}}function It(wt,Gt,Wt){if(typeof wt==="number"||typeof wt==="boolean")Gt[0]=wt;else if(wt.isMatrix3)Gt[0]=wt.elements[0],Gt[1]=wt.elements[1],Gt[2]=wt.elements[2],Gt[3]=0,Gt[4]=wt.elements[3],Gt[5]=wt.elements[4],Gt[6]=wt.elements[5],Gt[7]=0,Gt[8]=wt.elements[6],Gt[9]=wt.elements[7],Gt[10]=wt.elements[8],Gt[11]=0;else if(ArrayBuffer.isView(wt))Gt.set(new wt.constructor(wt.buffer,wt.byteOffset,Gt.length));else wt.toArray(Gt,Wt)}function Rt(wt,Gt,Wt,zt){let Ht=wt.value,qt=Gt+"_"+Wt;if(zt[qt]===void 0){if(typeof Ht==="number"||typeof Ht==="boolean")zt[qt]=Ht;else if(ArrayBuffer.isView(Ht))zt[qt]=Ht.slice();else zt[qt]=Ht.clone();return!0}else{let Nt=zt[qt];if(typeof Ht==="number"||typeof Ht==="boolean"){if(Nt!==Ht)return zt[qt]=Ht,!0}else if(ArrayBuffer.isView(Ht))return!0;else if(Nt.equals(Ht)===!1)return Nt.copy(Ht),!0}return!1}function Lt(wt){let Gt=wt.uniforms,Wt=0,zt=16;for(let qt=0,Nt=Gt.length;qt<Nt;qt++){let Ot=Array.isArray(Gt[qt])?Gt[qt]:[Gt[qt]];for(let Yt=0,ie=Ot.length;Yt<ie;Yt++){let Zt=Ot[Yt],ee=Array.isArray(Zt.value)?Zt.value:[Zt.value];for(let he=0,Xt=ee.length;he<Xt;he++){let ae=ee[he],le=Dt(ae),te=Wt%zt,Me=te%le.boundary,se=te+Me;if(Wt+=Me,se!==0&&zt-se<le.storage)Wt+=zt-se;let de=Zt.type==="int"?Int32Array:Zt.type==="uint"?Uint32Array:Float32Array;Zt.__data=new de(le.storage/Float32Array.BYTES_PER_ELEMENT),Zt.__offset=Wt,Wt+=le.storage}}}let Ht=Wt%zt;if(Ht>0)Wt+=zt-Ht;return wt.__size=Wt,wt.__cache={},this}function Dt(wt){let Gt={boundary:0,storage:0};if(typeof wt==="number"||typeof wt==="boolean")Gt.boundary=4,Gt.storage=4;else if(wt.isVector2)Gt.boundary=8,Gt.storage=8;else if(wt.isVector3||wt.isColor)Gt.boundary=16,Gt.storage=12;else if(wt.isVector4)Gt.boundary=16,Gt.storage=16;else if(wt.isMatrix3)Gt.boundary=48,Gt.storage=48;else if(wt.isMatrix4)Gt.boundary=64,Gt.storage=64;else if(wt.isTexture)Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(wt))Gt.boundary=16,Gt.storage=wt.byteLength;else Ke("WebGLRenderer: Unsupported uniform value type.",wt);return Gt}function Bt(wt){let Gt=wt.target;Gt.removeEventListener("dispose",Bt),W.deleteBuffer(tt[Gt.id]),delete tt[Gt.id],delete at[Gt.id]}function Pt(){for(let wt in tt)W.deleteBuffer(tt[wt]);tt={},at={}}return{bind:Mt,update:bt,dispose:Pt}}var d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function f_(){if(di===null)di=new Kr(d_,16,16,Vi,x),di.name="DFG_LUT",di.minFilter=Kn,di.magFilter=Kn,di.wrapS=zr,di.wrapT=zr,di.generateMipmaps=!1,di.needsUpdate=!0;return di}class Sl{constructor(W={}){let{canvas:q=hh(),context:Y=null,depth:Z=!0,stencil:tt=!1,alpha:at=!1,antialias:Mt=!1,premultipliedAlpha:bt=!0,preserveDrawingBuffer:Et=!1,powerPreference:At="default",failIfMajorPerformanceCaveat:Ct=!1,reversedDepthBuffer:It=!1,outputBufferType:Rt=ri}=W;this.isWebGLRenderer=!0;let Lt;if(Y!==null){if(typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");Lt=Y.getContextAttributes().alpha}else Lt=at;let Dt=Rt,Bt=new Set([io,no,eo]),Pt=new Set([ri,Li,Xs,xs,ja,to]),wt=new Uint32Array(4),Gt=new Int32Array(4),Wt=new t,zt=null,Ht=null,qt=[],Nt=[],Ot=null;this.domElement=q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let Yt=this,ie=!1,Zt=null,ee=null,he=null,Xt=null;this._outputColorSpace=z;let ae=0,le=0,te=null,Me=-1,se=null,de=new Tn,ye=new Tn,Oe=null,fe=new n(0),xe=0,{width:ze,height:Ye}=q,Ze=1,Ne=null,fn=null,rn=new Tn(0,0,ze,Ye),$e=new Tn(0,0,ze,Ye),dn=!1,pe=new ki,Ee=new Qr,we=!1,Ue=!1,De=new o,Je=new t,qe=new Tn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},hn=!1;function _n(){return te===null?Ze:1}let $t=Y;function In(Ft,Jt){return q.getContext(Ft,Jt)}let en,En,Le,yn,We,je,Fn,Pn,kt,Ut,Kt,_e,me,Te,ve,re,ce,Vt,ge,oe,ue,Se,Ae;try{let Ft={alpha:!0,depth:Z,stencil:tt,antialias:Mt,premultipliedAlpha:bt,preserveDrawingBuffer:Et,powerPreference:At,failIfMajorPerformanceCaveat:Ct};if("setAttribute"in q)q.setAttribute("data-engine",`three.js r${pc}`);if(q.addEventListener("webglcontextlost",mn,!1),q.addEventListener("webglcontextrestored",be,!1),q.addEventListener("webglcontextcreationerror",an,!1),$t===null){if($t=In("webgl2",Ft),$t===null)if(In("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(Ft){throw q.removeEventListener("webglcontextlost",mn,!1),q.removeEventListener("webglcontextrestored",be,!1),q.removeEventListener("webglcontextcreationerror",an,!1),Qe("WebGLRenderer: "+Ft.message),Ft}function Ve(){if(en=new Em($t),en.init(),ue=new a_($t,en),En=new fm($t,en,W,ue),Le=new s_($t,en),En.reversedDepthBuffer&&It)Le.buffers.depth.setReversed(!0);ee=$t.createFramebuffer(),he=$t.createFramebuffer(),Xt=$t.createFramebuffer(),yn=new wm($t),We=new Vg,je=new r_($t,en,Le,We,En,ue,yn),Fn=new bm(Yt),Pn=new Rd($t),Se=new um($t,Pn),kt=new Am($t,Pn,yn,Se),Ut=new Cm($t,kt,Pn,Se,yn),Vt=new Rm($t,En,je),ve=new pm(We),Kt=new Wg(Yt,Fn,en,En,Se,ve),_e=new h_(Yt,We),me=new qg,Te=new Qg(en),ce=new hm(Yt,Fn,Le,Ut,Lt,bt),re=new i_(Yt,Ut,En),Ae=new u_($t,yn,En,Le),ge=new dm($t,en,yn),oe=new Tm($t,en,yn),yn.programs=Kt.programs,Yt.capabilities=En,Yt.extensions=en,Yt.properties=We,Yt.renderLists=me,Yt.shadowMap=re,Yt.state=Le,Yt.info=yn}if(Dt!==ri)Ot=new Pm(Dt,q.width,q.height,Mt,Z,tt);let Be=new hu(Yt,$t);this.xr=Be,this.getContext=function(){return $t},this.getContextAttributes=function(){return $t.getContextAttributes()},this.forceContextLoss=function(){let Ft=en.get("WEBGL_lose_context");if(Ft)Ft.loseContext()},this.forceContextRestore=function(){let Ft=en.get("WEBGL_lose_context");if(Ft)Ft.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(Ft){if(Ft===void 0)return;Ze=Ft,this.setSize(ze,Ye,!1)},this.getSize=function(Ft){return Ft.set(ze,Ye)},this.setSize=function(Ft,Jt,ne=!0){if(Be.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}if(ze=Ft,Ye=Jt,q.width=Math.floor(Ft*Ze),q.height=Math.floor(Jt*Ze),ne===!0)q.style.width=Ft+"px",q.style.height=Jt+"px";if(Ot!==null)Ot.setSize(q.width,q.height);this.setViewport(0,0,Ft,Jt)},this.getDrawingBufferSize=function(Ft){return Ft.set(ze*Ze,Ye*Ze).floor()},this.setDrawingBufferSize=function(Ft,Jt,ne){ze=Ft,Ye=Jt,Ze=ne,q.width=Math.floor(Ft*ne),q.height=Math.floor(Jt*ne),this.setViewport(0,0,Ft,Jt)},this.setEffects=function(Ft){if(Dt===ri){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(Ft){for(let Jt=0;Jt<Ft.length;Jt++)if(Ft[Jt].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Ot.setEffects(Ft||[])},this.getCurrentViewport=function(Ft){return Ft.copy(de)},this.getViewport=function(Ft){return Ft.copy(rn)},this.setViewport=function(Ft,Jt,ne,Qt){if(Ft.isVector4)rn.set(Ft.x,Ft.y,Ft.z,Ft.w);else rn.set(Ft,Jt,ne,Qt);Le.viewport(de.copy(rn).multiplyScalar(_n()).round())},this.getScissor=function(Ft){return Ft.copy($e)},this.setScissor=function(Ft,Jt,ne,Qt){if(Ft.isVector4)$e.set(Ft.x,Ft.y,Ft.z,Ft.w);else $e.set(Ft,Jt,ne,Qt);Le.scissor(ye.copy($e).multiplyScalar(_n()).round())},this.getScissorTest=function(){return dn},this.setScissorTest=function(Ft){Le.setScissorTest(dn=Ft)},this.setOpaqueSort=function(Ft){Ne=Ft},this.setTransparentSort=function(Ft){fn=Ft},this.getClearColor=function(Ft){return Ft.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(Ft=!0,Jt=!0,ne=!0){let Qt=0;if(Ft){let jt=!1;if(te!==null){let Ce=te.texture.format;jt=Bt.has(Ce)}if(jt){let Ce=te.texture.type,Ge=Pt.has(Ce),Re=ce.getClearColor(),Pe=ce.getClearAlpha(),{r:Xe,g:nn,b:un}=Re;if(Ge)wt[0]=Xe,wt[1]=nn,wt[2]=un,wt[3]=Pe,$t.clearBufferuiv($t.COLOR,0,wt);else Gt[0]=Xe,Gt[1]=nn,Gt[2]=un,Gt[3]=Pe,$t.clearBufferiv($t.COLOR,0,Gt)}else Qt|=$t.COLOR_BUFFER_BIT}if(Jt)Qt|=$t.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(ne)Qt|=$t.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(Qt!==0)$t.clear(Qt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(Ft){Ft.setRenderer(this),Zt=Ft},this.dispose=function(){q.removeEventListener("webglcontextlost",mn,!1),q.removeEventListener("webglcontextrestored",be,!1),q.removeEventListener("webglcontextcreationerror",an,!1),ce.dispose(),me.dispose(),Te.dispose(),je.dispose(),We.dispose(),Fn.dispose(),Ut.dispose(),kt.dispose(),Se.dispose(),Ae.dispose(),Kt.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",bl),Be.removeEventListener("sessionend",El),Ni.stop()};function mn(Ft){Ft.preventDefault(),Wo("WebGLRenderer: Context Lost."),ie=!0}function be(){Wo("WebGLRenderer: Context Restored."),ie=!1;let Ft=yn.autoReset,Jt=re.enabled,ne=re.autoUpdate,Qt=re.needsUpdate,jt=re.type;Ve(),yn.autoReset=Ft,re.enabled=Jt,re.autoUpdate=ne,re.needsUpdate=Qt,re.type=jt}function an(Ft){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",Ft.statusMessage)}function sn(Ft){let Jt=Ft.target;Jt.removeEventListener("dispose",sn),He(Jt)}function He(Ft){bn(Ft),We.remove(Ft)}function bn(Ft){let Jt=We.get(Ft).programs;if(Jt!==void 0){if(Jt.forEach(function(ne){Kt.releaseProgram(ne)}),Ft.isShaderMaterial)Kt.releaseShaderCache(Ft)}}this.renderBufferDirect=function(Ft,Jt,ne,Qt,jt,Ce){if(Jt===null)Jt=ln;let Ge=jt.isMesh&&jt.matrixWorld.determinantAffine()<0,Re=mu(Ft,Jt,ne,Qt,jt);Le.setMaterial(Qt,Ge);let Pe=ne.index,Xe=1;if(Qt.wireframe===!0){if(Pe=kt.getWireframeAttribute(ne),Pe===void 0)return;Xe=2}let nn=ne.drawRange,un=ne.attributes.position,ke=nn.start*Xe,pn=(nn.start+nn.count)*Xe;if(Ce!==null)ke=Math.max(ke,Ce.start*Xe),pn=Math.min(pn,(Ce.start+Ce.count)*Xe);if(Pe!==null)ke=Math.max(ke,0),pn=Math.min(pn,Pe.count);else if(un!==void 0&&un!==null)ke=Math.max(ke,0),pn=Math.min(pn,un.count);let wn=pn-ke;if(wn<0||wn===1/0)return;Se.setup(jt,Qt,Re,ne,Pe);let Mn,Sn=ge;if(Pe!==null)Mn=Pn.get(Pe),Sn=oe,Sn.setIndex(Mn);if(jt.isMesh)if(Qt.wireframe===!0)Le.setLineWidth(Qt.wireframeLinewidth*_n()),Sn.setMode($t.LINES);else Sn.setMode($t.TRIANGLES);else if(jt.isLine){let zn=Qt.linewidth;if(zn===void 0)zn=1;if(Le.setLineWidth(zn*_n()),jt.isLineSegments)Sn.setMode($t.LINES);else if(jt.isLineLoop)Sn.setMode($t.LINE_LOOP);else Sn.setMode($t.LINE_STRIP)}else if(jt.isPoints)Sn.setMode($t.POINTS);else if(jt.isSprite)Sn.setMode($t.TRIANGLES);if(jt.isBatchedMesh)if(!en.get("WEBGL_multi_draw")){let{_multiDrawStarts:zn,_multiDrawCounts:Fe,_multiDrawCount:Xn}=jt,xn=Pe?Pn.get(Pe).bytesPerElement:1,Di=We.get(Qt).currentProgram.getUniforms();for(let Gn=0;Gn<Xn;Gn++)Di.setValue($t,"_gl_DrawID",Gn),Sn.render(zn[Gn]/xn,Fe[Gn])}else Sn.renderMultiDraw(jt._multiDrawStarts,jt._multiDrawCounts,jt._multiDrawCount);else if(jt.isInstancedMesh)Sn.renderInstances(ke,wn,jt.count);else if(ne.isInstancedBufferGeometry){let zn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Fe=Math.min(ne.instanceCount,zn);Sn.renderInstances(ke,wn,Fe)}else Sn.render(ke,wn)};function Ln(Ft,Jt,ne,Qt){if(Zt!==null&&Ft.isNodeMaterial)Zt.setObject(Qt,Ft);if(we===!0)ve.setState(Ft,ne,!1);if(Ft.transparent===!0&&Ft.side===p&&Ft.forceSinglePass===!1)Ft.side=Wn,Ft.needsUpdate=!0,Es(Ft,Jt,Qt),Ft.side=ms,Ft.needsUpdate=!0,Es(Ft,Jt,Qt),Ft.side=p;else Es(Ft,Jt,Qt)}this.compile=function(Ft,Jt,ne=null){if(ne===null)ne=Ft;if(Zt!==null)Zt.renderStart(Ft,Jt,ne);if(Ht=Te.get(ne),Ht.init(Jt),Nt.push(Ht),ne.traverseVisible(function(jt){if(jt.isLight&&jt.layers.test(Jt.layers)){if(Ht.pushLight(jt),jt.castShadow)Ht.pushShadow(jt)}}),Ft!==ne)Ft.traverseVisible(function(jt){if(jt.isLight&&jt.layers.test(Jt.layers)){if(Ht.pushLight(jt),jt.castShadow)Ht.pushShadow(jt)}});if(Ht.setupLights(),Zt!==null)Zt.updateLights(Ht.state.lightsArray);if(Ue=this.localClippingEnabled,we=ve.init(this.clippingPlanes,Ue),we===!0)ve.setGlobalState(this.clippingPlanes,Jt);if(Zt!==null)re.render(Ht.state.shadowsArray,ne,Jt);let Qt=new Set;if(Ft.traverse(function(jt){if(!(jt.isMesh||jt.isPoints||jt.isLine||jt.isSprite))return;let Ce=jt.material;if(Ce)if(Array.isArray(Ce))for(let Ge=0;Ge<Ce.length;Ge++){let Re=Ce[Ge];Ln(Re,ne,Jt,jt),Qt.add(Re)}else Ln(Ce,ne,Jt,jt),Qt.add(Ce)}),Ht=Nt.pop(),Zt!==null)Zt.renderEnd();return Qt},this.compileAsync=function(Ft,Jt,ne=null){let Qt=this.compile(Ft,Jt,ne);return new Promise((jt)=>{function Ce(){if(Qt.forEach(function(Ge){let Pe=We.get(Ge).currentProgram;if(Pe===void 0||Pe.isReady())Qt.delete(Ge)}),Qt.size===0){jt(Ft);return}setTimeout(Ce,10)}if(en.get("KHR_parallel_shader_compile")!==null)Ce();else setTimeout(Ce,10)})};let ai=null;function du(Ft){if(ai)ai(Ft)}function bl(){Ni.stop()}function El(){Ni.start()}let Ni=new Zh;if(Ni.setAnimationLoop(du),typeof self<"u")Ni.setContext(self);this.setAnimationLoop=function(Ft){ai=Ft,Be.setAnimationLoop(Ft),Ft===null?Ni.stop():Ni.start()},Be.addEventListener("sessionstart",bl),Be.addEventListener("sessionend",El),this.render=function(Ft,Jt){if(Jt!==void 0&&Jt.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ie===!0)return;if(Zt!==null)Zt.renderStart(Ft,Jt);let ne=Be.enabled===!0&&Be.isPresenting===!0,Qt=Ot!==null&&(te===null||ne)&&Ot.begin(Yt,te);if(Ft.matrixWorldAutoUpdate===!0)Ft.updateMatrixWorld();if(Jt.parent===null&&Jt.matrixWorldAutoUpdate===!0)Jt.updateMatrixWorld();if(Be.enabled===!0&&Be.isPresenting===!0&&(Ot===null||Ot.isCompositing()===!1)){if(Be.cameraAutoUpdate===!0)Be.updateCamera(Jt);Jt=Be.getCamera()}if(Ft.isScene===!0)Ft.onBeforeRender(Yt,Ft,Jt,te);if(Ht=Te.get(Ft,Nt.length),Ht.init(Jt),Ht.state.textureUnits=je.getTextureUnits(),Nt.push(Ht),De.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse),Jt.isArrayCamera)Ee.setFromArrayCamera(Jt);else pe.setFromProjectionMatrix(De,Ho,Jt.reversedDepth);if(Ue=this.localClippingEnabled,we=ve.init(this.clippingPlanes,Ue),zt=me.get(Ft,qt.length),zt.init(),qt.push(zt),Be.enabled===!0&&Be.isPresenting===!0){let Ge=Yt.xr.getDepthSensingMesh();if(Ge!==null)ga(Ge,Jt,-1/0,Yt.sortObjects)}if(ga(Ft,Jt,0,Yt.sortObjects),zt.finish(),Zt!==null)Zt.updateLights(Ht.state.lightsArray);if(Yt.sortObjects===!0)zt.sort(Ne,fn);if(hn=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,hn)ce.addToRenderList(zt,Ft);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(we===!0)ve.beginShadows();let jt=Ht.state.shadowsArray;if(re.render(jt,Ft,Jt),we===!0)ve.endShadows();if((Qt&&Ot.hasRenderPass())===!1){let Ge=zt.opaque,Re=zt.transmissive;if(Ht.setupLights(),Jt.isArrayCamera){let Pe=Jt.cameras;if(Re.length>0)for(let Xe=0,nn=Pe.length;Xe<nn;Xe++){let un=Pe[Xe];Tl(Ge,Re,Ft,un)}if(hn)ce.render(Ft);for(let Xe=0,nn=Pe.length;Xe<nn;Xe++){let un=Pe[Xe];Al(zt,Ft,un,un.viewport)}}else{if(Re.length>0)Tl(Ge,Re,Ft,Jt);if(hn)ce.render(Ft);Al(zt,Ft,Jt)}}if(te!==null&&le===0)je.updateMultisampleRenderTarget(te),je.updateRenderTargetMipmap(te);if(Qt)Ot.end(Yt);if(Ft.isScene===!0)Ft.onAfterRender(Yt,Ft,Jt);if(Se.resetDefaultState(),Me=-1,se=null,Nt.pop(),Nt.length>0){if(Ht=Nt[Nt.length-1],je.setTextureUnits(Ht.state.textureUnits),we===!0)ve.setGlobalState(Yt.clippingPlanes,Ht.state.camera)}else Ht=null;if(qt.pop(),qt.length>0)zt=qt[qt.length-1];else zt=null;if(Zt!==null)Zt.renderEnd()};function ga(Ft,Jt,ne,Qt){if(Ft.visible===!1)return;if(Ft.layers.test(Jt.layers)){if(Ft.isGroup)ne=Ft.renderOrder;else if(Ft.isLOD){if(Ft.autoUpdate===!0)Ft.update(Jt)}else if(Ft.isLight){if(Ht.pushLight(Ft),Ft.castShadow)Ht.pushShadow(Ft)}else if(Ft.isSprite){let Ge=Jt.isArrayCamera?Ee:pe;if(!Ft.frustumCulled||Ft.intersectsFrustum(Ge)){if(Qt)qe.setFromMatrixPosition(Ft.matrixWorld).applyMatrix4(De);let Re=Ut.update(Ft),Pe=Ft.material;if(Pe.visible)zt.push(Ft,Re,Pe,ne,qe.z,null,Jt)}}else if(Ft.isMesh||Ft.isLine||Ft.isPoints){let Ge=Jt.isArrayCamera?Ee:pe;if(!Ft.frustumCulled||Ft.intersectsFrustum(Ge)){let Re=Ut.update(Ft),Pe=Ft.material;if(Qt){if(Ft.boundingSphere!==void 0){if(Ft.boundingSphere===null)Ft.computeBoundingSphere();qe.copy(Ft.boundingSphere.center)}else{if(Re.boundingSphere===null)Re.computeBoundingSphere();qe.copy(Re.boundingSphere.center)}qe.applyMatrix4(Ft.matrixWorld).applyMatrix4(De)}if(Array.isArray(Pe)){let Xe=Re.groups;for(let nn=0,un=Xe.length;nn<un;nn++){let ke=Xe[nn],pn=Pe[ke.materialIndex];if(pn&&pn.visible)zt.push(Ft,Re,pn,ne,qe.z,ke,Jt)}}else if(Pe.visible)zt.push(Ft,Re,Pe,ne,qe.z,null,Jt)}}}let Ce=Ft.children;for(let Ge=0,Re=Ce.length;Ge<Re;Ge++)ga(Ce[Ge],Jt,ne,Qt)}function Al(Ft,Jt,ne,Qt){let{opaque:jt,transmissive:Ce,transparent:Ge}=Ft;if(Ht.setupLightsView(ne),we===!0)ve.setGlobalState(Yt.clippingPlanes,ne);if(Qt)Le.viewport(de.copy(Qt));if(jt.length>0)er(jt,Jt,ne);if(Ce.length>0)er(Ce,Jt,ne);if(Ge.length>0)er(Ge,Jt,ne);Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Tl(Ft,Jt,ne,Qt){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(Ht.state.transmissionRenderTarget[Qt.id]===void 0){let ke=en.has("EXT_color_buffer_half_float")||en.has("EXT_color_buffer_float");Ht.state.transmissionRenderTarget[Qt.id]=new m(1,1,{generateMipmaps:!0,type:ke?x:ri,minFilter:Pi,samples:Math.max(4,En.samples),stencilBuffer:tt,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:r.workingColorSpace})}let Ce=Ht.state.transmissionRenderTarget[Qt.id],Ge=Qt.viewport||de;Ce.setSize(Ge.z*Yt.transmissionResolutionScale,Ge.w*Yt.transmissionResolutionScale);let Re=Yt.getRenderTarget(),Pe=Yt.getActiveCubeFace(),Xe=Yt.getActiveMipmapLevel();if(Yt.setRenderTarget(Ce),Yt.getClearColor(fe),xe=Yt.getClearAlpha(),xe<1)Yt.setClearColor(16777215,0.5);if(Yt.clear(),hn)ce.render(ne);let nn=Yt.toneMapping;Yt.toneMapping=hi;let un=Qt.viewport;if(Qt.viewport!==void 0)Qt.viewport=void 0;if(Ht.setupLightsView(Qt),we===!0)ve.setGlobalState(Yt.clippingPlanes,Qt);if(er(Ft,ne,Qt),je.updateMultisampleRenderTarget(Ce),je.updateRenderTargetMipmap(Ce),en.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let pn=0,wn=Jt.length;pn<wn;pn++){let Mn=Jt[pn],{object:Sn,geometry:zn,material:Fe,group:Xn}=Mn;if(Fe.side===p&&Sn.layers.test(Qt.layers)){let xn=Fe.side;Fe.side=Wn,Fe.needsUpdate=!0,wl(Sn,ne,Qt,zn,Fe,Xn),Fe.side=xn,Fe.needsUpdate=!0,ke=!0}}if(ke===!0)je.updateMultisampleRenderTarget(Ce),je.updateRenderTargetMipmap(Ce)}if(Yt.setRenderTarget(Re,Pe,Xe),Yt.setClearColor(fe,xe),un!==void 0)Qt.viewport=un;Yt.toneMapping=nn}function er(Ft,Jt,ne){let Qt=Jt.isScene===!0?Jt.overrideMaterial:null;for(let jt=0,Ce=Ft.length;jt<Ce;jt++){let Ge=Ft[jt],{object:Re,geometry:Pe,group:Xe}=Ge,nn=Ge.material;if(nn.allowOverride===!0&&Qt!==null)nn=Qt;if(Re.layers.test(ne.layers))wl(Re,Jt,ne,Pe,nn,Xe)}}function wl(Ft,Jt,ne,Qt,jt,Ce){if(Zt!==null&&jt.isNodeMaterial)Zt.setObject(Ft,jt);if(Ft.onBeforeRender(Yt,Jt,ne,Qt,jt,Ce),Ft.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,Ft.matrixWorld),Ft.normalMatrix.getNormalMatrix(Ft.modelViewMatrix),jt.onBeforeRender(Yt,Jt,ne,Qt,Ft,Ce),jt.transparent===!0&&jt.side===p&&jt.forceSinglePass===!1)jt.side=Wn,jt.needsUpdate=!0,Yt.renderBufferDirect(ne,Jt,Qt,jt,Ft,Ce),jt.side=ms,jt.needsUpdate=!0,Yt.renderBufferDirect(ne,Jt,Qt,jt,Ft,Ce),jt.side=p;else Yt.renderBufferDirect(ne,Jt,Qt,jt,Ft,Ce);Ft.onAfterRender(Yt,Jt,ne,Qt,jt,Ce)}function Es(Ft,Jt,ne){if(Jt.isScene!==!0)Jt=ln;let Qt=We.get(Ft),jt=Ht.state.lights,Ce=Ht.state.shadowsArray,Ge=jt.state.version,Re=Kt.getParameters(Ft,jt.state,Ce,Jt,ne,Ht.state.lightProbeGridArray),Pe=Kt.getProgramCacheKey(Re),Xe=Qt.programs;Qt.environment=Ft.isMeshStandardMaterial||Ft.isMeshLambertMaterial||Ft.isMeshPhongMaterial?Jt.environment:null,Qt.fog=Jt.fog;let nn=Ft.isMeshStandardMaterial||Ft.isMeshLambertMaterial&&!Ft.envMap||Ft.isMeshPhongMaterial&&!Ft.envMap;if(Qt.envMap=Fn.get(Ft.envMap||Qt.environment,nn),Qt.envMapRotation=Qt.environment!==null&&Ft.envMap===null?Jt.environmentRotation:Ft.envMapRotation,Xe===void 0)Ft.addEventListener("dispose",sn),Xe=new Map,Qt.programs=Xe,Qt.programVariants=new Map;let un=Xe.get(Pe);if(un!==void 0){if(Qt.currentProgram===un&&Qt.lightsStateVersion===Ge)return Cl(Ft,Re),un}else{if(Re.uniforms=Kt.getUniforms(Ft),Zt!==null&&Ft.isNodeMaterial)Zt.build(Ft,ne,Re);Ft.onBeforeCompile(Re,Yt),un=Kt.acquireProgram(Re,Pe),Xe.set(Pe,un),Qt.uniforms=Re.uniforms}let ke=Qt.uniforms;if(!Ft.isShaderMaterial&&!Ft.isRawShaderMaterial||Ft.clipping===!0)ke.clippingPlanes=ve.uniform;if(Cl(Ft,Re),Qt.needsLights=_u(Ft),Qt.lightsStateVersion=Ge,Qt.needsLights)ke.ambientLightColor.value=jt.state.ambient,ke.lightProbe.value=jt.state.probe,ke.sunLights.value=jt.state.sun,ke.sunLightShadows.value=jt.state.sunShadow,ke.directionalLights.value=jt.state.directional,ke.directionalLightShadows.value=jt.state.directionalShadow,ke.spotLights.value=jt.state.spot,ke.spotLightShadows.value=jt.state.spotShadow,ke.rectAreaLights.value=jt.state.rectArea,ke.ltc_1.value=jt.state.rectAreaLTC1,ke.ltc_2.value=jt.state.rectAreaLTC2,ke.pointLights.value=jt.state.point,ke.pointLightShadows.value=jt.state.pointShadow,ke.hemisphereLights.value=jt.state.hemi,ke.sunShadowMatrix.value=jt.state.sunShadowMatrix,ke.sunShadowCascade.value=jt.state.sunShadowCascade,ke.directionalShadowMatrix.value=jt.state.directionalShadowMatrix,ke.spotLightMatrix.value=jt.state.spotLightMatrix,ke.spotLightMap.value=jt.state.spotLightMap,ke.pointShadowMatrix.value=jt.state.pointShadowMatrix;return Qt.lightProbeGrid=Ht.state.lightProbeGridArray.length>0,Qt.currentProgram=un,Qt.uniformsList=null,un}function fu(Ft,Jt,ne,Qt,jt){let Ce=We.get(Ft),Ge=Ce.currentProgram.id+","+Qt+","+jt,Re=Ce.programVariants.get(Ge);if(Re===void 0)Re=Es(Ft,Jt,ne),Ce.programVariants.set(Ge,Re);else Ce.currentProgram=Re,Ce.uniformsList=null,Ce.outputColorSpace=Qt,Ce.toneMapping=jt;return Re}function Rl(Ft){if(Ft.uniformsList===null){let Jt=Ft.currentProgram.getUniforms();Ft.uniformsList=js.seqWithValue(Jt.seq,Ft.uniforms)}return Ft.uniformsList}function Cl(Ft,Jt){let ne=We.get(Ft);ne.outputColorSpace=Jt.outputColorSpace,ne.batching=Jt.batching,ne.batchingColor=Jt.batchingColor,ne.instancing=Jt.instancing,ne.instancingColor=Jt.instancingColor,ne.instancingMorph=Jt.instancingMorph,ne.skinning=Jt.skinning,ne.morphTargets=Jt.morphTargets,ne.morphNormals=Jt.morphNormals,ne.morphColors=Jt.morphColors,ne.morphTargetsCount=Jt.morphTargetsCount,ne.numClippingPlanes=Jt.numClippingPlanes,ne.numIntersection=Jt.numClipIntersection,ne.vertexAlphas=Jt.vertexAlphas,ne.vertexTangents=Jt.vertexTangents,ne.toneMapping=Jt.toneMapping}function pu(Ft,Jt){if(Ft.length===0)return null;if(Ft.length===1)return Ft[0].texture!==null?Ft[0]:null;Wt.setFromMatrixPosition(Jt.matrixWorld);for(let ne=0,Qt=Ft.length;ne<Qt;ne++){let jt=Ft[ne];if(jt.texture!==null&&jt.boundingBox.containsPoint(Wt))return jt}return null}function mu(Ft,Jt,ne,Qt,jt){if(Jt.isScene!==!0)Jt=ln;je.resetTextureUnits();let Ce=Jt.fog,Ge=Qt.isMeshStandardMaterial||Qt.isMeshLambertMaterial||Qt.isMeshPhongMaterial?Jt.environment:null,Re=te===null?Yt.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:r.workingColorSpace,Pe=Qt.isMeshStandardMaterial||Qt.isMeshLambertMaterial&&!Qt.envMap||Qt.isMeshPhongMaterial&&!Qt.envMap,Xe=Fn.get(Qt.envMap||Ge,Pe),nn=Qt.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,un=!!ne.attributes.tangent&&(!!Qt.normalMap||Qt.anisotropy>0),ke=!!ne.morphAttributes.position,pn=!!ne.morphAttributes.normal,wn=!!ne.morphAttributes.color,Mn=hi;if(Qt.toneMapped){if(te===null||te.isXRRenderTarget===!0)Mn=Yt.toneMapping}let Sn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,zn=Sn!==void 0?Sn.length:0,Fe=We.get(Qt),Xn=Ht.state.lights;if(we===!0){if(Ue===!0||Ft!==se){let Rn=Ft===se&&Qt.id===Me;ve.setState(Qt,Ft,Rn)}}let xn=!1,Di=!1;if(Qt.version===Fe.__version){if(Fe.needsLights&&Fe.lightsStateVersion!==Xn.state.version)xn=!0;else if(jt.isBatchedMesh&&Fe.batching===!1)xn=!0;else if(!jt.isBatchedMesh&&Fe.batching===!0)xn=!0;else if(jt.isBatchedMesh&&Fe.batchingColor===!0&&jt._colorsTexture===null)xn=!0;else if(jt.isBatchedMesh&&Fe.batchingColor===!1&&jt._colorsTexture!==null)xn=!0;else if(jt.isInstancedMesh&&Fe.instancing===!1)xn=!0;else if(!jt.isInstancedMesh&&Fe.instancing===!0)xn=!0;else if(jt.isSkinnedMesh&&Fe.skinning===!1)xn=!0;else if(!jt.isSkinnedMesh&&Fe.skinning===!0)xn=!0;else if(jt.isInstancedMesh&&Fe.instancingColor===!0&&jt.instanceColor===null)xn=!0;else if(jt.isInstancedMesh&&Fe.instancingColor===!1&&jt.instanceColor!==null)xn=!0;else if(jt.isInstancedMesh&&Fe.instancingMorph===!0&&jt.morphTexture===null)xn=!0;else if(jt.isInstancedMesh&&Fe.instancingMorph===!1&&jt.morphTexture!==null)xn=!0;else if(Fe.envMap!==Xe)xn=!0;else if(Qt.fog===!0&&Fe.fog!==Ce)xn=!0;else if(Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ve.numPlanes||Fe.numIntersection!==ve.numIntersection))xn=!0;else if(Fe.vertexAlphas!==nn)xn=!0;else if(Fe.vertexTangents!==un)xn=!0;else if(Fe.morphTargets!==ke)xn=!0;else if(Fe.morphNormals!==pn)xn=!0;else if(Fe.morphColors!==wn)xn=!0;else if(Fe.morphTargetsCount!==zn)xn=!0;else if(!!Fe.lightProbeGrid!==Ht.state.lightProbeGridArray.length>0)xn=!0;else if(Fe.outputColorSpace!==Re||Fe.toneMapping!==Mn)Di=!0}else xn=!0,Fe.__version=Qt.version;let Gn=Fe.currentProgram;if(xn===!0||Di===!0){if(Gn=Di===!0?fu(Qt,Jt,jt,Re,Mn):Es(Qt,Jt,jt),Zt&&Qt.isNodeMaterial)Zt.onUpdateProgram(Qt,Gn,Fe)}let nr=!1,pi=!1,Ui=!1,gn=Gn.getUniforms(),On=Fe.uniforms;if(Le.useProgram(Gn.program))nr=!0,pi=!0,Ui=!0;if(Qt.id!==Me)Me=Qt.id,pi=!0;if(Fe.needsLights){let Rn=pu(Ht.state.lightProbeGridArray,jt);if(Fe.lightProbeGrid!==Rn)Fe.lightProbeGrid=Rn,pi=!0}if(nr||se!==Ft){if(Le.buffers.depth.getReversed()&&Ft.reversedDepth!==!0)Ft._reversedDepth=!0,Ft.updateProjectionMatrix();gn.setValue($t,"projectionMatrix",Ft.projectionMatrix),gn.setValue($t,"viewMatrix",Ft.matrixWorldInverse);let ei=gn.map.cameraPosition;if(ei!==void 0)ei.setValue($t,Je.setFromMatrixPosition(Ft.matrixWorld));if(En.logarithmicDepthBuffer)gn.setValue($t,"logDepthBufFC",2/(Math.log(Ft.far+1)/Math.LN2));if(Qt.isMeshPhongMaterial||Qt.isMeshToonMaterial||Qt.isMeshLambertMaterial||Qt.isMeshBasicMaterial||Qt.isMeshStandardMaterial||Qt.isShaderMaterial)gn.setValue($t,"isOrthographic",Ft.isOrthographicCamera===!0);if(se!==Ft)se=Ft,pi=!0,Ui=!0}if(Fe.needsLights){if(Xn.state.sunShadowMap.length>0)gn.setValue($t,"sunShadowMap",Xn.state.sunShadowMap,je);if(Xn.state.directionalShadowMap.length>0)gn.setValue($t,"directionalShadowMap",Xn.state.directionalShadowMap,je);if(Xn.state.spotShadowMap.length>0)gn.setValue($t,"spotShadowMap",Xn.state.spotShadowMap,je);if(Xn.state.pointShadowMap.length>0)gn.setValue($t,"pointShadowMap",Xn.state.pointShadowMap,je)}if(jt.isSkinnedMesh){gn.setOptional($t,jt,"bindMatrix"),gn.setOptional($t,jt,"bindMatrixInverse");let Rn=jt.skeleton;if(Rn){if(Rn.boneTexture===null)Rn.computeBoneTexture();gn.setValue($t,"boneTexture",Rn.boneTexture,je)}}if(jt.isBatchedMesh){if(gn.setOptional($t,jt,"batchingTexture"),gn.setValue($t,"batchingTexture",jt._matricesTexture,je),gn.setOptional($t,jt,"batchingIdTexture"),gn.setValue($t,"batchingIdTexture",jt._indirectTexture,je),gn.setOptional($t,jt,"batchingColorTexture"),jt._colorsTexture!==null)gn.setValue($t,"batchingColorTexture",jt._colorsTexture,je)}let ti=ne.morphAttributes;if(ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)Vt.update(jt,ne,Gn);if(pi||Fe.receiveShadow!==jt.receiveShadow)Fe.receiveShadow=jt.receiveShadow,gn.setValue($t,"receiveShadow",jt.receiveShadow);if((Qt.isMeshStandardMaterial||Qt.isMeshLambertMaterial||Qt.isMeshPhongMaterial)&&Qt.envMap===null&&Jt.environment!==null)On.envMapIntensity.value=Jt.environmentIntensity;if(On.dfgLUT!==void 0)On.dfgLUT.value=f_();if(pi){if(gn.setValue($t,"toneMappingExposure",Yt.toneMappingExposure),Fe.needsLights)gu(On,Ui);if(Ce&&Qt.fog===!0)_e.refreshFogUniforms(On,Ce);if(_e.refreshMaterialUniforms(On,Qt,Ze,Ye,Ht.state.transmissionRenderTarget[Ft.id]),Fe.needsLights&&Fe.lightProbeGrid){let Rn=Fe.lightProbeGrid;On.probesSH.value=Rn.texture,On.probesMin.value.copy(Rn.boundingBox.min),On.probesMax.value.copy(Rn.boundingBox.max),On.probesResolution.value.copy(Rn.resolution)}js.upload($t,Rl(Fe),On,je)}if(Qt.isShaderMaterial&&Qt.uniformsNeedUpdate===!0)js.upload($t,Rl(Fe),On,je),Qt.uniformsNeedUpdate=!1;if(Qt.isSpriteMaterial)gn.setValue($t,"center",jt.center);if(gn.setValue($t,"modelViewMatrix",jt.modelViewMatrix),gn.setValue($t,"normalMatrix",jt.normalMatrix),gn.setValue($t,"modelMatrix",jt.matrixWorld),Qt.uniformsGroups!==void 0){let Rn=Qt.uniformsGroups;for(let ei=0,xu=Rn.length;ei<xu;ei++){let Pl=Rn[ei];Ae.update(Pl,Gn),Ae.bind(Pl,Gn)}}return Gn}function gu(Ft,Jt){Ft.ambientLightColor.needsUpdate=Jt,Ft.lightProbe.needsUpdate=Jt,Ft.sunLights.needsUpdate=Jt,Ft.sunLightShadows.needsUpdate=Jt,Ft.directionalLights.needsUpdate=Jt,Ft.directionalLightShadows.needsUpdate=Jt,Ft.pointLights.needsUpdate=Jt,Ft.pointLightShadows.needsUpdate=Jt,Ft.spotLights.needsUpdate=Jt,Ft.spotLightShadows.needsUpdate=Jt,Ft.rectAreaLights.needsUpdate=Jt,Ft.hemisphereLights.needsUpdate=Jt}function _u(Ft){return Ft.isMeshLambertMaterial||Ft.isMeshToonMaterial||Ft.isMeshPhongMaterial||Ft.isMeshStandardMaterial||Ft.isShadowMaterial||Ft.isShaderMaterial&&Ft.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(Ft,Jt,ne){let Qt=We.get(Ft);if(Qt.__autoAllocateDepthBuffer=Ft.resolveDepthBuffer===!1,Qt.__autoAllocateDepthBuffer===!1)Qt.__useRenderToTexture=!1;We.get(Ft.texture).__webglTexture=Jt,We.get(Ft.depthTexture).__webglTexture=Qt.__autoAllocateDepthBuffer?void 0:ne,Qt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(Ft,Jt){let ne=We.get(Ft);ne.__webglFramebuffer=Jt,ne.__useDefaultFramebuffer=Jt===void 0},this.setRenderTarget=function(Ft,Jt=0,ne=0){te=Ft,ae=Jt,le=ne;let Qt=null,jt=!1,Ce=!1;if(Ft){let Re=We.get(Ft);if(Re.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer($t.FRAMEBUFFER,Re.__webglFramebuffer),de.copy(Ft.viewport),ye.copy(Ft.scissor),Oe=Ft.scissorTest,Le.viewport(de),Le.scissor(ye),Le.setScissorTest(Oe),Me=-1;return}else if(Re.__webglFramebuffer===void 0)je.setupRenderTarget(Ft);else if(Re.__hasExternalTextures)je.rebindTextures(Ft,We.get(Ft.texture).__webglTexture,We.get(Ft.depthTexture).__webglTexture);else if(Ft.depthBuffer){let nn=Ft.depthTexture;if(Re.__boundDepthTexture!==nn){if(nn!==null&&We.has(nn)&&(Ft.width!==nn.image.width||Ft.height!==nn.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(Ft)}}let Pe=Ft.texture;if(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)Ce=!0;let Xe=We.get(Ft).__webglFramebuffer;if(Ft.isWebGLCubeRenderTarget){if(Array.isArray(Xe[Jt]))Qt=Xe[Jt][ne];else Qt=Xe[Jt];jt=!0}else if(Ft.samples>0&&je.useMultisampledRTT(Ft)===!1)Qt=We.get(Ft).__webglMultisampledFramebuffer;else if(Array.isArray(Xe))Qt=Xe[ne];else Qt=Xe;de.copy(Ft.viewport),ye.copy(Ft.scissor),Oe=Ft.scissorTest}else de.copy(rn).multiplyScalar(Ze).floor(),ye.copy($e).multiplyScalar(Ze).floor(),Oe=dn;if(ne!==0)Qt=ee;if(Le.bindFramebuffer($t.FRAMEBUFFER,Qt))Le.drawBuffers(Ft,Qt);if(Le.viewport(de),Le.scissor(ye),Le.setScissorTest(Oe),jt){let Re=We.get(Ft.texture);$t.framebufferTexture2D($t.FRAMEBUFFER,$t.COLOR_ATTACHMENT0,$t.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,Re.__webglTexture,ne)}else if(Ce){let Re=Jt;for(let Pe=0;Pe<Ft.textures.length;Pe++){let Xe=We.get(Ft.textures[Pe]);$t.framebufferTextureLayer($t.FRAMEBUFFER,$t.COLOR_ATTACHMENT0+Pe,Xe.__webglTexture,ne,Re)}}else if(Ft!==null&&ne!==0){let Re=We.get(Ft.texture);$t.framebufferTexture2D($t.FRAMEBUFFER,$t.COLOR_ATTACHMENT0,$t.TEXTURE_2D,Re.__webglTexture,ne)}Me=-1};function Il(Ft){let Jt=We.get(Ft);if(Jt.__readFormat!==Ft.format||Jt.__readType!==Ft.type)Jt.__readFormat=Ft.format,Jt.__readType=Ft.type,Jt.__formatReadable=En.textureFormatReadable(Ft.format),Jt.__typeReadable=En.textureTypeReadable(Ft.type);return Jt}if(this.readRenderTargetPixels=function(Ft,Jt,ne,Qt,jt,Ce,Ge,Re=0){if(!(Ft&&Ft.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=We.get(Ft).__webglFramebuffer;if(Ft.isWebGLCubeRenderTarget&&Ge!==void 0){if(Pe=Pe[Ge],Array.isArray(Pe))Pe=Pe[0]}if(Pe){Le.bindFramebuffer($t.FRAMEBUFFER,Pe);try{let Xe=Ft.textures[Re],{format:nn,type:un}=Xe;if(Ft.textures.length>1)$t.readBuffer($t.COLOR_ATTACHMENT0+Re);let ke=Il(Xe);if(ke.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Jt>=0&&Jt<=Ft.width-Qt&&(ne>=0&&ne<=Ft.height-jt))$t.readPixels(Jt,ne,Qt,jt,ue.convert(nn),ue.convert(un),Ce)}finally{let Xe=te!==null?We.get(te).__webglFramebuffer:null;Le.bindFramebuffer($t.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(Ft,Jt,ne,Qt,jt,Ce,Ge,Re=0){if(!(Ft&&Ft.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=We.get(Ft).__webglFramebuffer;if(Ft.isWebGLCubeRenderTarget&&Ge!==void 0){if(Pe=Pe[Ge],Array.isArray(Pe))Pe=Pe[0]}if(Pe)if(Jt>=0&&Jt<=Ft.width-Qt&&(ne>=0&&ne<=Ft.height-jt)){Le.bindFramebuffer($t.FRAMEBUFFER,Pe);let Xe=Ft.textures[Re],{format:nn,type:un}=Xe;if(Ft.textures.length>1)$t.readBuffer($t.COLOR_ATTACHMENT0+Re);let ke=Il(Xe);if(ke.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pn=$t.createBuffer();$t.bindBuffer($t.PIXEL_PACK_BUFFER,pn),$t.bufferData($t.PIXEL_PACK_BUFFER,Ce.byteLength,$t.STREAM_READ),$t.readPixels(Jt,ne,Qt,jt,ue.convert(nn),ue.convert(un),0),$t.bindBuffer($t.PIXEL_PACK_BUFFER,null);let wn=te!==null?We.get(te).__webglFramebuffer:null;Le.bindFramebuffer($t.FRAMEBUFFER,wn);let Mn=$t.fenceSync($t.SYNC_GPU_COMMANDS_COMPLETE,0);return $t.flush(),await dh($t,Mn,4),$t.bindBuffer($t.PIXEL_PACK_BUFFER,pn),$t.getBufferSubData($t.PIXEL_PACK_BUFFER,0,Ce),$t.bindBuffer($t.PIXEL_PACK_BUFFER,null),$t.deleteBuffer(pn),$t.deleteSync(Mn),Ce}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(Ft,Jt=null,ne=0){let Qt=Math.pow(2,-ne),jt=Math.floor(Ft.image.width*Qt),Ce=Math.floor(Ft.image.height*Qt),Ge=Jt!==null?Jt.x:0,Re=Jt!==null?Jt.y:0;je.setTexture2D(Ft,0),$t.copyTexSubImage2D($t.TEXTURE_2D,ne,0,0,Ge,Re,jt,Ce),Le.unbindTexture()},this.copyTextureToTexture=function(Ft,Jt,ne=null,Qt=null,jt=0,Ce=0){let Ge,Re,Pe,Xe,nn,un,ke,pn,wn,Mn=Ft.isCompressedTexture?Ft.mipmaps[Ce]:Ft.image;if(ne!==null)Ge=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,Pe=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,nn=ne.min.y,un=ne.isBox3?ne.min.z:0;else{let gn=Math.pow(2,-jt);if(Ge=Math.floor(Mn.width*gn),Re=Math.floor(Mn.height*gn),Ft.isDataArrayTexture)Pe=Mn.depth;else if(Ft.isData3DTexture)Pe=Math.floor(Mn.depth*gn);else Pe=1;Xe=0,nn=0,un=0}if(Qt!==null)ke=Qt.x,pn=Qt.y,wn=Qt.z;else ke=0,pn=0,wn=0;let Sn=ue.convert(Jt.format),zn=ue.convert(Jt.type),Fe;if(Jt.isData3DTexture)je.setTexture3D(Jt,0),Fe=$t.TEXTURE_3D;else if(Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)je.setTexture2DArray(Jt,0),Fe=$t.TEXTURE_2D_ARRAY;else je.setTexture2D(Jt,0),Fe=$t.TEXTURE_2D;Le.activeTexture($t.TEXTURE0),Le.pixelStorei($t.UNPACK_FLIP_Y_WEBGL,Jt.flipY),Le.pixelStorei($t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Jt.premultiplyAlpha),Le.pixelStorei($t.UNPACK_ALIGNMENT,Jt.unpackAlignment);let Xn=Le.getParameter($t.UNPACK_ROW_LENGTH),xn=Le.getParameter($t.UNPACK_IMAGE_HEIGHT),Di=Le.getParameter($t.UNPACK_SKIP_PIXELS),Gn=Le.getParameter($t.UNPACK_SKIP_ROWS),nr=Le.getParameter($t.UNPACK_SKIP_IMAGES);Le.pixelStorei($t.UNPACK_ROW_LENGTH,Mn.width),Le.pixelStorei($t.UNPACK_IMAGE_HEIGHT,Mn.height),Le.pixelStorei($t.UNPACK_SKIP_PIXELS,Xe),Le.pixelStorei($t.UNPACK_SKIP_ROWS,nn),Le.pixelStorei($t.UNPACK_SKIP_IMAGES,un);let pi=Ft.isDataArrayTexture||Ft.isData3DTexture,Ui=Jt.isDataArrayTexture||Jt.isData3DTexture;if(Ft.isDepthTexture){let gn=We.get(Ft),On=We.get(Jt),ti=We.get(gn.__renderTarget),Rn=We.get(On.__renderTarget);Le.bindFramebuffer($t.READ_FRAMEBUFFER,ti.__webglFramebuffer),Le.bindFramebuffer($t.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let ei=0;ei<Pe;ei++){if(pi)$t.framebufferTextureLayer($t.READ_FRAMEBUFFER,$t.COLOR_ATTACHMENT0,We.get(Ft).__webglTexture,jt,un+ei),$t.framebufferTextureLayer($t.DRAW_FRAMEBUFFER,$t.COLOR_ATTACHMENT0,We.get(Jt).__webglTexture,Ce,wn+ei);$t.blitFramebuffer(Xe,nn,Ge,Re,ke,pn,Ge,Re,$t.DEPTH_BUFFER_BIT,$t.NEAREST)}Le.bindFramebuffer($t.READ_FRAMEBUFFER,null),Le.bindFramebuffer($t.DRAW_FRAMEBUFFER,null)}else if(jt!==0||Ft.isRenderTargetTexture||We.has(Ft)){let gn=We.get(Ft),On=We.get(Jt);Le.bindFramebuffer($t.READ_FRAMEBUFFER,he),Le.bindFramebuffer($t.DRAW_FRAMEBUFFER,Xt);for(let ti=0;ti<Pe;ti++){if(pi)$t.framebufferTextureLayer($t.READ_FRAMEBUFFER,$t.COLOR_ATTACHMENT0,gn.__webglTexture,jt,un+ti);else $t.framebufferTexture2D($t.READ_FRAMEBUFFER,$t.COLOR_ATTACHMENT0,$t.TEXTURE_2D,gn.__webglTexture,jt);if(Ui)$t.framebufferTextureLayer($t.DRAW_FRAMEBUFFER,$t.COLOR_ATTACHMENT0,On.__webglTexture,Ce,wn+ti);else $t.framebufferTexture2D($t.DRAW_FRAMEBUFFER,$t.COLOR_ATTACHMENT0,$t.TEXTURE_2D,On.__webglTexture,Ce);if(jt!==0)$t.blitFramebuffer(Xe,nn,Ge,Re,ke,pn,Ge,Re,$t.COLOR_BUFFER_BIT,$t.NEAREST);else if(Ui)$t.copyTexSubImage3D(Fe,Ce,ke,pn,wn+ti,Xe,nn,Ge,Re);else $t.copyTexSubImage2D(Fe,Ce,ke,pn,Xe,nn,Ge,Re)}Le.bindFramebuffer($t.READ_FRAMEBUFFER,null),Le.bindFramebuffer($t.DRAW_FRAMEBUFFER,null)}else if(Ui)if(Ft.isDataTexture||Ft.isData3DTexture)$t.texSubImage3D(Fe,Ce,ke,pn,wn,Ge,Re,Pe,Sn,zn,Mn.data);else if(Jt.isCompressedArrayTexture)$t.compressedTexSubImage3D(Fe,Ce,ke,pn,wn,Ge,Re,Pe,Sn,Mn.data);else $t.texSubImage3D(Fe,Ce,ke,pn,wn,Ge,Re,Pe,Sn,zn,Mn);else if(Ft.isDataTexture)$t.texSubImage2D($t.TEXTURE_2D,Ce,ke,pn,Ge,Re,Sn,zn,Mn.data);else if(Ft.isCompressedTexture)$t.compressedTexSubImage2D($t.TEXTURE_2D,Ce,ke,pn,Mn.width,Mn.height,Sn,Mn.data);else $t.texSubImage2D($t.TEXTURE_2D,Ce,ke,pn,Ge,Re,Sn,zn,Mn);if(Le.pixelStorei($t.UNPACK_ROW_LENGTH,Xn),Le.pixelStorei($t.UNPACK_IMAGE_HEIGHT,xn),Le.pixelStorei($t.UNPACK_SKIP_PIXELS,Di),Le.pixelStorei($t.UNPACK_SKIP_ROWS,Gn),Le.pixelStorei($t.UNPACK_SKIP_IMAGES,nr),Ce===0&&Jt.generateMipmaps===!0&&Jt.mipmapsAutoUpdate===!0)$t.generateMipmap(Fe);Le.unbindTexture()},this.initRenderTarget=function(Ft){if(We.get(Ft).__webglFramebuffer===void 0)je.setupRenderTarget(Ft)},this.initTexture=function(Ft){if(Ft.isCubeTexture)je.setTextureCube(Ft,0);else if(Ft.isData3DTexture)je.setTexture3D(Ft,0);else if(Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)je.setTexture2DArray(Ft,0);else je.setTexture2D(Ft,0);Le.unbindTexture()},this.resetState=function(){ae=0,le=0,te=null,Le.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ho}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(W){this._outputColorSpace=W;let q=this.getContext();q.drawingBufferColorSpace=r._getDrawingBufferColorSpace(W),q.unpackColorSpace=r._getUnpackColorSpace()}}class Ml extends k{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let W=new S;W.deleteAttribute("uv");let q=new v({side:Wn}),Y=new v,Z=new D(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let tt=new i(W,q);tt.position.set(-0.757,13.219,0.717),tt.scale.set(31.713,28.305,28.591),this.add(tt);let at=new V(W,Y,6),Mt=new h;Mt.position.set(-10.906,2.009,1.846),Mt.rotation.set(0,-0.195,0),Mt.scale.set(2.328,7.905,4.651),Mt.updateMatrix(),at.setMatrixAt(0,Mt.matrix),Mt.position.set(-5.607,-0.754,-0.758),Mt.rotation.set(0,0.994,0),Mt.scale.set(1.97,1.534,3.955),Mt.updateMatrix(),at.setMatrixAt(1,Mt.matrix),Mt.position.set(6.167,0.857,7.803),Mt.rotation.set(0,0.561,0),Mt.scale.set(3.927,6.285,3.687),Mt.updateMatrix(),at.setMatrixAt(2,Mt.matrix),Mt.position.set(-2.017,0.018,6.124),Mt.rotation.set(0,0.333,0),Mt.scale.set(2.002,4.566,2.064),Mt.updateMatrix(),at.setMatrixAt(3,Mt.matrix),Mt.position.set(2.291,-0.756,-2.621),Mt.rotation.set(0,-0.286,0),Mt.scale.set(1.546,1.552,1.496),Mt.updateMatrix(),at.setMatrixAt(4,Mt.matrix),Mt.position.set(-2.193,-0.369,-5.547),Mt.rotation.set(0,0.516,0),Mt.scale.set(3.875,3.487,2.986),Mt.updateMatrix(),at.setMatrixAt(5,Mt.matrix),this.add(at);let bt=new i(W,bs(50));bt.position.set(-16.116,14.37,8.208),bt.scale.set(0.1,2.428,2.739),this.add(bt);let Et=new i(W,bs(50));Et.position.set(-16.109,18.021,-8.207),Et.scale.set(0.1,2.425,2.751),this.add(Et);let At=new i(W,bs(17));At.position.set(14.904,12.198,-1.832),At.scale.set(0.15,4.265,6.331),this.add(At);let Ct=new i(W,bs(43));Ct.position.set(-0.462,8.89,14.52),Ct.scale.set(4.38,5.441,0.088),this.add(Ct);let It=new i(W,bs(20));It.position.set(3.235,11.486,-12.541),It.scale.set(2.5,2,0.1),this.add(It);let Rt=new i(W,bs(100));Rt.position.set(0,20,0),Rt.scale.set(1,0.1,1),this.add(Rt)}dispose(){let W=new Set;this.traverse((q)=>{if(q.isMesh)W.add(q.geometry),W.add(q.material)});for(let q of W)q.dispose()}}function bs(W){return new aa({color:0,emissive:16777215,emissiveIntensity:W})}var c={graphite:new n("#0f141a"),steel:new n("#1d252e"),zirconia:new n("#eef0ee"),uv:new n("#7a5cff"),uvHot:new n("#b8a6ff"),ice:new n("#bcd4ff"),amber:new n("#ffb547"),resin:new n("#e9e1cf")};function Tt(){let W=matchMedia("(max-width: 820px), (pointer: coarse)").matches,q=navigator.hardwareConcurrency||4,Y=navigator.deviceMemory||4;if(W||q<=4||Y<=4)return"low";return"high"}function rt(W,{quality:q="high",alpha:Y=!1}={}){let Z=new Sl({canvas:W,antialias:q==="high",alpha:Y,powerPreference:"high-performance",stencil:!1});return Z.setPixelRatio(Math.min(window.devicePixelRatio||1,q==="high"?1.75:1.35)),Z.toneMapping=J,Z.toneMappingExposure=1,Z.outputColorSpace=z,Z}function ot(W){let q=new Ss(W),Y=q.fromScene(new Ml,0.04).texture;return q.dispose(),Y}function w({y:W=0,dir:q=1,glow:Y=c.uv,glowAmount:Z=2.5,width:tt=0.05,cap:at=c.uvHot,capMix:Mt=1}={}){return{uCutY:{value:W},uCutDir:{value:q},uGlowColor:{value:Y.clone()},uGlow:{value:Z},uGlowWidth:{value:tt},uCapColor:{value:at.clone().multiplyScalar(2.2)},uCapMix:{value:Mt}}}function N(W,{cut:q=null,char:Y=null,layers:Z=null}={}){let tt=[];if(q)tt.push("CUT");if(Y)tt.push("CHAR");if(Z)tt.push("LAYERS");let at=tt.join("_");if(W.customProgramCacheKey=()=>"ito_"+at,q)W.side=p;return W.onBeforeCompile=(Mt)=>{Object.assign(Mt.uniforms,q||{},Y||{},Z||{});let bt=tt.map((Et)=>`#define ${Et}`).join(`
`)+`
`;Mt.vertexShader=Mt.vertexShader.replace("#include <common>",`${bt}#include <common>
varying vec3 vWPos;
varying vec3 vLPos;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 _wp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          _wp = instanceMatrix * _wp;
        #endif
        vLPos = transformed;
        vWPos = (modelMatrix * _wp).xyz;`),Mt.fragmentShader=Mt.fragmentShader.replace("#include <common>",`${bt}#include <common>
        varying vec3 vWPos;
        varying vec3 vLPos;
        #ifdef CUT
          uniform float uCutY; uniform float uCutDir; uniform vec3 uGlowColor; uniform float uGlow; uniform float uGlowWidth; uniform vec3 uCapColor; uniform float uCapMix;
        #endif
        #ifdef CHAR
          uniform float uChar; uniform vec3 uMono;
        #endif
        #ifdef LAYERS
          uniform float uLayerFreq; uniform float uLayerAmt;
        #endif`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        #ifdef CUT
          float _cd = (vWPos.y - uCutY) * uCutDir;
          if (_cd < 0.0) discard;
        #endif`).replace("#include <color_fragment>",`#include <color_fragment>
        #ifdef CHAR
          diffuseColor.rgb = mix(uMono, diffuseColor.rgb, uChar);
        #endif
        #ifdef LAYERS
          float _l = fract(vLPos.y * uLayerFreq);
          diffuseColor.rgb *= 1.0 - uLayerAmt * (smoothstep(0.0, 0.18, _l) * smoothstep(0.42, 0.24, _l));
        #endif`).replace("#include <opaque_fragment>",`#ifdef CUT
          float _g = 1.0 - smoothstep(0.0, uGlowWidth, _cd);
          outgoingLight += uGlowColor * _g * uGlow;
          if (!gl_FrontFacing) outgoingLight = mix(outgoingLight, uCapColor, uCapMix);
        #endif
        #include <opaque_fragment>`)},W.needsUpdate=!0,W}function St({color:W=c.ice,rim:q=c.uvHot,opacity:Y=1}={}){return new d({transparent:!0,depthWrite:!1,blending:_,side:p,uniforms:{uColor:{value:W.clone()},uRim:{value:q.clone()},uOpacity:{value:Y},uTime:{value:0},uReveal:{value:1},uRevealY:{value:new e(-3,3)}},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        #ifdef USE_INSTANCING
          wp = modelMatrix * instanceMatrix * vec4(position,1.0);
        #endif
        vW = wp.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        vV = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uRim; uniform float uOpacity; uniform float uTime; uniform float uReveal; uniform vec2 uRevealY;
      varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){
        float ry = mix(uRevealY.y, uRevealY.x, uReveal);
        if (vW.y < ry) discard;
        float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
        float scan = 0.5 + 0.5 * sin(vW.y * 46.0 - uTime * 3.0);
        float edge = 1.0 - smoothstep(0.0, 0.12, vW.y - ry);
        vec3 col = uColor * (0.10 + 0.06 * scan) + uRim * f * 0.9 + uRim * edge * 1.6;
        float a = (0.18 + f * 0.75 + edge) * uOpacity;
        gl_FragColor = vec4(col * a, a);
      }`})}var P=(W)=>Math.min(1,Math.max(0,W)),f=(W,q,Y)=>P((W-q)/(Y-q)),I=(W)=>W<0.5?4*W*W*W:1-Math.pow(-2*W+2,3)/2,yt=(W)=>1-Math.pow(1-W,3),O=(W,q,Y,Z)=>W+(q-W)*(1-Math.exp(-Y*Z));
export{p,B,_,lt,ct,ht,ut,ft,dt,J,x,z,a,e,t,r,m,o,h,u,n,pt,k,T,E,s,L,l,y,i,V,et,K,mt,Q,S,nt,M,gt,it,U,j,A,C,_t,b,G,X,H,d,xt,v,R,g,D,st,F,vt,c,Tt,rt,ot,w,N,St,P,f,I,yt,O};
