

$(document).ready(function(){


			(function() {
				
				var support = { animations : Modernizr.cssanimations },
					animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
					animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
					onEndAnimation = function( el, callback ) {
						var onEndCallbackFn = function( ev ) {
							if( support.animations ) {
								if(ev.target != this) return;
								this.removeEventListener( animEndEventName, onEndCallbackFn);
							}
							if(callback && typeof callback === 'function') {callback.call();}
						};
						if( support.animations ) {
							el.addEventListener(animEndEventName, onEndCallbackFn);
						}
						else {
							onEndCallbackFn();
						}
					};

				function nextSibling(el) {
					var nextSibling = el.nextSibling;
					while(nextSibling && nextSibling.nodeType != 1) {
					nextSibling = nextSibling.nextSibling
					}
					return nextSibling;
				}

				var yuda = new Stack(document.getElementById('stack_yuda')),
					krisna = new Stack(document.getElementById('stack_krisna')),
					wangi = new Stack(document.getElementById('stack_wangi')),
					wira = new Stack(document.getElementById('stack_wira')),
					utari = new Stack(document.getElementById('stack_utari'), {
						stackItemsAnimationDelay: 240,
						stackItemsAnimation : {
							duration : 360,
							type : dynamics.bezier,
							points : [{'x':0,'y':0,'cp':[{'x':0.4,'y':1}]},{'x':1,'y':1,'cp':[{'x':0.3,'y':1}]}]
						},
					}),
					slamet = new Stack(document.getElementById('stack_slamet'), {
						infinite: false,
						perspective: 1400,
						onEndStack: function(instance) {
							setTimeout(function() {
								instance.restart();
								document.querySelector('#counter > .counter__number').innerHTML = 0;
							}, 300);
						}
					}),
					cinta = new Stack(document.getElementById('stack_cinta'), {
						perspective: 1400,
						perspectiveOrigin: '200% -100%',
						visible: 6,
						infinite: false,
						onEndStack: function(instance) {
							setTimeout(function() {
								instance.restart();
							}, 300);
						}
					}),
					eka = new Stack(document.getElementById('stack_eka'), { 
						stackItemsAnimation : {
							duration: 800, 
							type: dynamics.spring 
						}
					}),
					dian = new Stack(document.getElementById('stack_dian'), { 
						stackItemsAnimationDelay : 100,
						stackItemsAnimation : {
							duration: 800, 
							type: dynamics.spring,	
						}, 
						visible: 1, 
						perspectiveOrigin: '50% 50%'
					}),
					iman = new Stack(document.getElementById('stack_iman'), { 
						stackItemsAnimation : {
							duration: 800, 
							type: dynamics.spring	
						},
						stackItemsPreAnimation : {
							accept : {
								elastic: true,
								animationProperties: {translateX : 100, translateY : 10, rotateZ: 5},
								animationSettings: {
									duration: 100,
									type: dynamics.easeIn
								}
							},
							reject : {
								elastic: true,
								animationProperties: {translateX : -100, translateY : 10, rotateZ: -5},
								animationSettings: {
									duration: 100,
									type: dynamics.easeIn
								}
							}
						}
					}),
					iskandar = new Stack(document.getElementById('stack_iskandar'), { 
						stackItemsAnimation : {
							duration: 800, 
							type: dynamics.spring	
						}, 
						perspectiveOrigin : '50% 130%',
						visible: 5,
						stackItemsPreAnimation : {
							accept : {
								elastic: true,
								animationProperties: {translateX : 150, translateY : -10},
								animationSettings: {
									duration: 200,
									type: dynamics.easeOut
								}
							}
						}
					}),
					kasih = new Stack(document.getElementById('stack_kasih'), { 
						stackItemsAnimation : {
							duration: 1300,
							type: dynamics.spring, 
							friction: 420,
						},
						visible: 4,  
						perspectiveOrigin : '50% 50%',
						stackItemsPreAnimation : {
							accept : {
								elastic: true,
								animationProperties: {translateX : 250},
								animationSettings: {
									duration: 400,
									type: dynamics.easeIn
								}
							},
							reject : {
								elastic: true,
								animationProperties: {translateX : -250},
								animationSettings: {
									duration: 400,
									type: dynamics.easeIn
								}
							}
						}
					}),
					buana = new Stack(document.getElementById('stack_buana'), { 
						perspectiveOrigin : '-50% -50%'
					}),
					mawar = new Stack(document.getElementById('stack_mawar'), {
						perspective : 1500,
						perspectiveOrigin : '-150% 50%',
						visible: 4,
						stackItemsAnimation : {
							duration: 1300,
							type: dynamics.spring
						},
						stackItemsPreAnimation : {
							accept : {
								elastic: true,
								animationProperties: {translateX : 100},
								animationSettings: {
									duration: 200,
									type: dynamics.easeIn
								}
							},
							reject : {
								elastic: true,
								animationProperties: {translateX : -100},
								animationSettings: {
									duration: 200,
									type: dynamics.easeIn
								}
							}
						}
					});

				// controls the click ring effect on the button
				var buttonClickCallback = function(bttn) {
					var bttn = bttn || this;
					bttn.setAttribute('data-state', 'unlocked');
				};

				document.querySelector('.button--accept[data-stack = stack_yuda]').addEventListener(clickeventtype, function() { yuda.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_yuda]').addEventListener(clickeventtype, function() { yuda.reject(buttonClickCallback.bind(this)); });
				
				document.querySelector('.button--accept[data-stack = stack_krisna]').addEventListener(clickeventtype, function() { krisna.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_krisna]').addEventListener(clickeventtype, function() { krisna.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_wangi]').addEventListener(clickeventtype, function() { wangi.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_wangi]').addEventListener(clickeventtype, function() { wangi.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_wira]').addEventListener(clickeventtype, function() { wira.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_wira]').addEventListener(clickeventtype, function() { wira.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_utari]').addEventListener(clickeventtype, function() { utari.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_utari]').addEventListener(clickeventtype, function() { utari.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_slamet]').addEventListener(clickeventtype, function(ev) { 
					var callback = function() {
						// increment counter
						var counter = document.querySelector('#counter > .counter__number'),
							count = parseInt(counter.innerHTML);
						counter.innerHTML = count + 1;

						buttonClickCallback(ev.target);
					};
					slamet.accept(callback);
				});
				document.querySelector('.button--reject[data-stack = stack_slamet]').addEventListener(clickeventtype, function() { slamet.reject(buttonClickCallback.bind(this)); });	

				document.querySelector('.button--accept[data-stack = stack_cinta]').addEventListener(clickeventtype, function() { cinta.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_cinta]').addEventListener(clickeventtype, function() { cinta.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_eka]').addEventListener(clickeventtype, function() { eka.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_eka]').addEventListener(clickeventtype, function() { eka.reject(buttonClickCallback.bind(this)); });
				
				document.querySelector('.button--accept[data-stack = stack_dian]').addEventListener(clickeventtype, function() { dian.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_dian]').addEventListener(clickeventtype, function() { dian.reject(buttonClickCallback.bind(this)); });
				
				document.querySelector('.button--accept[data-stack = stack_iman]').addEventListener(clickeventtype, function() { iman.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_iman]').addEventListener(clickeventtype, function() { iman.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_iskandar]').addEventListener(clickeventtype, function() { iskandar.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_iskandar]').addEventListener(clickeventtype, function() { iskandar.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_kasih]').addEventListener(clickeventtype, function() { kasih.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_kasih]').addEventListener(clickeventtype, function() { kasih.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_buana]').addEventListener(clickeventtype, function() { buana.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_buana]').addEventListener(clickeventtype, function() { buana.reject(buttonClickCallback.bind(this)); });

				document.querySelector('.button--accept[data-stack = stack_mawar]').addEventListener(clickeventtype, function() { mawar.accept(buttonClickCallback.bind(this)); });
				document.querySelector('.button--reject[data-stack = stack_mawar]').addEventListener(clickeventtype, function() { mawar.reject(buttonClickCallback.bind(this)); });

				[].slice.call(document.querySelectorAll('.button--sonar')).forEach(function(bttn) {
					bttn.addEventListener(clickeventtype, function() {
						bttn.setAttribute('data-state', 'locked');
					});
				});

				[].slice.call(document.querySelectorAll('.button--material')).forEach(function(bttn) {
					var radialAction = nextSibling(bttn.parentNode);

					bttn.addEventListener(clickeventtype, function(ev) {
						var boxOffset = radialAction.parentNode.getBoundingClientRect(),
							offset = bttn.getBoundingClientRect();

						radialAction.style.left = Number(offset.left - boxOffset.left) + 'px';
						radialAction.style.top = Number(offset.top - boxOffset.top) + 'px';

						classie.add(radialAction, classie.has(bttn, 'button--reject') ? 'material-circle--reject' : 'material-circle--accept');
						classie.add(radialAction, 'material-circle--active');
						onEndAnimation(radialAction, function() {
							classie.remove(radialAction, classie.has(bttn, 'button--reject') ? 'material-circle--reject' : 'material-circle--accept');
							classie.remove(radialAction, 'material-circle--active');
						});
					});
				});
			})();
});