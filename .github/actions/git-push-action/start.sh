#!/bin/sh
set -e

# echo "resetting now"
# git reset --hard

INPUT_BRANCH=${INPUT_BRANCH:-master}
INPUT_FORCE=${INPUT_FORCE:-false}
INPUT_DIRECTORY=${INPUT_DIRECTORY:-'.'}
_FORCE_OPTION=''

REPOSITORY=${INPUT_REPOSITORY:-$GITHUB_REPOSITORY}

echo "Push to branch $INPUT_BRANCH";
[ -z "${INPUT_GITHUB_TOKEN}" ] && {
    echo 'Missing input "github_token: ${{ secrets.GITHUB_TOKEN }}".';
    exit 1;
};

if ${INPUT_FORCE}; then
    _FORCE_OPTION='--force'
fi

cd ${INPUT_DIRECTORY}

echo "ACTOR AND TOKEN - ${GITHUB_ACTOR}:${INPUT_GITHUB_TOKEN}";

remote_repo="https://${GITHUB_ACTOR}:${INPUT_GITHUB_TOKEN}@github.com/${REPOSITORY}.git"
git config user.name "Automated Publisher"
git config user.email "actions@users.noreply.github.com"
git remote add publisher "${remote_repo}"

git checkout master;

mv ../demo/dist .;
git add -A;
git commit -m "Automated publish: ${COMMIT_MESSAGE} ${GITHUB_SHA}" || exit 0;

git log;
git status;
# git remote add publisher "${remote_repo}"

git push publisher master;