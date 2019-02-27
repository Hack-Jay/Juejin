import React from 'react';
import './index.less';

class TimelineEntryList extends React.Component {
	render() {
		return (
			<div className="timeline-entry-list">
				<div className="entry-list-container">
					<ul>
            {/* li代表一条数据 */}
						<li class="item">
							<a className="entry-link">
								<div className="entry-box">
									<div className="meta-row">
										<ul className="meta-list">
											<li className="item-hot">热</li>
											<li className="item-post">专栏</li>
											<li className="item-username">zzzzzzz</li>
											<li className="item-time">2个小时前</li>
											<li className="item-tag">JavaScript</li>
										</ul>
									</div>
									<div className="title-row">
                    <a class="title">
                    如何编写高质量的函数 -- 命名/注释
                    </a>
                  </div>
									<div className="action-row">
                    <ul>
                      <li className="like-btn">
                        <a>
                          <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt=""/>
                          <span className="like-text">136</span>
                        </a>
                      </li>
                    </ul>
                  </div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default TimelineEntryList;
