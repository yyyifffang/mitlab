import styles from "./page.module.scss"
import * as React from "react";
import ArticleShow from "./component/ArticleShow"

export default function Research() {

    return(
        <>
            <div className={styles.research}>
                研究方向
            </div> 
            <div>
                <ArticleShow/>
            </div>
        </>
    )
}

