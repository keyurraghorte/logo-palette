<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep MenuSense menu data and account-owned activity in Lovable Cloud with RLS; this preserves customer preferences and safety-critical allergy filtering across sessions.
- Keep role assignments in `user_roles` rather than profiles; this prevents client-editable profile data from granting elevated access.
- Keep recommendation scoring in a shared pure module and persist a preference snapshot with ranked matches; this makes the ranking explainable and historical results reproducible.
