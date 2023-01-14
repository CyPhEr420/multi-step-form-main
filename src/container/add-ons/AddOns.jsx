import './add-ons.css'

const AddOns = ({ addons, setAddons }) => {

    return (
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="add-ons-container">
                <label htmlFor="onlineService" className={` ${addons.onlineService ? 'active' : null} add-on`}>
                    <div className="add-on-info">
                        <input type="checkbox"
                            id='onlineService'
                            checked={addons.onlineService}
                            onChange={() => {
                                setAddons((prev) => ({
                                    ...prev,
                                    onlineService: !addons.onlineService
                                }))
                            }}
                        />
                        <div className="add-on-desc">
                            <h4>Online Service</h4>
                            <p>Access to multi player games.</p>
                        </div>
                    </div>
                    <div className="add-on-price">
                        <p>+$1/mo</p>
                    </div>

                </label>
                <label htmlFor="largerStorage" className={` ${addons.largerStorage ? 'active' : null} add-on`}>
                    <div className="add-on-info">
                        <input id='largerStorage' type="checkbox"
                            checked={addons.largerStorage}
                            onChange={() => {
                                setAddons((prev) => ({
                                    ...prev,
                                    largerStorage: !addons.largerStorage
                                }))
                            }} />
                        <div className="add-on-desc">
                            <h4>Larger storage</h4>
                            <p>Extra 1tb of cloud save.</p>
                        </div>
                    </div>
                    <div className="add-on-price">
                        <p>+$2/mo</p>
                    </div>
                </label>
                <label htmlFor='customProfile' className={` ${addons.customProfile ? 'active' : null} add-on`}>
                    <div className="add-on-info">
                        <input id="customProfile" type="checkbox"
                            checked={addons.customProfile}
                            onChange={() => {
                                setAddons((prev) => ({
                                    ...prev,
                                    customProfile: !addons.customProfile
                                }))
                            }}
                        />
                        <div className="add-on-desc">
                            <h4>Customizable profile</h4>
                            <p>Custom theme on your profile.</p>
                        </div>
                    </div>
                    <div className="add-on-price">
                        <p>+$2/mo</p>
                    </div>
                </label>
            </div>
        </>
    )
}

export default AddOns