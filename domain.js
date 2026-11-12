export const normalize = value => String(value).normalize('NFKC').toLocaleLowerCase().trim();
export function filterClubs(items, { query = '', category = 'all', beginner = false, savedOnly = false, saved = [] } = {}) {
  const q = normalize(query);
  return items.filter(item => (category === 'all' || item.category === category)
    && (!beginner || item.beginner) && (!savedOnly || saved.includes(item.id))
    && (!q || normalize([item.name.en, item.name.ja, item.subtitle.en, item.subtitle.ja, item.summary.en, item.summary.ja].join(' ')).includes(q)));
}
export function filterRestaurants(items, { area = 'all', diet = 'all' } = {}) {
  return items.filter(item => (area === 'all' || item.area === area)
    && (diet === 'all' || (diet === 'unconfirmed' ? item.diets.length === 0 : item.diets.includes(diet))));
}
export function buildClubMessage({ name = '', club = '', period = '', japanese = '' } = {}) {
  return {
    en: `Hello${club ? ` ${club}` : ''},\n\nMy name is ${name || '[your name]'}. I am an international student at Okayama University and I am interested in your club.\nMy study period is ${period || '[your study period]'}. My Japanese level is ${japanese || '[your Japanese level]'}.\n\nCould I visit to observe a practice or activity? Could you let me know about participation conditions, language support, fees, insurance and anything I should prepare?\n\nThank you!`,
    ja: `${club || '部活動'}の皆さま\n\nはじめまして。岡山大学の留学生の${name || '［名前］'}です。皆さんの活動に興味があります。\n在籍期間は${period || '［在籍期間］'}、日本語のレベルは${japanese || '［日本語のレベル］'}です。\n\n一度見学させていただくことはできますか。参加条件、言語のサポート、費用、保険、必要な持ち物について教えていただけるとうれしいです。\n\nよろしくお願いします。`
  };
}
export const dietaryPhrases = {
  vegan: {
    en: 'I eat vegan food. I do not eat meat, fish, seafood, eggs, dairy, honey, gelatin, or animal-based broth. Could you tell me which dishes are suitable and whether preparation equipment is shared?',
    ja: '私はビーガンです。肉・魚介類・卵・乳製品・はちみつ・ゼラチン・動物性のだしを食べません。対応できる料理と、調理器具を共用しているかを教えていただけますか。'
  },
  halal: {
    en: 'I would like to ask about halal options. Does this dish contain pork, pork-derived ingredients, alcohol or alcohol-based seasonings? Is the meat halal-certified, and are utensils or cooking oil shared? I will explain my individual requirements.',
    ja: 'ハラール対応について相談したいです。この料理には豚肉・豚由来成分・アルコール・アルコールを含む調味料が入っていますか。肉はハラール認証を受けていますか。調理器具や油は共用ですか。私自身の条件をお伝えします。'
  },
  together: {
    en: 'Shall we choose a place where everyone can enjoy a meal? Is there anything you do not eat, or anything you would like us to check? You do not need to explain the reason.',
    ja: 'みんなで楽しめるお店を一緒に選びませんか。食べないものや、事前に確認してほしいことはありますか。理由は話したくなければ話さなくて大丈夫です。'
  }
};
