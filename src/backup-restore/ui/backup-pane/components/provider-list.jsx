import React from 'react'
import PropTypes from 'prop-types'
import Styles from './provider-list.css'

export function ProviderList({ onChange, backupPath, handleChangeBackupPath }) {
    return (
        <div>
            <form className={Styles.form}>
                <label className={Styles.label}>
                    <div className={Styles.option}>
                        <input
                            type="radio"
                            name="backend-select"
                            onChange={() => onChange('local')}
                        />
                        <div className={Styles.textBlock}>
                            <p className={Styles.title}>
                                Backup locally or to any cloud provider
                            </p>
                            <p className={Styles.description}>
                                Backup your data to your hard drive, or to any
                                cloud provider with a syncing folder on your
                                computer (e.g. Dropbox, Spideroak, GDrive){' '}
                                <a
                                    className={Styles.link}
                                    target="_blank"
                                    href="https://www.notion.so/worldbrain/7dacad9e95b44c5db681033fc264fb59"
                                >
                                    Learn More ▸
                                </a>
                            </p>
                            {backupPath !== null ? (
                                <button
                                    className={Styles.destination}
                                    onClick={e => {
                                        e.preventDefault()
                                        handleChangeBackupPath()
                                    }}
                                >
                                    <span className={Styles.folderIcon} />
                                    {backupPath && backupPath.length ? (
                                        <p className={Styles.pathString}>
                                            {backupPath}{' '}
                                            <span className={Styles.change}>
                                                click to change path
                                            </span>
                                        </p>
                                    ) : (
                                        <p className={Styles.select}>
                                            SELECT DESTINATION FOLDER
                                        </p>
                                    )}
                                </button>
                            ) : null}
                        </div>
                    </div>
                </label>
                <br />
                <label className={Styles.label}>
                    <div className={Styles.option}>
                        <input
                            type="radio"
                            name="backend-select"
                            onChange={() => onChange('google-drive')}
                        />
                        <div className={Styles.textBlock}>
                            <span className={Styles.title}>Google Drive</span>
                            <span>
                                <img
                                    className={Styles.logo}
                                    src={'img/google-drive.png'}
                                />
                            </span>
                            <p className={Styles.description}>
                                Make sure you are trying to backup your data to
                                the same Google Account than the one logged into
                                your browser profile.
                                <a
                                    className={Styles.link}
                                    target="_blank"
                                    href="https://www.notion.so/worldbrain/7dacad9e95b44c5db681033fc264fb59"
                                >
                                    Learn More ▸
                                </a>
                            </p>
                        </div>
                    </div>
                </label>
            </form>
        </div>
    )
}

ProviderList.propTypes = {
    onChange: PropTypes.func.isRequired,
    backupPath: PropTypes.string,
    handleChangeBackupPath: PropTypes.func.isRequired,
}
