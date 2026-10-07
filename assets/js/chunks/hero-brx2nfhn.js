import{p,B,_,lt,ct,ht,ut,ft,dt,J,x,z,a,e,t,r,m,h,u,n,pt,k,s,l,y,i,V,et,K,mt,Q,S,nt,M,gt,it,U,A,C,b,G,X,H,d,xt,v,R,g,D,st,F,vt,c,rt,ot,w,N,St,P,f,I,yt,O}from"./main-fksgy1v2.js";import{W,q,Y,Mt,Z,bt,wt}from"./main-rk2haps4.js";var se={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Yt{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var be=new st(-1,1,1,-1,0,1);class we extends l{constructor(){super();this.setAttribute("position",new s([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new s([0,2,0,0,2,0],2))}}var Ce=new we;class Jt{constructor(o){this._mesh=new i(Ce,o)}dispose(){this._mesh.geometry.dispose()}render(o){o.render(this._mesh,be)}get material(){return this._mesh.material}set material(o){this._mesh.material=o}}class pe extends Yt{constructor(o,T="tDiffuse"){super();if(this.textureID=T,this.uniforms=null,this.material=null,o instanceof d)this.uniforms=o.uniforms,this.material=o;else if(o)this.uniforms=H.clone(o.uniforms),this.material=new d({name:o.name!==void 0?o.name:"unspecified",defines:Object.assign({},o.defines),uniforms:this.uniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});this._fsQuad=new Jt(this.material)}render(o,T,E){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=E.texture;if(this._fsQuad.material=this.material,this.renderToScreen)o.setRenderTarget(null),this._fsQuad.render(o);else{if(o.setRenderTarget(T),this.clear)o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil);this._fsQuad.render(o)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class he extends Yt{constructor(o,T){super();this.scene=o,this.camera=T,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(o,T,E){let tt=o.getContext(),j=o.state;j.buffers.color.setMask(!1),j.buffers.depth.setMask(!1),j.buffers.color.setLocked(!0),j.buffers.depth.setLocked(!0);let at,Ct;if(this.inverse)at=0,Ct=1;else at=1,Ct=0;if(j.buffers.stencil.setTest(!0),j.buffers.stencil.setOp(tt.REPLACE,tt.REPLACE,tt.REPLACE),j.buffers.stencil.setFunc(tt.ALWAYS,at,4294967295),j.buffers.stencil.setClear(Ct),j.buffers.stencil.setLocked(!0),o.setRenderTarget(E),this.clear)o.clear();if(o.render(this.scene,this.camera),o.setRenderTarget(T),this.clear)o.clear();o.render(this.scene,this.camera),j.buffers.color.setLocked(!1),j.buffers.depth.setLocked(!1),j.buffers.color.setMask(!0),j.buffers.depth.setMask(!0),j.buffers.stencil.setLocked(!1),j.buffers.stencil.setFunc(tt.EQUAL,1,4294967295),j.buffers.stencil.setOp(tt.KEEP,tt.KEEP,tt.KEEP),j.buffers.stencil.setLocked(!0)}}class fe extends Yt{constructor(){super();this.needsSwap=!1}render(o){o.state.buffers.stencil.setLocked(!1),o.state.buffers.stencil.setTest(!1)}}class de{constructor(o,T){if(this.renderer=o,this._pixelRatio=o.getPixelRatio(),T===void 0){let E=o.getSize(new e);this._width=E.width,this._height=E.height,T=new m(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:x}),T.texture.name="EffectComposer.rt1"}else this._width=T.width,this._height=T.height;this.renderTarget1=T,this.renderTarget2=T.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pe(se),this.copyPass.material.blending=B,this.timer=new vt}swapBuffers(){let o=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=o}addPass(o){this.passes.push(o),o.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(o,T){this.passes.splice(T,0,o),o.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(o){let T=this.passes.indexOf(o);if(T!==-1)this.passes.splice(T,1)}isLastEnabledPass(o){for(let T=o+1;T<this.passes.length;T++)if(this.passes[T].enabled)return!1;return!0}render(o){if(this.timer.update(),o===void 0)o=this.timer.getDelta();let T=this.renderer.getRenderTarget(),E=!1;for(let tt=0,j=this.passes.length;tt<j;tt++){let at=this.passes[tt];if(at.enabled===!1)continue;if(at.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(tt),at.render(this.renderer,this.writeBuffer,this.readBuffer,o,E),at.needsSwap){if(E){let Ct=this.renderer.getContext(),L=this.renderer.state.buffers.stencil;L.setFunc(Ct.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,o),L.setFunc(Ct.EQUAL,1,4294967295)}this.swapBuffers()}if(he!==void 0){if(at instanceof he)E=!0;else if(at instanceof fe)E=!1}}this.renderer.setRenderTarget(T)}reset(o){if(o===void 0){let T=this.renderer.getSize(new e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=T.width,this._height=T.height,o=this.renderTarget1.clone(),o.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=o,this.renderTarget2=o.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(o,T){this._width=o,this._height=T;let E=this._width*this._pixelRatio,tt=this._height*this._pixelRatio;this.renderTarget1.setSize(E,tt),this.renderTarget2.setSize(E,tt);for(let j=0;j<this.passes.length;j++)this.passes[j].setSize(E,tt)}setPixelRatio(o){this._pixelRatio=o,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class me extends Yt{constructor(o,T,E=null,tt=null,j=null){super();this.scene=o,this.camera=T,this.overrideMaterial=E,this.clearColor=tt,this.clearAlpha=j,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new n}render(o,T,E){let tt=o.autoClear;o.autoClear=!1;let j,at;if(this.overrideMaterial!==null)at=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)o.getClearColor(this._oldClearColor),o.setClearColor(this.clearColor,o.getClearAlpha());if(this.clearAlpha!==null)j=o.getClearAlpha(),o.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)o.clearDepth();if(o.setRenderTarget(this.renderToScreen?null:E),this.clear===!0)o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil);if(o.render(this.scene,this.camera),this.clearColor!==null)o.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)o.setClearAlpha(j);if(this.overrideMaterial!==null)this.scene.overrideMaterial=at;o.autoClear=tt}}var Me={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new n(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $t extends Yt{constructor(o,T=1,E,tt){super();this.strength=T,this.radius=E,this.threshold=tt,this.resolution=o!==void 0?new e(o.x,o.y):new e(256,256),this.clearColor=new n(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let j=Math.round(this.resolution.x/2),at=Math.round(this.resolution.y/2);this.renderTargetBright=new m(j,at,{type:x,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let Pt=0;Pt<this.nMips;Pt++){let At=new m(j,at,{type:x,depthBuffer:!1});At.texture.name="UnrealBloomPass.h"+Pt,At.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(At);let Rt=new m(j,at,{type:x,depthBuffer:!1});Rt.texture.name="UnrealBloomPass.v"+Pt,Rt.texture.generateMipmaps=!1,this.renderTargetsVertical.push(Rt),j=Math.round(j/2),at=Math.round(at/2)}let Ct=Me;this.highPassUniforms=H.clone(Ct.uniforms),this.highPassUniforms.luminosityThreshold.value=tt,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new d({uniforms:this.highPassUniforms,vertexShader:Ct.vertexShader,fragmentShader:Ct.fragmentShader}),this.separableBlurMaterials=[];let L=[6,10,14,18,22];j=Math.round(this.resolution.x/2),at=Math.round(this.resolution.y/2);for(let Pt=0;Pt<this.nMips;Pt++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(L[Pt])),this.separableBlurMaterials[Pt].uniforms.invSize.value=new e(1/j,1/at),j=Math.round(j/2),at=Math.round(at/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=T,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let Et=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=Et,this.bloomTintColors=[new t(1,1,1),new t(1,1,1),new t(1,1,1),new t(1,1,1),new t(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=H.clone(se.uniforms),this.blendMaterial=new d({uniforms:this.copyUniforms,vertexShader:se.vertexShader,fragmentShader:se.fragmentShader,premultipliedAlpha:!0,blending:_,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new n,this._oldClearAlpha=1,this._basic=new y,this._fsQuad=new Jt(null)}dispose(){for(let o=0;o<this.renderTargetsHorizontal.length;o++)this.renderTargetsHorizontal[o].dispose();for(let o=0;o<this.renderTargetsVertical.length;o++)this.renderTargetsVertical[o].dispose();this.renderTargetBright.dispose();for(let o=0;o<this.separableBlurMaterials.length;o++)this.separableBlurMaterials[o].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(o,T){let E=Math.round(o/2),tt=Math.round(T/2);this.renderTargetBright.setSize(E,tt);for(let j=0;j<this.nMips;j++)this.renderTargetsHorizontal[j].setSize(E,tt),this.renderTargetsVertical[j].setSize(E,tt),this.separableBlurMaterials[j].uniforms.invSize.value=new e(1/E,1/tt),E=Math.round(E/2),tt=Math.round(tt/2)}render(o,T,E,tt,j){o.getClearColor(this._oldClearColor),this._oldClearAlpha=o.getClearAlpha();let at=o.autoClear;if(o.autoClear=!1,o.setClearColor(this.clearColor,0),j)o.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=E.texture,o.setRenderTarget(null),o.clear(),this._fsQuad.render(o);this.highPassUniforms.tDiffuse.value=E.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,o.setRenderTarget(this.renderTargetBright),o.clear(),this._fsQuad.render(o);let Ct=this.renderTargetBright;for(let L=0;L<this.nMips;L++)this._fsQuad.material=this.separableBlurMaterials[L],this.separableBlurMaterials[L].uniforms.colorTexture.value=Ct.texture,this.separableBlurMaterials[L].uniforms.direction.value=$t.BlurDirectionX,o.setRenderTarget(this.renderTargetsHorizontal[L]),o.clear(),this._fsQuad.render(o),this.separableBlurMaterials[L].uniforms.colorTexture.value=this.renderTargetsHorizontal[L].texture,this.separableBlurMaterials[L].uniforms.direction.value=$t.BlurDirectionY,o.setRenderTarget(this.renderTargetsVertical[L]),o.clear(),this._fsQuad.render(o),Ct=this.renderTargetsVertical[L];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,o.setRenderTarget(this.renderTargetsHorizontal[0]),o.clear(),this._fsQuad.render(o),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,j)o.state.buffers.stencil.setTest(!0);if(this.renderToScreen)o.setRenderTarget(null),this._fsQuad.render(o);else o.setRenderTarget(E),this._fsQuad.render(o);o.setClearColor(this._oldClearColor,this._oldClearAlpha),o.autoClear=at}_getSeparableBlurMaterial(o){let T=[],E=o/3;for(let at=0;at<o;at++)T.push(0.39894*Math.exp(-0.5*at*at/(E*E))/E);let tt=[],j=[];for(let at=1;at<o;at+=2){let Ct=T[at],L=at+1<o?T[at+1]:0,Et=Ct+L;tt.push((at*Ct+(at+1)*L)/Et),j.push(Et)}return new d({defines:{KERNEL_PAIRS:tt.length},uniforms:{colorTexture:{value:null},invSize:{value:new e(0.5,0.5)},direction:{value:new e(0.5,0.5)},centerWeight:{value:T[0]},gaussianOffsets:{value:tt},gaussianWeights:{value:j}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(o){return new d({defines:{NUM_MIPS:o},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}$t.BlurDirectionX=new e(1,0);$t.BlurDirectionY=new e(0,1);var oe={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ge extends Yt{constructor(){super();this.isOutputPass=!0,this.uniforms=H.clone(oe.uniforms),this.material=new xt({name:oe.name,uniforms:this.uniforms,vertexShader:oe.vertexShader,fragmentShader:oe.fragmentShader}),this._fsQuad=new Jt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(o,T,E){if(this.uniforms.tDiffuse.value=E.texture,this.uniforms.toneMappingExposure.value=o.toneMappingExposure,this._outputColorSpace!==o.outputColorSpace||this._toneMapping!==o.toneMapping){if(this._outputColorSpace=o.outputColorSpace,this._toneMapping=o.toneMapping,this.material.defines={},r.getTransfer(this._outputColorSpace)===a)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===lt)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===ct)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===ht)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===ut)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===dt)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===J)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ft)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)o.setRenderTarget(null),this._fsQuad.render(o);else{if(o.setRenderTarget(T),this.clear)o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil);this._fsQuad.render(o)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var _t={scanEnd:0.14,cadEnd:0.28,matEnd:0.315,descendEnd:0.345,printEnd:0.8,liftEnd:0.86,supportsEnd:0.9,presentEnd:0.96},ve=[_t.scanEnd,_t.cadEnd,_t.liftEnd],xe=0.75,ie=-0.07,te=5.2,ae=0.9,Ft={w:10,d:7.4,h:1.6},_e=0.005;function ee(o,T,E,tt=0.12,j=0.04){let at=new A,Ct=-o/2+tt,L=-E/2+tt,Et=o-2*tt,Pt=E-2*tt;at.moveTo(Ct,L),at.lineTo(Ct+Et,L),at.quadraticCurveTo(Ct+Et+tt,L,Ct+Et+tt,L+tt),at.lineTo(Ct+Et+tt,L+Pt),at.quadraticCurveTo(Ct+Et+tt,L+Pt+tt,Ct+Et,L+Pt+tt),at.lineTo(Ct,L+Pt+tt),at.quadraticCurveTo(Ct-tt,L+Pt+tt,Ct-tt,L+Pt),at.lineTo(Ct-tt,L+tt),at.quadraticCurveTo(Ct-tt,L,Ct,L);let At=new C(at,{depth:Math.max(0.001,T-j*2),bevelEnabled:!0,bevelThickness:j,bevelSize:j,bevelSegments:3,curveSegments:6});At.rotateX(-Math.PI/2),At.translate(0,j,0),At.computeBoundingBox();let Rt=At.boundingBox;return At.translate(0,-(Rt.min.y+Rt.max.y)/2,0),At}class ye{constructor(o,{quality:T="high"}={}){if(this.canvas=o,this.quality=T,this.p=0,this.targetP=0,this.time=0,this.pointer=new e,this.pointerS=new e,this.visible=!0,this.shift={x:0,y:0},this.readout={step:0,layer:0,layers:0,z:0,points:0,supports:0,progress:0},this.renderer=rt(o,{quality:T}),this.scene=new k,this.scene.background=c.graphite.clone(),this.scene.fog=new pt(c.graphite.clone(),16,38),this.scene.environment=ot(this.renderer),this.scene.environmentIntensity=0.42,this.camera=new g(34,1,0.1,120),this._buildLights(),this._buildPart(),this._buildHolo(),this._buildPrinter(),this._buildExtras(),this._buildCameraPath(),T==="high")this.composer=new de(this.renderer),this.composer.addPass(new me(this.scene,this.camera)),this.bloom=new $t(new e(512,512),0.42,0.5,0.9),this.composer.addPass(this.bloom),this.composer.addPass(new ge);this.resize()}_buildLights(){let o=new F("#ffffff",1.15);o.position.set(5,11,7);let T=new F("#cfd6e2",0.9);T.position.set(-7,5,-8);let E=new F("#ffe8d2",0.18);E.position.set(-6,-2,6),this.scene.add(o,T,E),this.uvLight=new D(c.uv,0,9,1.6),this.uvLight.position.set(0,0.3,0.3),this.scanLight=new D("#fff2dc",0,4,2),this.cureLight=new D(c.amber,0,9,1.5),this.cureLight.position.set(0,2.2,1.2),this.scene.add(this.uvLight,this.scanLight,this.cureLight)}_buildPart(){let o=this.quality==="high"?48:32,T=this.quality==="high"?[4,16,14]:[3,12,10],{geometry:E,layout:tt}=q({down:!0,segU:o,rows:T}),j=Y({layout:tt,down:!0,a:0.46,bTop:0.34,cy:0.18,segS:this.quality==="high"?220:140}),at=j.cy+j.bTop;this.gumOffsetY=ie-xe-at,this.layout=tt,this.archCurve=j.curve,this.zCentre=-0.35,E.translate(0,this.gumOffsetY,this.zCentre),j.geometry.translate(0,this.gumOffsetY,this.zCentre),this.teethGeo=E,this.gumGeo=j.geometry,E.computeBoundingBox(),this.partBottom=E.boundingBox.min.y,this.partDepth=-this.partBottom+0.02,this.layers=Math.round(this.partDepth/_e),this.cutPart=w({y:0,dir:1,width:0.035}),this.cutSupports=w({y:0,dir:1,width:0.035}),this.char={uChar:{value:0},uMono:{value:c.resin.clone()}},this.teethMat=N(new R({vertexColors:!0,roughness:0.2,clearcoat:0.8,clearcoatRoughness:0.12,sheen:0}),{cut:this.cutPart,char:this.char}),this.gumMat=N(new R({vertexColors:!0,roughness:0.26,clearcoat:0.6,clearcoatRoughness:0.2}),{cut:this.cutPart,char:this.char}),this.supportMat=N(new R({color:c.resin,roughness:0.18,clearcoat:1,clearcoatRoughness:0.1}),{cut:this.cutSupports}),this.part=new u,this.teeth=new i(E,this.teethMat),this.gum=new i(j.geometry,this.gumMat),this.part.add(this.teeth,this.gum);let Ct=W(1,0.02),L=Mt({curve:Ct,count:this.quality==="high"?64:44,rows:[-0.22,0,0.22],topY:at});this.supportCount=L.length;let Et=bt(0.02);this.supports=new V(Et,this.supportMat,L.length),this.supportsHolo=new V(Et,new y({color:c.amber,transparent:!0,opacity:0.5,depthWrite:!1}),L.length),this.supportBases=L.map((Tt)=>new t(Tt.x,Tt.y+this.gumOffsetY,Tt.z+this.zCentre));let Pt=new h;this.supportBases.forEach((Tt,Ot)=>{Pt.position.copy(Tt),Pt.scale.set(1,ie-Tt.y,1),Pt.updateMatrix(),this.supports.setMatrixAt(Ot,Pt.matrix),this.supportsHolo.setMatrixAt(Ot,Pt.matrix)}),this.part.add(this.supports);let At=Z({curve:Ct,inner:0.5,outer:0.5,depth:0.04,bevel:0.015});At.translate(0,ie-0.005,this.zCentre),this.raft=new i(At,this.supportMat),this.part.add(this.raft);let Rt=E.attributes.position,It=[];for(let Tt=0;Tt<Rt.count;Tt++)if(Rt.getY(Tt)<this.partBottom+0.05)It.push(new t(Rt.getX(Tt),Rt.getY(Tt),Rt.getZ(Tt)));It.sort((Tt,Ot)=>Tt.x-Ot.x),this.dripAnchors=[];let kt=Math.max(1,Math.floor(It.length/28));for(let Tt=0;Tt<It.length;Tt+=kt)this.dripAnchors.push(It[Tt]);this.scene.add(this.part)}_buildHolo(){this.holo=new u,this.holo.position.y=te,this.holoMat=St({}),this.holoTeeth=new i(this.teethGeo,this.holoMat),this.holoGum=new i(this.gumGeo,this.holoMat),this.holo.add(this.holoTeeth,this.holoGum,this.supportsHolo);let o=this.quality==="high"?26000:12000;this.pointCount=o;let{positions:T,colors:E}=wt([this.teethGeo,this.gumGeo],o),tt=[],j=240;for(let Bt=0;Bt<=j;Bt++){let Qt=this.archCurve.getPointAt(Bt/j);tt.push([Qt.x,Qt.z+this.zCentre])}let at=new Float32Array(o),Ct=new Float32Array(o*3);for(let Bt=0;Bt<o;Bt++){let Qt=T[Bt*3],Nt=T[Bt*3+2],Gt=1e9,zt=0;for(let Lt=0;Lt<=j;Lt+=2){let Zt=tt[Lt][0]-Qt,Kt=tt[Lt][1]-Nt,re=Zt*Zt+Kt*Kt;if(re<Gt)Gt=re,zt=Lt}at[Bt]=zt/j,Ct[Bt*3]=Math.random()*2-1,Ct[Bt*3+1]=Math.random()*2-1,Ct[Bt*3+2]=Math.random()*2-1}let L=new l;L.setAttribute("position",new s(T,3)),L.setAttribute("color",new s(E,3)),L.setAttribute("aDelay",new s(at,1)),L.setAttribute("aRand",new s(Ct,3)),this.pointsMat=new d({transparent:!0,depthWrite:!1,blending:_,vertexColors:!0,uniforms:{uScan:{value:0},uFade:{value:1},uSize:{value:2.4*this.renderer.getPixelRatio()},uTime:{value:0},uFlash:{value:c.ice.clone()}},vertexShader:`
        attribute float aDelay; attribute vec3 aRand;
        uniform float uScan; uniform float uSize; uniform float uTime; uniform float uFade;
        varying vec3 vCol; varying float vA; varying float vFlash;
        void main(){
          float appear = smoothstep(aDelay - 0.035, aDelay + 0.005, uScan * 1.04);
          vec3 p = position + aRand * (1.0 - appear) * 0.22;
          p += aRand * 0.004 * sin(uTime * 2.0 + aDelay * 40.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (0.6 + 0.6 * appear) * (8.0 / -mv.z);
          vCol = color;
          vFlash = 1.0 - smoothstep(0.0, 0.06, uScan * 1.04 - aDelay);
          vA = appear * uFade;
        }`,fragmentShader:`
        uniform vec3 uFlash; varying vec3 vCol; varying float vA; varying float vFlash;
        void main(){
          vec2 c = gl_PointCoord - 0.5; float d = dot(c,c);
          if (d > 0.25) discard;
          float a = smoothstep(0.25, 0.0, d) * vA;
          vec3 col = mix(vCol, uFlash * 1.6, vFlash * 0.85);
          gl_FragColor = vec4(col * a, a);
        }`}),this.points=new mt(L,this.pointsMat),this.points.frustumCulled=!1,this.holo.add(this.points);let Et=new d({transparent:!0,depthWrite:!1,blending:_,side:p,uniforms:{uOpacity:{value:0},uColor:{value:c.ice.clone()}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying vec2 vUv;
        float line(float x, float w){ float f = abs(fract(x) - 0.5); return smoothstep(w, 0.0, 0.5 - f); }
        void main(){
          vec2 g = vUv * vec2(18.0, 13.0);
          float l = max(line(g.x, 0.04), line(g.y, 0.04));
          vec2 g2 = vUv * vec2(3.0, 2.0);
          float L = max(line(g2.x, 0.012), line(g2.y, 0.012));
          float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x) * smoothstep(0.0, 0.08, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
          float a = (l * 0.25 + L * 0.5) * edge * uOpacity;
          gl_FragColor = vec4(uColor * a, a);
        }`});this.gridMat=Et;let Pt=new i(new b(9,6.6),Et);Pt.rotation.x=Math.PI/2,Pt.position.y=0.002,this.holo.add(Pt);let At=[],Rt=4.5,It=3.3,kt=0,Tt=this.partBottom-0.15,Ot=0.6;for(let Bt of[-1,1])for(let Qt of[-1,1])for(let Nt of[kt,Tt]){let Gt=Bt*Rt,zt=Qt*It;At.push(Gt,Nt,zt,Gt-Bt*Ot,Nt,zt),At.push(Gt,Nt,zt,Gt,Nt,zt-Qt*Ot),At.push(Gt,Nt,zt,Gt,Nt+(Nt===kt?-Ot:Ot),zt)}let Dt=new l;Dt.setAttribute("position",new s(At,3)),this.bracketMat=new et({color:c.ice,transparent:!0,opacity:0}),this.holo.add(new K(Dt,this.bracketMat));let Ut=new u,jt=new i(new nt(0.15,1.5,6,16),new v({color:"#1c1c1f",metalness:0.6,roughness:0.35}));jt.rotation.x=Math.PI/2,jt.position.set(0,-0.1,0.95);let Ht=new i(new nt(0.15,0.45,6,12),new v({color:"#d9dee3",metalness:0.3,roughness:0.35}));Ht.rotation.x=Math.PI/2,Ht.position.set(0,0,0.05);let Vt=new i(new b(0.16,0.32),new y({color:c.ice}));Vt.rotation.x=-Math.PI/2,Vt.position.set(0,0.18,0);let Wt=new i(new gt(0.62,0.9,32,1,!0),new y({color:c.ice,transparent:!0,opacity:0.12,blending:_,depthWrite:!1,side:p}));Wt.position.y=0.62,Wt.rotation.x=Math.PI,Ut.add(jt,Ht,Vt,Wt),Ut.scale.setScalar(0.9),this.scanner=Ut,this.scannerMats=[jt.material,Ht.material,Vt.material,Wt.material],this.scannerMats.forEach((Bt)=>Bt.transparent=!0),this.scene.add(Ut),this.scene.add(this.holo)}_buildPrinter(){this.printer=new u,this.cutPrinter=w({y:-3,dir:-1,width:0.12,glowAmount:3,capMix:0.85});let o=(zt)=>N(zt,{cut:this.cutPrinter}),T=o(new v({color:"#141416",metalness:0.55,roughness:0.42})),E=o(new v({color:"#1f1f22",metalness:0.7,roughness:0.3})),tt=o(new v({color:"#b9bec4",metalness:0.92,roughness:0.4})),j=o(new v({color:"#8d949b",metalness:1,roughness:0.38})),at=o(new et({color:"#6b5228",transparent:!0,opacity:0.7}));this.edgeMat=at;let Ct=(zt)=>{let Lt=new K(new it(zt.geometry,35),at);zt.add(Lt)},L=new i(ee(13,2.5,10.4,0.5,0.08),T);L.position.y=-1.32,Ct(L),this.printer.add(L),this.sliceCanvas=document.createElement("canvas"),this.sliceCanvas.width=420,this.sliceCanvas.height=310,this.sliceCtx=this.sliceCanvas.getContext("2d"),this.sliceTex=new Q(this.sliceCanvas),this.sliceTex.colorSpace=z,this.lcdMat=o(new v({color:"#05070a",roughness:0.15,metalness:0.2,emissive:new n("#ffffff"),emissiveMap:this.sliceTex,emissiveIntensity:0}));let Et=new i(new b(Ft.w,Ft.d),this.lcdMat);Et.rotation.x=-Math.PI/2,Et.position.y=-0.055,this.printer.add(Et);let Pt=new u,At=new R({color:"#dfe7ee",transparent:!0,opacity:0.12,roughness:0.05,metalness:0,clearcoat:1,depthWrite:!1});this.glassMat=At,N(At,{cut:this.cutPrinter});let Rt=0.08,It=new S(Ft.w+Rt*2,Ft.h,Rt),kt=new S(Rt,Ft.h,Ft.d);[[It,0,Ft.d/2+Rt/2],[It,0,-Ft.d/2-Rt/2],[kt,Ft.w/2+Rt/2,0],[kt,-Ft.w/2-Rt/2,0]].forEach(([zt,Lt,Zt])=>{let Kt=new i(zt,At);Kt.position.set(Lt,Ft.h/2,Zt),Kt.renderOrder=3,Pt.add(Kt)});let Tt=new S(Ft.w+0.5,0.12,Ft.d+0.5),Ot=new K(new it(Tt),at);Ot.position.y=Ft.h,Pt.add(Ot);let Dt=new K(new it(new S(Ft.w+0.16,Ft.h,Ft.d+0.16)),at);Dt.position.y=Ft.h/2,Pt.add(Dt),[-1,1].forEach((zt)=>{let Lt=new i(ee(0.9,0.45,2.2,0.12,0.03),E);Lt.position.set(zt*(Ft.w/2+0.7),0.2,0),Ct(Lt),Pt.add(Lt)}),this.printer.add(Pt),this.resinMat=new R({color:"#9c8c6a",transparent:!0,opacity:0.26,roughness:0.12,clearcoat:0.4,depthWrite:!1}),N(this.resinMat,{cut:this.cutPrinter});let Ut=new i(new S(Ft.w-0.02,ae,Ft.d-0.02),this.resinMat);Ut.position.y=ae/2,Ut.renderOrder=2,this.printer.add(Ut);let jt=new i(ee(2.6,14,1.4,0.2,0.05),T);jt.position.set(0,4.4,-5.9),Ct(jt),this.printer.add(jt),[-0.8,0.8].forEach((zt)=>{let Lt=new i(new S(0.22,13,0.18),tt);Lt.position.set(zt,4.5,-5.12),this.printer.add(Lt)});let Ht=new i(new M(0.09,0.09,13,12),j);Ht.position.set(0,4.5,-5),this.printer.add(Ht),this.carriage=new u;let Vt=new i(ee(2.4,1.2,0.8,0.12,0.04),E);Vt.position.set(0,0.95,-4.75),Ct(Vt);let Wt=new i(ee(1.1,0.42,4.6,0.12,0.03),E);Wt.position.set(0,1,-2.45),Ct(Wt);let Bt=new i(ee(2.2,0.75,1.6,0.14,0.04),tt);Bt.position.set(0,0.62,-0.1);let Qt=new i(new M(0.22,0.22,0.35,20),j);Qt.position.set(0,1.15,-0.1);let Nt=new i(ee(9,0.22,6.6,0.18,0.04),tt);Nt.position.set(0,0.11,0),Ct(Nt),this.carriage.add(Vt,Wt,Bt,Qt,Nt),this.printer.add(this.carriage);let Gt=new i(new b(80,80),new v({color:"#0a0807",roughness:0.75,metalness:0.2}));Gt.rotation.x=-Math.PI/2,Gt.position.y=-2.58,this.floor=Gt,this.scene.add(Gt),this.scene.add(this.printer)}_buildExtras(){this.dripCount=36,this.drips=new V(new X(1,10,8),new R({color:"#efe6d2",roughness:0.05,clearcoat:1,transmission:0,transparent:!0,opacity:0.92}),this.dripCount),this.drips.frustumCulled=!1,this.dripState=Array.from({length:this.dripCount},()=>({active:!1,t:0,y:0,v:0,a:0,wait:Math.random()*2})),this.scene.add(this.drips);let o=new u,T=[],E=48;for(let Ct=0;Ct<E;Ct++){let L=Ct/E*Math.PI*2;T.push(Math.cos(L)*3.6,0,Math.sin(L)*3.6)}let tt=new l;tt.setAttribute("position",new s(T,3)),this.ringDotsMat=new d({transparent:!0,depthWrite:!1,blending:_,uniforms:{uOpacity:{value:0},uColor:{value:c.amber.clone()},uSize:{value:7*this.renderer.getPixelRatio()}},vertexShader:"uniform float uSize; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = uSize * (8.0 / -mv.z); }",fragmentShader:"uniform float uOpacity; uniform vec3 uColor; void main(){ vec2 c = gl_PointCoord-0.5; float d = dot(c,c); if(d>0.25) discard; float a = smoothstep(0.25,0.0,d)*uOpacity; gl_FragColor = vec4(uColor*a*2.0, a); }"});let j=new mt(tt,this.ringDotsMat);this.turntableMat=new v({color:"#1a1714",metalness:0.8,roughness:0.25,transparent:!0,opacity:0});let at=new i(new M(2.6,2.7,0.14,64),this.turntableMat);at.position.y=-0.08,this.turntableLine=new i(new G(2.62,2.7,96),new y({color:c.amber,transparent:!0,opacity:0,side:p,blending:_,depthWrite:!1})),this.turntableLine.rotation.x=-Math.PI/2,this.turntableLine.position.y=0,o.add(j,at,this.turntableLine),o.position.set(0,2.25,1.2),this.cureRing=o,this.scene.add(o)}_buildCameraPath(){let o=[[0,[1,2.4,10.2],[0,3.55,0.3]],[0.14,[-2.8,2.6,9.6],[0,3.6,0.3]],[0.28,[-4.6,4.2,8.8],[0,3.45,0.2]],[0.345,[9.5,7.8,19.5],[0,1.2,-0.4]],[0.5,[6.4,2.1,12.4],[0,1,0]],[0.8,[4.8,2.7,10.8],[0,1.9,0.2]],[0.86,[3.4,3.6,11.2],[0,3.1,0.3]],[0.95,[0,3,10.6],[0,3.4,1.2]],[1,[0,2.85,10],[0,3.4,1.2]]];this.camKeys=o.map((T)=>T[0]),this.camPos=new U(o.map((T)=>new t(...T[1])),!1,"centripetal"),this.camTgt=new U(o.map((T)=>new t(...T[2])),!1,"centripetal"),this._tmpPos=new t,this._tmpTgt=new t}_camParam(o){let T=this.camKeys;for(let E=0;E<T.length-1;E++)if(o<=T[E+1]){let tt=(o-T[E])/(T[E+1]-T[E]);return(E+I(P(tt)))/(T.length-1)}return 1}setProgress(o){this.targetP=P(o)}setPointer(o,T){this.pointer.set(o,T)}setShift(o,T){this.shift.x=o,this.shift.y=T,this._applyView()}resize(){let o=this.canvas.clientWidth||window.innerWidth,T=this.canvas.clientHeight||window.innerHeight;if(this.w=o,this.h=T,this.renderer.setSize(o,T,!1),this.composer)this.composer.setSize(o,T),this.bloom.resolution.set(o/2,T/2);this.camera.aspect=o/T,this.camera.fov=o/T<0.8?46:o/T<1.2?40:34,this._applyView()}_applyView(){if(!this.w)return;let{w:o,h:T}=this;this.camera.setViewOffset(o,T,-this.shift.x*o,-this.shift.y*T,o,T),this.camera.updateProjectionMatrix()}update(o,T){if(this.time=T,this.p=O(this.p,this.targetP,4.2,o),Math.abs(this.p-this.targetP)<0.00001)this.p=this.targetP;let E=this.p;this.pointerS.x=O(this.pointerS.x,this.pointer.x,3,o),this.pointerS.y=O(this.pointerS.y,this.pointer.y,3,o);let tt=f(E,0.01,_t.scanEnd-0.015);this.pointsMat.uniforms.uScan.value=tt,this.pointsMat.uniforms.uTime.value=T;let j=f(E,_t.scanEnd,_t.cadEnd),at=f(E,_t.cadEnd,_t.matEnd);this.pointsMat.uniforms.uFade.value=1-f(E,_t.scanEnd+0.02,_t.scanEnd+0.09)*0.92-at*0.08,this.points.visible=E<_t.matEnd;let Ct=f(E,0,0.025)*(1-f(E,_t.scanEnd-0.03,_t.scanEnd));if(this.scanner.visible=Ct>0.001,this.scanner.visible){let qt=P(tt*1.02),ne=this.archCurve.getPointAt(qt),ue=this.archCurve.getTangentAt(qt);this.scanner.position.set(ne.x,te+this.partBottom-0.45+Math.sin(T*3)*0.03,ne.z+this.zCentre),this.scanner.lookAt(this.scanner.position.x*1.25,this.scanner.position.y-2.2,this.scanner.position.z+2.6),this.scannerMats.forEach((le,ce)=>le.opacity=(ce===3?0.08:1)*Ct),this.scanLight.position.copy(this.scanner.position).add(new t(0,0.6,0)),this.scanLight.intensity=2.2*Ct}else this.scanLight.intensity=0;let L=f(E,_t.scanEnd-0.01,_t.scanEnd+0.07),Et=f(E,_t.cadEnd+0.005,_t.matEnd+0.01);this.holoMat.uniforms.uReveal.value=yt(L),this.holoMat.uniforms.uRevealY.value.set(te+this.partBottom-0.1,te+0.1),this.holoMat.uniforms.uOpacity.value=L*(1-Et),this.holoMat.uniforms.uTime.value=T,this.holoTeeth.visible=this.holoGum.visible=L>0&&Et<1;let Pt=f(E,_t.scanEnd+0.05,_t.cadEnd-0.01);if(this.supportsHolo.visible=Pt>0&&Et<1,this.supportsHolo.visible){let qt=this._o||(this._o=new h),ne=this.supportBases.length;this.supportBases.forEach((ue,le)=>{let ce=P(Pt*1.6-le/ne*0.6);qt.position.copy(ue),qt.scale.set(1,Math.max(0.0001,(ie-ue.y)*yt(ce)),1),qt.updateMatrix(),this.supportsHolo.setMatrixAt(le,qt.matrix)}),this.supportsHolo.instanceMatrix.needsUpdate=!0,this.supportsHolo.material.opacity=0.5*(1-Et)}let At=f(E,_t.scanEnd+0.03,_t.scanEnd+0.09)*(1-Et);this.gridMat.uniforms.uOpacity.value=At,this.bracketMat.opacity=At*0.7;let Rt=f(E,_t.cadEnd-0.01,_t.matEnd+0.02),It=f(E,_t.supportsEnd,_t.presentEnd+0.02);this.cutPrinter.uCutY.value=It>0?12-I(It)*15:-3+I(Rt)*15,this.printer.visible=Rt>0.0001&&It<0.999,this.floor.visible=this.printer.visible;let kt=f(E,_t.matEnd,_t.descendEnd),Tt=f(E,_t.descendEnd,_t.printEnd),Ot=f(E,_t.printEnd,_t.liftEnd),Dt;if(E<_t.matEnd)Dt=te;else if(E<_t.descendEnd)Dt=te*(1-I(kt));else if(E<_t.printEnd)Dt=this.partDepth*Tt;else Dt=this.partDepth+(te-this.partDepth)*I(Ot);let Ut=E>_t.descendEnd&&E<_t.printEnd,jt=T%0.9/0.9,Ht=Ut?jt<0.68?1:0:0,Vt=Ut?Math.sin(P((jt-0.68)/0.32)*Math.PI)*0.07:0;this.carriage.position.y=Dt+Vt;let Wt=f(E,_t.liftEnd,_t.supportsEnd),Bt=I(f(E,_t.supportsEnd,_t.presentEnd));this.part.visible=E>=_t.descendEnd-0.002;let Qt=Bt*Math.sin(T*0.35)*0.4;this.part.position.set(0,Dt+Vt-Bt*0.15,Bt*1.2),this.part.rotation.set(-Bt*0.12,Qt,0),this.cutPart.uCutY.value=Vt;let Nt=c.uvHot;if(this.cutPart.uCapColor.value.copy(Ht?Nt:c.resin).multiplyScalar(Ht?2.4:0.85),this.cutPart.uGlow.value=Ht?2.6:0.2,this.cutSupports.uCapColor.value.copy(this.cutPart.uCapColor.value),this.cutSupports.uGlow.value=this.cutPart.uGlow.value,Wt>0)this.cutSupports.uCutDir.value=-1,this.cutSupports.uCutY.value=this.part.position.y+0.05-Wt*(xe+0.16),this.cutSupports.uCapColor.value.copy(c.uvHot).multiplyScalar(2.2),this.cutSupports.uGlow.value=2.5;else this.cutSupports.uCutDir.value=1,this.cutSupports.uCutY.value=Vt;this.supports.visible=this.raft.visible=Wt<1;let Gt=I(f(E,_t.presentEnd-0.03,1));this.char.uChar.value=Gt,this.teethMat.roughness=0.2+Gt*0.1,this.teethMat.clearcoat=0.8-Gt*0.35,this.gumMat.roughness=0.26+Gt*0.2,this.gumMat.clearcoat=0.6-Gt*0.3,this.uvLight.intensity=(Ut?5.5*Ht+0.6:0)*this.printer.visible,this.lcdMat.emissiveIntensity=Ut?0.25+Ht*1.4:0;let zt=Ut?Math.max(1,Math.round(Dt/this.partDepth*this.layers)):E>=_t.printEnd?this.layers:0;if(Ut&&zt!==this._lastLayer)this._drawSlice(-Dt),this._lastLayer=zt;this._updateDrips(o,E,Dt);let Lt=f(E,_t.supportsEnd+0.02,_t.presentEnd)*(1-f(E,0.985,1)*0.6);this.cureRing.visible=Lt>0.001,this.ringDotsMat.uniforms.uOpacity.value=Lt,this.turntableMat.opacity=Lt*0.9,this.turntableLine.material.opacity=Lt*0.8,this.cureRing.rotation.y=T*0.4,this.cureLight.intensity=Lt*6;let Zt=this._camParam(E);this.camPos.getPoint(Zt,this._tmpPos),this.camTgt.getPoint(Zt,this._tmpTgt);let Kt=this.w/this.h;if(Kt<1){let qt=1+(1-Kt)*0.75;this._tmpPos.sub(this._tmpTgt).multiplyScalar(qt).add(this._tmpTgt)}let re=Math.sin(T*0.4)*0.12;this._tmpPos.x+=this.pointerS.x*0.9+re,this._tmpPos.y+=this.pointerS.y*0.5+Math.cos(T*0.33)*0.08,this.camera.position.copy(this._tmpPos),this.camera.lookAt(this._tmpTgt);let Xt=this.readout;Xt.step=E<ve[0]?0:E<ve[1]?1:E<ve[2]?2:3,Xt.points=Math.round(this.pointCount*P(tt)),Xt.supports=Math.round(this.supportCount*Pt),Xt.layer=zt,Xt.layers=this.layers,Xt.z=Math.max(0,(E<_t.descendEnd?0:Math.min(Dt,this.partDepth))*10),Xt.progress=E,Xt.uvOn=Ht}_updateDrips(o,T,E){let tt=f(E+this.partBottom,ae+0.05,ae+0.4)*(1-f(T,_t.liftEnd+0.005,_t.supportsEnd)),j=this._od||(this._od=new h),at=this._vd||(this._vd=new t),Ct=!1;this.dripState.forEach((L,Et)=>{if(L.active&&T>_t.supportsEnd)L.active=!1;if(!L.active){if(L.wait-=o,tt>0.05&&L.wait<=0&&T>_t.printEnd)L.active=!0,L.t=0,L.v=0,L.a=Math.random()*this.dripAnchors.length|0,L.size=0.025+Math.random()*0.025,L.fall=!1}if(L.active){if(Ct=!0,at.copy(this.dripAnchors[L.a]),this.part.localToWorld(at),!L.fall){L.t+=o*(0.8+Math.random()*0.4);let Pt=Math.min(1,L.t/0.9);if(j.position.set(at.x,at.y-L.size*Pt*1.6,at.z),j.scale.set(L.size*Pt,L.size*(1+Pt*1.8),L.size*Pt),L.t>0.9)L.fall=!0,L.y=j.position.y}else if(L.v+=9.8*o*0.6,L.y-=L.v*o,j.position.set(at.x,L.y,at.z),j.scale.set(L.size*0.85,L.size*1.7,L.size*0.85),L.y<ae)L.active=!1,L.wait=0.2+Math.random()*(1.6/Math.max(tt,0.1))}else j.scale.setScalar(0),j.position.set(0,-50,0);j.updateMatrix(),this.drips.setMatrixAt(Et,j.matrix)}),this.drips.visible=Ct,this.drips.instanceMatrix.needsUpdate=!0}_drawSlice(o){let T=this.sliceCtx,E=this.sliceCanvas.width,tt=this.sliceCanvas.height,j=E/Ft.w,at=tt/Ft.d,Ct=(Tt)=>E/2+Tt*j,L=(Tt)=>tt/2+Tt*at;T.globalCompositeOperation="source-over",T.fillStyle="#000",T.fillRect(0,0,E,tt),T.fillStyle="#ffe3a8",T.strokeStyle="#ffe3a8",T.lineCap="round";let Et=()=>{T.beginPath();for(let Tt=0;Tt<=80;Tt++){let Ot=this.archCurve.getPointAt(Tt/80),Dt=Ct(Ot.x),Ut=L(Ot.z+this.zCentre);if(Tt===0)T.moveTo(Dt,Ut);else T.lineTo(Dt,Ut)}};if(o>ie-0.02)Et(),T.lineWidth=1*j,T.stroke();this.supportBases.forEach((Tt)=>{if(o<ie&&o>Tt.y-0.06)T.beginPath(),T.arc(Ct(Tt.x),L(Tt.z),2,0,Math.PI*2),T.fill()});let Pt=o-this.gumOffsetY,At=0.18,Rt=Pt>At?0.34:0.38,It=(Pt-At)/Rt;if(Math.abs(It)<1){let Tt=0.46*Math.pow(1-Math.pow(Math.abs(It),2.5),0.4);Et(),T.lineWidth=Math.max(1,Tt*2*j),T.stroke()}let kt=-(o-this.gumOffsetY);this.layout.teeth.forEach((Tt)=>{if(kt<0||kt>Tt.h)return;let Ot=kt/Tt.h,Dt=Ot<0.7?0.8+0.25*Math.sin(Ot/0.7*Math.PI*0.6):Math.sqrt(Math.max(0,1-(Ot-0.7)/0.3))*0.9,Ut=Math.atan2(Tt.tangent.z,Tt.tangent.x);T.save(),T.translate(Ct(Tt.pos.x),L(Tt.pos.z+this.zCentre)),T.rotate(Ut),T.beginPath(),T.ellipse(0,0,Math.max(0.5,Tt.w/2*Dt*j),Math.max(0.5,Tt.d/2*Dt*at),0,0,Math.PI*2),T.fill(),T.restore()}),this.sliceTex.needsUpdate=!0}render(){if(this.composer)this.composer.render();else this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose()}}export{ye as HeroScene};
