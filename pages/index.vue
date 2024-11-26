<template>
    <div>
        <h1 class="uk-heading-small">EasyWeek Widget Examples</h1>
        <h2 class="uk-heading-divider">Widget Button</h2>
        <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Default view</h3>
                    <img src="~/assets/img/base.png" width="240" />

                    <p class="uk-align-center">
                        <NLink to="/base">show code</NLink>
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Icon without text</h3>
                    <img src="~/assets/img/no-text.png" width="240" />
                    <p>
                        <NLink to="/no-text">show code</NLink>
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Custom style</h3>
                    <img src="~/assets/img/custom-icon.png" width="240" />
                    <p>
                        <NLink to="/custom-icon">show code</NLink>
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Change position</h3>
                    <img src="~/assets/img/left.png" width="240" />
                    <p>
                        <NLink to="/left">show code</NLink>
                    </p>
                </div>
            </div>
        </div>
        <h2 class="uk-heading-divider">Custom trigger</h2>
        <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Button & Icon</h3>
                    <img src="~/assets/img/trigger.png" width="240" />
                    <p>
                        <NLink to="/trigger">show code</NLink>
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Hide icon & Use Button</h3>
                    <img src="~/assets/img/no-button.png" width="240" />
                    <p>
                        <NLink to="/no-button">show code</NLink>
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Use multiple buttons for each service</h3>
                    <img src="~/assets/img/multi-buttons.png" width="240" />
                    <p>
                        <NLink to="/multi-buttons">show code</NLink>
                    </p>
                </div>
            </div>
        </div>
        <h2 class="uk-heading-divider">On-page Integration</h2>
        <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Built in</h3>
                    <img src="~/assets/img/built-in.png" width="240" />
                    <p>
                        <NLink to="/built-in">show code</NLink>
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Full Page</h3>
                    <img src="~/assets/img/fullpage.png" width="240" />
                    <p>
                        <NLink to="/fullpage">show code</NLink>
                    </p>
                </div>
            </div>
        </div>
        <h2 class="uk-heading-divider">New Booking Widget Integration</h2>
        <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Built in</h3>
                    <img src="~/assets/img/built-in.png" width="240" />
                    <p>
                        <NLink to="/built-in-booking">show code</NLink>
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Full Page</h3>
                    <img src="~/assets/img/fullpage.png" width="240" />
                    <p>
                        <NLink to="/fullpage-booking">show code</NLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage'
}
</script>
