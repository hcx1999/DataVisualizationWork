// 使用 fetch API 获取 JSON 数据
fetch('data.json')
.then(response => response.json())
.then(data => {
    // 动态创建和插入 HTML 元素
    document.title = data.title;

    const header = document.createElement('header');
    header.id = 'header';
    header.innerHTML = `
        <h3 class="header-title">${data.title}</h3>
    `;
    document.body.appendChild(header);

    const body = document.createElement('body');
    body.id = 'body';
    body.innerHTML = `
        <div id="container">
			<div id="flexCon">
				<div class="flex-row">
					<div class="flex-cell flex-cell-l">
						<div class="chart-wrapper">
							<h3 class="chart-title">图表</h3>
							<div class="chart-div">
								<div class="chart-loader"><div class="loader"></div></div>
							</div>
						</div>
					</div>
					<div class="flex-cell flex-cell-c">
						<div class="chart-wrapper">
							<h3 class="chart-title"></h3>
							<div class="chart-div"></div>
						</div>
					</div>
					<div class="flex-cell flex-cell-r">
						<div class="chart-wrapper">
							<h3 class="chart-title"></h3>
							<div class="chart-div chart-done">
								<div class="chart-loader"><div class="loader"></div></div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-row">
					<div class="flex-cell flex-cell-lc">
						<div class="chart-wrapper">
							<h3 class="chart-title"></h3>
							<div class="chart-div chart-done">
								<div class="chart-loader"><div class="loader"></div></div>
							</div>
						</div>
					</div>
					<div class="flex-cell flex-cell-r">
						<div class="chart-wrapper">
							<h3 class="chart-title"></h3>
							<div class="chart-div chart-done">
								<div class="chart-loader"><div class="loader"></div></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    `;
    document.body.appendChild(body);

    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.innerHTML = `
        <p class="footer-text">${data.footer}</p>
    `;
    document.footer.appendChild(footer);
})
.catch(error => console.error('Error fetching data:', error));