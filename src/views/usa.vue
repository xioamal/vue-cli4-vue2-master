<template>
  <div class="partent">
		<div class="cententcenter">
			<div class="main">
				<div class="header">
					<h2>NowadaysNowadays</h2>
					<p>Nowadays, more and more middle-aged people are suffering from insomnia, as life for the middle-aged is stressful indeed. For one thing, as they are the backbones of their companies, they have plenty of things to do at work. And they usually have to work overtime. For another, they have to take great responsibilities at home, for their aged parents need to be supported and their little children need to be brought up. That's why they don't have enough time to have a good rest.</p>
				</div>
				<div class="banner">
					<img :src="require('@a/img/banner.jpg')" alt="banner">
				</div>
				<div class="production">
					<h2>加速机器学习的好处</h2>
					<div class="center">
						<div class="item">
							<img src="@a/img/item.png" alt="item">
							<h4>减少支出</h4>
							<p>Do you agree or disagree with the following statement? Children should be required to help with household tasks as soon as they are able to do so.</p>
						</div>
						<div class="item">
							<img src="@a/img/item.png" alt="item">
							<h4>减少支出</h4>
							<p>Do you agree or disagree with the following statement? Children should be required to help with household tasks as soon as they are able to do so.</p>
						</div>
						<div class="item">
							<img src="@a/img/item.png" alt="item">
							<h4>减少支出</h4>
							<p>Do you agree or disagree with the following statement? Children should be required to help with household tasks as soon as they are able to do so.</p>
						</div>
					</div>
				</div>
				<div class="advantage">
					<h2>Do you agree or disagree</h2>
					<div class="advantage_main">
						<div class="left">
							<p>Do you agree or disagree with the following statement? Children should be required to help with household tasks as soon as they are able to do so. Use specific reasons and examples to support your answer.</p>
						</div>
						<div class="right">
							<img :src="require('@a/img/33.png')" alt="33">
						</div>
					</div>
				</div>
			</div>
		</div>
		
    </div>
</template>
<style lang="scss" scoped>
*{ box-sizing: border-box;}
.partent{
	margin: 0; padding: 0;
	display: flex; justify-content: center; align-items: center;
	.cententcenter{
		max-width: 1200px; height: auto;
		.main{
			.header{
				padding: 0 15px;
				h2{color: #333333; font-weight: bold; font-size: 26px; margin: 30px 0;}
				p{letter-spacing: .2px; font-size: 16px; color: #666666; line-height: 28px;}
			}
			.banner{
				width: 100%; height: auto; padding: 0 20px; box-sizing: border-box;
				img{ width:calc(100%); border-radius: 5px;}
			}
			.production{
				padding: 0 30px;
				h2{width: 100%; text-align: center;}
				.center{
					width: 100%; overflow: hidden;
					.item{
						width: 30%;margin: 1.6%; float: left; box-sizing: border-box; padding: 15px 20px;
						box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.096); transition: all .3s;
						img{width: 100%;}
						h4{ font-size: 18px; color: #333333; }
						p{
							line-height: 1.6; font-size: 14px; letter-spacing: .2px; color: #666666; 
						}
					}
					.item:hover{ box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.2);}
				}
			}
			.advantage{
				h2{margin: 60px 0;}
				.advantage_main{
					display: flex; width: 100%;
					.left{width: 50%;
						p{padding: 20px;}
					}
					.right{
						width: 50%; padding: 0 40px;
						img{width: 100%;border-radius: 5px;}
					}
				}
			}
		}
	}
}
</style>